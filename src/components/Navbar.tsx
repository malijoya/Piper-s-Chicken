import React, { useState } from 'react';
import { Link } from './Router';
import { useRouter } from '../hooks/useRouter';
import { useCart } from '../hooks/useCart';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact & Map', path: '/contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src="/images/logo.png"
              alt="Piper's Chicken Logo"
              className="h-14 w-14 rounded-full border border-red-600 object-cover shadow-lg bg-white transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-500"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
            <span className="font-display text-xl font-black tracking-wider text-white uppercase sm:text-2xl">
              Piper's <span className="text-red-600 group-hover:text-amber-500 transition-colors duration-300">Chicken</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-display font-semibold text-sm uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-amber-500' : 'text-zinc-300 hover:text-red-500'
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-red-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Cart Actions */}
        <div className="flex items-center gap-4">

          {/* Cart Icon */}
          <button
            onClick={() => navigate('/checkout')}
            className="relative p-2.5 text-zinc-300 hover:text-red-500 transition-colors duration-300 rounded-full hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="View Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 font-display text-xs font-bold text-white shadow-md box-glow-red"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Desktop CTA */}
          <button
            onClick={() => navigate('/menu')}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full font-display font-bold text-sm text-black bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all duration-300 shadow-lg shadow-amber-500/20 uppercase tracking-wide hover:shadow-amber-500/30 border border-transparent hover:border-amber-400"
          >
            Order Now
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex p-2 text-zinc-300 hover:text-red-500 focus:outline-none md:hidden rounded-full hover:bg-zinc-900"
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 top-20 z-40 bg-black md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-20 bottom-0 z-40 w-80 bg-zinc-900 border-l border-zinc-800 p-6 shadow-2xl md:hidden flex flex-col justify-between"
            >
              <div className="flex flex-col gap-6">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-zinc-500">Navigation</span>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive = currentPath === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={closeMobileMenu}
                        className={`flex items-center justify-between font-display text-lg font-bold uppercase tracking-wide py-2.5 px-4 rounded-xl border border-transparent transition-all duration-300 ${isActive
                            ? 'text-amber-500 bg-zinc-800/50 border-zinc-700/50'
                            : 'text-zinc-300 hover:text-red-500 hover:bg-zinc-800/30'
                          }`}
                      >
                        {link.name}
                        {isActive && <div className="h-2 w-2 rounded-full bg-red-600 shadow-md shadow-red-500" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile CTA */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    closeMobileMenu();
                    navigate('/menu');
                  }}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full font-display font-black text-black bg-amber-500 hover:bg-amber-600 transition-all duration-300 uppercase tracking-wider text-sm shadow-lg shadow-amber-500/20"
                >
                  Order Online
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.502-5.176-3.854-6.68-6.68l1.293-.97c.362-.271.528-.733.417-1.173L6.763 3.52a1.009 1.009 0 0 0-1.092-.852H4.25a2.25 2.25 0 0 0-2.25 2.25v2.25Z" />
                  </svg>
                  <span>(051) 2356000</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
