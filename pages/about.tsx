import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h1 className="text-2xl font-bold">About Eidos</h1>
      <p>
        Eidos is a small demo showcasing reusable React components built with TailwindCSS and Framer Motion.
        It loads sample data from the <code>/data</code> folder and demonstrates page transitions and micro interactions.
      </p>
    </motion.div>
  );
}
