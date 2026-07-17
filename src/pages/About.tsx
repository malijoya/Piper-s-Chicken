import { useRouter } from '../hooks/useRouter';

export const About = () => {
  const { navigate } = useRouter();

  const stats = [
    { value: '15', label: 'Secret herbs & spices' },
    { value: '12h', label: 'Overnight marination' },
    { value: '100%', label: 'Fresh halal chicken' },
    { value: '4.9★', label: 'Customer rating' }
  ];

  return (
    <div className="w-full bg-zinc-950 text-zinc-100">
      
      {/* Hero Banner Section */}
      <section className="relative py-20 lg:py-24 border-b border-zinc-900 overflow-hidden bg-zinc-900/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[130px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">Our Obsession</span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white mt-2 leading-none">
            The Legend of the <span className="text-amber-500">Piper Crunch</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            It started with a simple belief: fast food shouldn't mean compromised quality. We spent months perfecting our breading technique and custom spices to bring Islamabad a chicken experience that truly stands apart.
          </p>
        </div>
      </section>

      {/* Main Story & Image Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-2 bg-gradient-to-tr from-red-600 to-amber-500 rounded-3xl blur-[40px] opacity-20 pointer-events-none" />
              <img
                src="/images/pc 9.jfif"
                alt="Piper's Chicken Hand-Breading Process"
                className="w-full aspect-[4/5] object-cover rounded-3xl border border-zinc-800 shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hidden sm:flex flex-col gap-1 shadow-2xl z-20">
                <span className="font-display font-black text-3xl text-red-600">No Freeze</span>
                <span className="text-xs uppercase text-zinc-400 tracking-wider">Always Fresh Poultry</span>
              </div>
            </div>

            {/* Right Story Column */}
            <div className="flex flex-col order-1 lg:order-2">
              <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">The Secret Recipe</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white mt-1 mb-6">
                Freshness is Our Religion
              </h2>
              
              <div className="flex flex-col gap-6 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                <p>
                  At Piper's Chicken, we do not believe in commercial shortcuts. While most giant brands rely on frozen, mass-produced pre-cooked chicken that is heated up in the store, we do the exact opposite.
                </p>
                <p>
                  Every single morning, fresh, locally sourced halal chicken is delivered to our G-10 Markaz kitchen. Our chefs inspect every piece before it enters a <strong className="text-white font-semibold">12-hour marination process</strong>. This allows our custom blend of 15 premium herbs and spices to sink deep into the meat, ensuring that every bite is bursting with flavor, all the way to the bone.
                </p>
                <p>
                  When you place an order, we hand-bread the chicken in our signature flour mix and pressure-fry it immediately. This locks in the natural juices while creating that iconic, extra-flaky crunch that stays crispy even during delivery.
                </p>
              </div>

              <div className="mt-8 flex">
                <button
                  onClick={() => navigate('/menu')}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-display font-black text-black bg-amber-500 hover:bg-amber-600 transition-colors duration-300 uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
                >
                  Taste the Difference
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Grid */}
      <section className="py-16 lg:py-20 bg-zinc-900/60 border-t border-b border-zinc-900 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center">
                <span className="font-display font-black text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 text-glow-red select-none">
                  {stat.value}
                </span>
                <span className="text-xs uppercase text-zinc-500 tracking-widest font-semibold mt-3">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-3xl px-4 relative z-10">
          <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">Our Promise</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white mt-1">Quality Without Compromise</h2>
          <p className="mt-6 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Whether you order a single Classic Zinger, a bucket of wings, or our legendary signature Broast, we promise to serve it piping hot, crispy, and made with the exact same dedication. We are proud to be a homegrown Pakistani brand serving the people of Islamabad.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-display font-bold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors uppercase tracking-wider text-xs cursor-pointer"
            >
              Visit Our Branch
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
