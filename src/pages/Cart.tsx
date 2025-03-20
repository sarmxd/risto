import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  variant: string;
  image: string;
  currentPrice: number;
  originalPrice?: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Minimal Matte Black Watch",
      variant: "Classic Edition",
      image: "/api/placeholder/100/100",
      currentPrice: 129.99,
      originalPrice: 159.99,
      quantity: 1
    },
    {
      id: 2,
      name: "Obsidian Wireless Earbuds",
      variant: "Noise Cancelling",
      image: "/api/placeholder/100/100",
      currentPrice: 89.99,
      quantity: 2
    },
    {
      id: 3,
      name: "Monochrome Leather Wallet",
      variant: "Carbon Fiber Trim",
      image: "/api/placeholder/100/100",
      currentPrice: 49.99,
      originalPrice: 69.99,
      quantity: 1
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return items.reduce((total, item) => total + (item.currentPrice * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Full black background area for transparent navbar */}
      <div className="w-full h-24 bg-black"></div>
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-black overflow-hidden border-x border-zinc-800">
          {/* Cart Header */}
          <div className="p-6 bg-black flex justify-between items-center border-b border-zinc-800">
            <h2 className="text-2xl font-bold tracking-tight text-white">YOUR CART</h2>
            <div className="px-3 py-1 bg-zinc-900 text-sm font-medium text-white border border-zinc-700">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
            </div>
          </div>

          {/* Cart Items */}
          <div className="divide-y divide-zinc-800">
            {items.length > 0 ? (
              items.map(item => (
                <div key={item.id} className="p-6 flex space-x-6 hover:bg-zinc-900 transition-all duration-200">
                  <div className="w-24 h-24 bg-zinc-900 overflow-hidden border border-zinc-700 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h3 className="text-white font-medium text-lg">{item.name}</h3>
                        <p className="text-zinc-400 text-sm">{item.variant}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-white font-semibold text-lg">${(item.currentPrice * item.quantity).toFixed(2)}</span>
                        {item.originalPrice && (
                          <p className="text-zinc-500 text-sm line-through">${(item.originalPrice * item.quantity).toFixed(2)}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center bg-zinc-900 border border-zinc-700 overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-400 text-sm hover:text-red-400 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center">
                <p className="text-zinc-400">Your cart is empty</p>
              </div>
            )}
          </div>

          {/* Cart Summary */}
          {items.length > 0 && (
            <div className="bg-zinc-900 p-6 border-t border-zinc-800">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Subtotal</span>
                  <span className="text-white font-medium">${getSubtotal()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-zinc-400">Shipping</span>
                  <span className="text-white font-medium">Calculated at checkout</span>
                </div>
                
                <div className="h-px bg-zinc-700 my-4"></div>
                
                <div className="flex justify-between">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-xl font-bold text-white">${getSubtotal()}</span>
                </div>
              </div>
              
              <button className="w-full py-4 bg-white text-black font-medium hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center group">
                <span>PROCEED TO CHECKOUT</span>
                <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <div className="mt-6 pb-6 text-center">
                <a href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Continue Shopping
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Additional black space after cart for footer */}
      <div className="w-full h-24 bg-black"></div>
    </div>
  );
};

export default Cart;