'use client';

import { getWhatsappUrl } from '@/lib/utils';
import { config } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/icons';

export function WhatsAppFloat() {
  const url = getWhatsappUrl(config.whatsappNumber, config.whatsappMessage);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 hover:bg-green-700 transition-all hover:scale-110 animate-bounce-slow bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] end-[calc(1.5rem+env(safe-area-inset-right,0px))]"
      aria-label="تواصل عبر واتساب"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}