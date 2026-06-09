'use client';

import { Button } from './Button';
import { getWhatsappUrl, cn } from '@/lib/utils';
import { config } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/icons';

interface WhatsAppButtonProps {
  productName?: string;
  productId?: string;
  className?: string;
  variant?: 'whatsapp' | 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function WhatsAppButton({
  productName,
  productId,
  className,
  variant = 'whatsapp',
  size = 'md',
  fullWidth = false,
}: WhatsAppButtonProps) {
  const message = productName
    ? `${config.whatsappMessage}${productName} (${productId})`
    : config.whatsappMessage;

  const url = getWhatsappUrl(config.whatsappNumber, message);

  return (
    <Button
      href={url}
      external
      variant={variant}
      size={size}
      className={cn(fullWidth && 'w-full', className)}
    >
      <WhatsAppIcon className="w-5 h-5" />
      اطلب عبر واتساب
    </Button>
  );
}