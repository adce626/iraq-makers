import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ALLOWED_EXTENSIONS = ['.mp4', '.webm', '.mov'];
const MIME_TYPES: Record<string, string> = {
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('file');

  if (!filename) {
    return new NextResponse('File not specified', { status: 400 });
  }

  const safeName = path.basename(filename);
  const ext = path.extname(safeName).toLowerCase();

  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return new NextResponse('Invalid file type', { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'public', 'videos', safeName);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Video not found', { status: 404 });
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = request.headers.get('range');
  const mimeType = MIME_TYPES[ext] || 'video/mp4';

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;

    const stream = fs.createReadStream(filePath, { start, end });

    return new NextResponse(stream as unknown as ReadableStream, {
      status: 206,
      headers: {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': String(chunkSize),
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  const stream = fs.createReadStream(filePath);

  return new NextResponse(stream as unknown as ReadableStream, {
    status: 200,
    headers: {
      'Content-Type': mimeType,
      'Content-Length': String(fileSize),
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}