import { useRouter } from '../hooks/useRouter';
import { useCart } from '../hooks/useCart';
import { menuItems } from '../data/menu';
import { motion } from 'framer-motion';

export const Home = () => {
  const { navigate } = useRouter();
  const { addToCart } = useCart();

  // Pick top 3 items for home teaser (Zinger, Broast, Combo)
  const teaserItems = menuItems.filter(item => 
    item.id === 'pc-zinger-classic' || 
    item.id === 'pc-broast-quarter' || 
    item.id === 'pc-deal-1'
  );

  const features = [
    {
      title: 'Lightning Fast Delivery',
      desc: 'Craving the crunch late at night? We deliver piping hot and crispy to G-10, G-11, F-10, and nearby sectors in Islamabad.',
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Freshly Made Daily',
      desc: '100% fresh, premium chicken. Hand-breaded and pressure-fried only after you order. Never frozen, never pre-cooked.',
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: '100% Halal Certified',
      desc: 'Strictly Halal sourced chicken prepared under the highest hygiene standards. Trust in every single bite.',
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Secret 15-Spice Blend',
      desc: 'Our secret signature recipe crafted with premium spices to create an explosive, savory crunch that KFC can only dream of.',
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "The crunch is absolutely legendary! You can hear it from a mile away. The chicken itself is incredibly juicy, not dry at all like typical fast food joints. G-10 Markaz has a goldmine here.",
      name: "Hamza Abbasi",
      role: "Local Foodie",
      location: "G-10, Islamabad"
    },
    {
      quote: "We ordered the Duo Feaster Combo, and it was outstanding value. The Zinger burgers were thick, crispy, and coated in delicious sauce. Piper's has become our family's weekly ritual.",
      name: "Ayesha Malik",
      role: "Regular Customer",
      location: "F-11, Islamabad"
    },
    {
      quote: "Delivery is surprisingly fast. The chicken shots and fries arrived steaming hot and still crunch-perfect. Best garlic mayo sauce in town. Highly recommended!",
      name: "Zainab Raza",
      role: "DHA Resident",
      location: "Islamabad"
    }
  ];

  // Container variants for staggered entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.2, duration: 0.6 } }
  };

  return (
    <div className="w-full">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-28 bg-zinc-950 flex items-center">
        {/* Ambient Glowing Background Elements */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex self-center lg:self-start items-center gap-2.5 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 font-display text-xs font-bold tracking-widest uppercase mb-6"
              >
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Now Open in G-10 Markaz, Islamabad
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]"
              >
                Crunch You <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-glow-red">Can Hear</span>,<br />
                Juiciness You <span className="text-amber-500 text-glow-gold">Can Taste</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Say goodbye to dry, boring chicken. Piper's serves hand-breaded, gold-fried chicken seasoned with our secret blend of 15 spices. Cooked to absolute crisp perfection, fresh every single day.
              </motion.p>
              
              {/* Call to Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button
                  onClick={() => navigate('/menu')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-display font-black text-black bg-amber-500 hover:bg-amber-600 transition-all duration-300 uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 border border-transparent hover:border-amber-400 text-sm active:scale-95 cursor-pointer"
                >
                  Order Online
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-display font-bold text-white bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all duration-300 uppercase tracking-wider text-sm active:scale-95 cursor-pointer"
                >
                  Our Secret Story
                </button>
              </motion.div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Outer circular background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-amber-500/20 rounded-full blur-[60px] w-72 h-72 sm:w-96 sm:h-96 m-auto pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]"
              >
                <img
                  src="/images/pc chicken broast.avif"
                  alt="Piper's Crispy Broast Chicken"
                  className="w-full h-full object-cover rounded-3xl border border-red-500/20 shadow-2xl animate-float box-glow-red hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating badge cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-4 top-1/4 bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl"
                >
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="font-display font-black text-white text-xs uppercase tracking-wider">100% Fresh Daily</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -left-6 bottom-1/4 bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl"
                >
                  <span className="text-red-500 font-bold font-display">🔥 Extreme</span>
                  <span className="font-display font-black text-white text-xs uppercase tracking-wider">Crunch</span>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Signature Teaser Highlights */}
      <section className="py-20 bg-zinc-900/50 relative border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div>
              <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">Customer Favorites</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white mt-1">Signature Cravings</h2>
            </div>
            <button
              onClick={() => navigate('/menu')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-display font-bold uppercase text-xs tracking-wider border-b border-amber-500/30 hover:border-amber-400 pb-1 transition-all duration-300"
            >
              Explore Full Menu
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Grid layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teaserItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative flex flex-col rounded-3xl bg-zinc-950 border border-zinc-800/80 p-4 transition-all duration-300 hover:border-red-500/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/5"
              >
                {/* Image Wrapper */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-red-600 font-display text-[10px] font-black uppercase text-white px-2.5 py-1 rounded-full shadow-md tracking-wider">
                      {item.badge}
                    </span>
                  )}
                  {item.spicyLevel && item.spicyLevel > 0 && (
                    <span className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur-sm text-xs px-2.5 py-1 rounded-full flex gap-0.5">
                      {Array.from({ length: item.spicyLevel }).map((_, i) => (
                        <span key={i} className="text-red-500">🌶️</span>
                      ))}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow mt-5 px-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-black text-xl uppercase text-white group-hover:text-amber-500 transition-colors duration-300 leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-display font-black text-red-500 text-lg shrink-0">
                      PKR {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between gap-4 mt-auto">
                    <button
                      onClick={() => navigate('/menu')}
                      className="text-xs font-display font-bold text-zinc-500 hover:text-zinc-300 transition-colors duration-300"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        addToCart(item, 1);
                      }}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-display font-extrabold text-xs text-black bg-amber-500 hover:bg-amber-600 transition-colors duration-300 uppercase tracking-wider cursor-pointer"
                    >
                      Add To Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">Why Piper's Chicken</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white mt-1">Built For The Craving</h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              We stand apart from the crowd because we prioritize quality, taste, and crunch over commercial shortcuts. Here is what we promise in every packet.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-6 rounded-3xl bg-zinc-900 border border-zinc-800/80 transition-all duration-300 hover:border-amber-500/30 hover:scale-[1.03]"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center border border-zinc-800 group-hover:border-amber-500/40 group-hover:bg-red-500/10 transition-all duration-300 mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400 font-light">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-900/30 border-t border-b border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">Real Customer Reviews</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white mt-1">What the Foodies Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950 border border-zinc-850 p-8 rounded-3xl relative"
              >
                {/* Quotes quote-mark decorator */}
                <span className="font-display text-8xl text-red-600/10 absolute top-4 left-6 pointer-events-none font-black select-none">“</span>
                
                {/* Stars */}
                <div className="flex gap-1 mb-5 relative z-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed font-light relative z-10 italic flex-grow">
                  "{t.quote}"
                </p>

                <div className="mt-6 pt-6 border-t border-zinc-900 flex flex-col">
                  <span className="font-display font-black text-white uppercase tracking-wider text-sm">
                    {t.name}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium mt-0.5">
                    {t.role} &bull; <span className="text-red-500/70">{t.location}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
