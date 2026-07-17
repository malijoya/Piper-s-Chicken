import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { menuItems, categories } from '../data/menu';
import type { MenuItem } from '../data/menu';
import { motion, AnimatePresence } from 'framer-motion';

export const Menu = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item, 1);
    
    // Set added feedback state for this item
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  // Filter items based on selected category and search input
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full py-12 sm:py-20 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">Freshly Prepared</span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white mt-1">Our Crave-Worthy Menu</h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Every piece is hand-breaded, marinated in secret seasonings, and fried to golden crisp perfection. Select your favorites below to start your order.
          </p>
        </div>

        {/* Search and Category Tabs Controls Wrapper */}
        <div className="flex flex-col gap-6 mb-12 border-b border-zinc-900 pb-8">
          
          {/* Search bar */}
          <div className="relative max-w-md mx-auto w-full">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search Zingers, Wings, Broast, Combos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 font-display text-sm transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs list */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full font-display font-bold text-xs uppercase tracking-wider border transition-all duration-300 active:scale-95 cursor-pointer ${
                    isSelected
                      ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/25'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isAdded = !!addedItems[item.id];
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-4 hover:border-red-500/30 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300"
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
                      <span className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-sm text-xs px-2.5 py-1 rounded-full flex gap-0.5" title={`${item.spicyLevel} spicy index`}>
                        {Array.from({ length: item.spicyLevel }).map((_, i) => (
                          <span key={i} className="text-red-500">🌶️</span>
                        ))}
                      </span>
                    )}
                  </div>

                  {/* Info Content */}
                  <div className="flex flex-col flex-grow mt-5 px-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display font-black text-xl uppercase text-white group-hover:text-amber-500 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-display font-black text-red-500 text-lg shrink-0">
                        PKR {item.price}
                      </span>
                    </div>
                    
                    <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed flex-grow">
                      {item.description}
                    </p>

                    {/* Quick Checkout / Add Action Bar */}
                    <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between gap-4">
                      <span className="text-xs text-zinc-500 font-medium">Fresh & Hot</span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full font-display font-extrabold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white hover:bg-emerald-600 border border-emerald-500'
                            : 'bg-amber-500 text-black hover:bg-amber-600 border border-transparent'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Added
                          </>
                        ) : (
                          'Add to Order'
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {/* Empty Results state */}
          {filteredItems.length === 0 && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-16 flex flex-col items-center justify-center text-center"
            >
              <svg className="w-16 h-16 text-zinc-700 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="font-display font-bold text-white uppercase text-xl">No Items Found</h3>
              <p className="text-zinc-500 mt-2 max-w-sm text-sm">
                We couldn't find any items matching "{searchQuery}". Try selecting another category or resetting your query.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-6 px-6 py-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 font-display font-bold text-xs uppercase transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
  );
};
