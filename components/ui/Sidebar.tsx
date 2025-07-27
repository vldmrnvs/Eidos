import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '../../lib/utils';

export interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const router = useRouter();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/about', label: 'About' },
  ];
  return (
    <motion.aside
      initial={{ x: -240 }}
      animate={{ x: 0 }}
      className={cn('w-48 bg-gray-100 h-screen p-4 space-y-2', className)}
    >
      {links.map((l) => (
        <Link key={l.href} href={l.href} legacyBehavior>
          <a
            className={cn(
              'block px-3 py-2 rounded-md',
              router.pathname === l.href
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-200'
            )}
          >
            {l.label}
          </a>
        </Link>
      ))}
    </motion.aside>
  );
};
