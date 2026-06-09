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
