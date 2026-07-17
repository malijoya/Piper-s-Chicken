import { Link } from './Router';

export const Footer: React.FC = () => {

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Piper's Chicken Logo"
                className="h-12 w-12 rounded-full border border-red-600 object-cover bg-white"
              />
              <span className="font-display text-lg font-black tracking-wider text-white uppercase">
                Piper's <span className="text-red-600">Chicken</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Islamabad's premium crispy fried chicken joint. Seasoned with our secret blend of 15 spices, cooked fresh daily to golden, crunchy perfection.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 hover:bg-red-600 hover:text-white rounded-full text-zinc-400 transition-colors duration-300 shadow-md"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 hover:bg-red-600 hover:text-white rounded-full text-zinc-400 transition-colors duration-300 shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 hover:bg-red-600 hover:text-white rounded-full text-zinc-400 transition-colors duration-300 shadow-md"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.07-2.89-.58-4.09-1.47-.76-.57-1.39-1.3-1.89-2.13v8.83c.03 2.1-.6 4.21-1.92 5.79-1.44 1.73-3.71 2.76-5.96 2.73-2.92.05-5.75-1.57-7.14-4.14-1.5-2.73-1.16-6.28.84-8.67 1.65-2 4.28-2.97 6.84-2.58V10.1c-1.78-.17-3.62.33-4.88 1.63-1.07 1.09-1.55 2.68-1.3 4.19.24 1.49 1.19 2.85 2.55 3.52 1.34.68 2.97.71 4.31.07 1.25-.58 2.08-1.83 2.2-3.21.05-1.55.02-3.11.02-4.66.01-3.89-.01-7.79.01-11.69-.01-.01-.02-.02-.02-.03z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-500 transition-colors duration-300">Menu Highlights</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors duration-300">Our Story</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition-colors duration-300">Contact & Map</Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:text-amber-500 transition-colors duration-300">Shopping Cart</Link>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-sm">Opening Hours</h3>
            <ul className="flex flex-col gap-2.5 text-sm leading-relaxed">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">12:00 PM - 2:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span className="text-white font-medium">12:00 PM - 3:00 AM</span>
              </li>
              <li className="text-xs text-red-500 font-semibold mt-1">
                🔥 Hot & Crispy Fried Chicken delivered late night in Islamabad!
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-sm">Find Us</h3>
            <ul className="flex flex-col gap-3 text-sm leading-relaxed">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>8, 9 AAA Plaza, Bela Rd, G-10 Markaz, G-10, Islamabad, 44000</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0512356000" className="text-white hover:text-amber-500 font-bold transition-colors duration-300">
                  (051) 2356000
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Piper's Chicken. All Rights Reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-amber-500 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors duration-300">Terms of Service</a>
          </p>
        </div>

      </div>
    </footer>
  );
};
