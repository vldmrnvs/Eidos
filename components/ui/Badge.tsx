import { cn } from '../../lib/utils';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning';
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ variant = 'default', children, className }: BadgeProps) => {
  const styles = {
    default: 'bg-gray-200 text-gray-700',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-400 text-black',
  }[variant];
  return <span className={cn('px-2 py-1 rounded text-xs', styles, className)}>{children}</span>;
};
