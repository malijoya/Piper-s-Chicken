import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '../hooks/useRouter';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPath } = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 bg-grid-pattern">
      <Navbar />
      
      {/* Page Content with Framer Motion Page Change Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};
