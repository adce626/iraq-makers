export function formatCurrency(amount: number, currency: 'IQD' | 'USD' = 'IQD'): string {
  if (currency === 'IQD') {
    return `${amount.toLocaleString('ar-IQ')} د.ع`;
  }
  return `$${amount.toFixed(2)}`;
}

export function getWhatsappUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone.replace(/^\+/, '')}?text=${encoded}`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getImagePath(path: string): string {
  if (!path) return '/placeholder.svg';
  if (path.startsWith('http') || path.startsWith('/')) return path;
  return `/${path}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + '...';
}