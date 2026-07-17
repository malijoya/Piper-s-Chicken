import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export const Contact: React.FC = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Which sectors in Islamabad do you deliver to?',
      answer: 'We provide direct home delivery to G-10, G-11, G-9, F-10, F-11, and E-11 sectors. If you live slightly outside these areas, you can still place an order for self-pickup, or order through select local delivery partner networks.'
    },
    {
      question: 'Are all your ingredients 100% Halal?',
      answer: 'Yes, absolutely. 100% of our chicken, oil, sauces, and seasonings are fully Halal-certified. We maintain the highest standards of hygiene and quality in our kitchen.'
    },
    {
      question: 'What are your operating hours?',
      answer: 'We are open from 12:00 PM (noon) to 2:00 AM daily. On Friday, Saturday, and Sunday nights, we extend our hours until 3:00 AM to satisfy your late-night cravings!'
    },
    {
      question: 'Do you cater for large parties or corporate orders?',
      answer: 'Yes! We offer bulk catering services for birthdays, family gatherings, and corporate events. Please call our hotline directly at (051) 2356000 at least 24 hours in advance to secure bulk discount pricing.'
    },
    {
      question: 'Can I customize the spiciness of my chicken?',
      answer: 'Our Classic Broast has a mild-to-medium spicy kick, while our Hot & Spicy Wings and Zingers have a kick that Pakistanis love. If you prefer extra heat, ask for our special Firecracker hot sauce glaze!'
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenFAQIndex(openFAQIndex === idx ? null : idx);
  };

  return (
    <div className="w-full py-12 sm:py-20 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">Find Us</span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white mt-1">Visit the Crunch Outpost</h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Located in the heart of Islamabad, G-10 Markaz. Pop in for a hot, fresh meal or get crispy chicken delivered straight to your door.
          </p>
        </div>

        {/* Info & Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left info panel */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col gap-8">
              
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-600/10 text-red-500 rounded-2xl border border-red-500/20 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-black text-white uppercase text-sm tracking-wider">Branch Address</h3>
                  <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                    8, 9 AAA Plaza, Bela Rd, G-10 Markaz, G-10, Islamabad, 44000
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-600/10 text-red-500 rounded-2xl border border-red-500/20 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-black text-white uppercase text-sm tracking-wider">Call Hotline</h3>
                  <a href="tel:0512356000" className="text-amber-500 hover:text-amber-400 font-display font-black text-lg block mt-1 transition-colors duration-300">
                    (051) 2356000
                  </a>
                  <span className="text-[10px] text-zinc-500 font-semibold block mt-0.5">TAP TO CALL DIRECTLY</span>
                </div>
              </div>

              {/* Timings card */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-600/10 text-red-500 rounded-2xl border border-red-500/20 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-black text-white uppercase text-sm tracking-wider">Store Timings</h3>
                  <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                    Mon - Thu: 12:00 PM - 2:00 AM<br />
                    Fri - Sun: 12:00 PM - 3:00 AM
                  </p>
                </div>
              </div>

            </div>

            {/* Direct direction buttons */}
            <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col gap-4">
              <a
                href="https://maps.google.com/?q=8,+9+AAA+Plaza,+Bela+Rd,+G-10+Markaz,+Islamabad"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display font-black text-black bg-amber-500 hover:bg-amber-600 transition-colors duration-300 uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </div>

          </div>

          {/* Right Map panel */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[400px] bg-zinc-900 border border-zinc-850 rounded-3xl overflow-hidden shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467468160411!2d73.01168437648356!3d33.68393527329584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe680f55cf55%3A0xe548cb454cb0ebad!2sG-10%20Markaz%20G-10%20Islamabad%2C%20Federal%20Area%20Capital%20Territory!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Piper's Chicken G-10 Markaz Islamabad Google Map"
              className="absolute inset-0 grayscale contrast-125"
            />
          </div>

        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto border-t border-zinc-900 pt-16">
          <div className="text-center mb-10">
            <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">Got Questions?</span>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-900/60 border border-zinc-850 rounded-2xl overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left p-6 font-display font-black text-sm uppercase tracking-wide text-white hover:text-amber-500 transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-red-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-zinc-400 font-light text-sm sm:text-base border-t border-zinc-800/40 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
