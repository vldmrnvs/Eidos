import { cn } from '../../lib/utils';

export interface PanelProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const Panel = ({ title, children, className }: PanelProps) => (
  <div className={cn('bg-gray-50 p-4 rounded-md shadow', className)}>
    <h2 className="font-semibold mb-2">{title}</h2>
    {children}
  </div>
);
