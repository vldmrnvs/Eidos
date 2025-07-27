import { cn } from '../../lib/utils';

export interface SkeletonProps {
  className?: string;
}

export const SkeletonLoader = ({ className }: SkeletonProps) => (
  <div className={cn('animate-pulse rounded bg-gray-200', className)} />
);
