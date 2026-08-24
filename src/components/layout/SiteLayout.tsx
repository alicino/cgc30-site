import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/sonner';
import { motion, AnimatePresence } from 'framer-motion';
export function SiteLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    // pequeno atraso para aguardar a troca de página e a animação de entrada
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}