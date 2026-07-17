import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useRouter } from '../hooks/useRouter';

export const Checkout = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const { navigate } = useRouter();

  // Order Details Form State
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [confirmRemoveId, setConfirmRemoveId] = useState<string | null>(null);

  const packagingFee = 50;
  const deliveryFee = orderType === 'delivery' ? 150 : 0;
  const grandTotal = cartTotal + packagingFee + deliveryFee;

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!name.trim()) errors.name = 'Please enter your name.';
    if (!phone.trim()) errors.phone = 'Please enter your phone number.';
    if (orderType === 'delivery' && !address.trim()) {
      errors.address = 'Please enter your delivery address.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrderWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Build the formatted order text for WhatsApp
    let orderSummary = `🍔 *NEW PIPER'S CHICKEN ORDER* 🍔\n`;
    orderSummary += `------------------------------------\n`;
    orderSummary += `*Name:* ${name}\n`;
    orderSummary += `*Phone:* ${phone}\n`;
    orderSummary += `*Type:* ${orderType === 'delivery' ? 'Home Delivery 🚀' : 'Self-Pickup 📦'}\n`;
    
    if (orderType === 'delivery') {
      orderSummary += `*Address:* ${address}\n`;
    }
    
    if (instructions.trim()) {
      orderSummary += `*Special Note:* ${instructions}\n`;
    }
    
    orderSummary += `------------------------------------\n`;
    orderSummary += `*Items Ordered:*\n`;
    
    cartItems.forEach((cartItem) => {
      orderSummary += `• ${cartItem.item.name} x ${cartItem.quantity} (PKR ${cartItem.item.price * cartItem.quantity})\n`;
    });
    
    orderSummary += `------------------------------------\n`;
    orderSummary += `*Cart Subtotal:* PKR ${cartTotal}\n`;
    orderSummary += `*Packaging & Box:* PKR ${packagingFee}\n`;
    if (orderType === 'delivery') {
      orderSummary += `*Delivery Fee:* PKR ${deliveryFee}\n`;
    }
    orderSummary += `*GRAND TOTAL:* PKR ${grandTotal}\n`;
    orderSummary += `------------------------------------\n`;
    orderSummary += `🚀 _Prepared fresh. Served crispy and juicy!_`;

    const encodedText = encodeURIComponent(orderSummary);
    // WhatsApp number for Piper's Chicken
    const whatsappUrl = `https://wa.me/92512356000?text=${encodedText}`;
    
    // Open WhatsApp URL
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and redirect
    clearCart();
    alert('Thank you! Redirecting to WhatsApp to send your order. Once sent, we will confirm it via call.');
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full py-20 bg-zinc-950 flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl uppercase text-white">Your Cart is Empty</h1>
        <p className="text-zinc-500 text-sm mt-3 max-w-sm font-light leading-relaxed">
          Looks like you haven't added any crunchy chicken to your order yet. Head over to our menu to discover our deals!
        </p>
        <button
          onClick={() => navigate('/menu')}
          className="mt-8 inline-flex items-center justify-center px-8 py-3.5 rounded-full font-display font-black text-black bg-amber-500 hover:bg-amber-600 transition-colors duration-300 uppercase tracking-wider text-xs active:scale-95 cursor-pointer"
        >
          View Menu
        </button>
      </div>
    );
  }

  return (
    <div className="w-full py-12 sm:py-20 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-display text-xs font-bold text-red-500 uppercase tracking-widest">Complete Your Order</span>
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase text-white mt-1">Review & Checkout</h1>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Cart items table */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-display font-black text-lg text-white uppercase tracking-wider pb-3 border-b border-zinc-900">
              1. Your Selected Items
            </h2>
            
            <div className="flex flex-col gap-4">
            {cartItems.map((cartItem) => (
                <div
                  key={cartItem.item.id}
                  className="flex flex-col bg-zinc-900/40 border border-zinc-850 p-4 rounded-2xl gap-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-16 h-16 object-cover rounded-xl border border-zinc-800 shrink-0"
                    />
                    
                    <div className="flex-grow min-w-0">
                      <h3 className="font-display font-black text-sm uppercase text-white truncate leading-tight">
                        {cartItem.item.name}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1">
                        PKR {cartItem.item.price} each
                      </p>
                    </div>
                    
                    {/* Quantity Counter controls */}
                    <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-full px-2 py-1 shrink-0">
                      <button
                        onClick={() => {
                          if (cartItem.quantity === 1) {
                            setConfirmRemoveId(cartItem.item.id);
                          } else {
                            updateQuantity(cartItem.item.id, cartItem.quantity - 1);
                          }
                        }}
                        className="p-1 text-zinc-400 hover:text-red-400 transition-colors focus:outline-none"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      </button>
                      <span className="px-3 font-display font-bold text-xs text-white select-none">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                        className="p-1 text-zinc-400 hover:text-white transition-colors focus:outline-none"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Item Total Price */}
                    <div className="text-right shrink-0 min-w-[70px]">
                      <span className="font-display font-black text-sm text-red-500">
                        PKR {cartItem.item.price * cartItem.quantity}
                      </span>
                    </div>

                    {/* Remove item */}
                    <button
                      onClick={() => setConfirmRemoveId(cartItem.item.id)}
                      className="p-1 text-zinc-600 hover:text-red-500 transition-colors shrink-0"
                      aria-label="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Inline Remove Confirmation */}
                  {confirmRemoveId === cartItem.item.id && (
                    <div className="flex items-center justify-between gap-3 bg-red-950/40 border border-red-700/40 rounded-xl px-4 py-3">
                      <span className="font-display font-bold text-xs text-red-300 uppercase tracking-wide">
                        Remove <span className="text-white">{cartItem.item.name}</span> from order?
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            removeFromCart(cartItem.item.id);
                            setConfirmRemoveId(null);
                          }}
                          className="px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-display font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Yes, Remove
                        </button>
                        <button
                          onClick={() => setConfirmRemoveId(null)}
                          className="px-4 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-display font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Keep It
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Promo alert */}
            <div className="bg-red-950/20 border border-red-900/30 p-5 rounded-2xl flex gap-3 text-xs text-red-400 leading-relaxed mt-4">
              <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>
                <strong>Dine-in / Pickup location:</strong> Our physical kitchen is in G-10 Markaz, Islamabad. Home delivery is limited to G-10, G-11, G-9, F-10, and F-11. Cash on delivery accepted.
              </span>
            </div>
          </div>

          {/* Right Column: Checkout form & totals calculation */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h2 className="font-display font-black text-lg text-white uppercase tracking-wider pb-3 border-b border-zinc-800">
              2. Delivery Details
            </h2>

            <form onSubmit={handlePlaceOrderWhatsApp} className="flex flex-col gap-5">
              
              {/* Order Type Toggle */}
              <div className="flex rounded-xl bg-zinc-950 border border-zinc-800 p-1">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`flex-1 py-3 rounded-lg font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                    orderType === 'delivery'
                      ? 'bg-zinc-800 text-white shadow'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`flex-1 py-3 rounded-lg font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                    orderType === 'pickup'
                      ? 'bg-zinc-800 text-white shadow'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Self-Pickup
                </button>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-display font-bold text-xs uppercase text-zinc-400">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ali Khan"
                  value={name}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                    setName(val);
                  }}
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-white placeholder-zinc-600 font-display text-sm focus:outline-none focus:ring-1 ${
                    formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-red-500 focus:ring-red-500'
                  }`}
                />
                {formErrors.name && <span className="text-[10px] text-red-500 font-bold uppercase">{formErrors.name}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="font-display font-bold text-xs uppercase text-zinc-400">Mobile Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 03001234567"
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setPhone(val);
                  }}
                  inputMode="numeric"
                  maxLength={11}
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-white placeholder-zinc-600 font-display text-sm focus:outline-none focus:ring-1 ${
                    formErrors.phone ? 'border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-red-500 focus:ring-red-500'
                  }`}
                />
                {formErrors.phone && <span className="text-[10px] text-red-500 font-bold uppercase">{formErrors.phone}</span>}
              </div>

              {/* Address (conditional) */}
              {orderType === 'delivery' && (
                <div className="flex flex-col gap-1.5">
                  <label className="font-display font-bold text-xs uppercase text-zinc-400">Delivery Address in Islamabad</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. House 123, Street 45, G-10/2, Islamabad"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-white placeholder-zinc-600 font-display text-sm focus:outline-none focus:ring-1 ${
                      formErrors.address ? 'border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-red-500 focus:ring-red-500'
                    }`}
                  />
                  {formErrors.address && <span className="text-[10px] text-red-500 font-bold uppercase">{formErrors.address}</span>}
                </div>
              )}

              {/* Special instructions */}
              <div className="flex flex-col gap-1.5">
                <label className="font-display font-bold text-xs uppercase text-zinc-400">Cooking / Delivery Instructions</label>
                <input
                  type="text"
                  placeholder="e.g. Make it extra spicy / Don't ring doorbell"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 font-display text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Order total calculation details summary */}
              <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-2.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span className="text-white">PKR {cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Packaging & Box Fee</span>
                  <span className="text-white">PKR {packagingFee}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Delivery Charge</span>
                    <span className="text-white">PKR {deliveryFee}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2.5 border-t border-zinc-800 text-sm">
                  <span className="font-display font-bold text-white uppercase">Grand Total</span>
                  <span className="font-display font-black text-red-500 text-base">PKR {grandTotal}</span>
                </div>
              </div>

              {/* Placing order */}
              <div className="mt-4 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-display font-black text-black bg-emerald-500 hover:bg-emerald-600 transition-colors duration-300 uppercase tracking-wider text-xs shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372a3 3 0 0 1 2.943 2.424l.615 3.078a3 3 0 0 1-1.08 2.85l-1.372 1.03a11.956 11.956 0 0 0 5.762 5.762l1.03-1.372a3 3 0 0 1 2.85-1.08l3.078.615a3 3 0 0 1 2.424 2.942V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Place Order via WhatsApp
                </button>
                <div className="text-center font-display text-[10px] text-zinc-500 font-semibold tracking-wider">
                  OR CALL DIRECTLY
                </div>
                <a
                  href="tel:0512356000"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display font-bold text-white bg-zinc-950 border border-zinc-800 hover:bg-zinc-900 transition-all uppercase tracking-wider text-xs active:scale-95"
                >
                  Call G-10 Outlet: (051) 2356000
                </a>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
