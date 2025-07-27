import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Header = () => (
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex items-center justify-between h-16 px-6 bg-white border-b"
  >
    <Link href="/" legacyBehavior>
      <a className="font-bold">Eidos</a>
    </Link>
    <nav className="space-x-4">
      <Link href="/login" legacyBehavior>
        <a className="text-sm text-gray-600 hover:underline">Login</a>
      </Link>
    </nav>
  </motion.header>
);
