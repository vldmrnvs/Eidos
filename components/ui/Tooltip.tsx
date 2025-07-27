import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [show, setShow] = React.useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute left-1/2 top-full mt-1 -translate-x-1/2 rounded bg-black text-white text-xs px-2 py-1"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
