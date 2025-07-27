import { cn } from '../../lib/utils';

export interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar = ({ src, alt, size = 'md', className }: AvatarProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }[size];
  return (
    <img
      src={src}
      alt={alt}
      className={cn('rounded-full object-cover', sizes, className)}
    />
  );
};
