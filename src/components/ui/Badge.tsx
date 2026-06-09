import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-gray-700 text-gray-200',
    success: 'bg-green-900/50 text-green-400 border border-green-500/30',
    warning: 'bg-yellow-900/50 text-yellow-400 border border-yellow-500/30',
    info: 'bg-blue-900/50 text-blue-400 border border-blue-500/30',
  };

  return (
    <span className={cn('inline-block px-3 py-1 rounded-full text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  );
}