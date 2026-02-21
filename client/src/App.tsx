import React from 'react';
import { ShoppingCart, Leaf, ShieldCheck, Recycle, MapPin, Mail, Globe } from 'lucide-react';

const products = [
  { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
  { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
  { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
  { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
];

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Navigation Bar with Logo */}
      <nav className="fixed top-0 w-full z-50 glass-panel py-3 px-8 flex justify-between items-center">
        <a href="#home" className="hover:scale-105 transition">
          <img src="/assets/logo.png.jpeg" alt="Prawali Logo" className="h-10 md:h-14 w-auto object-contain" />
        </a>
        <div className="hidden md:flex gap-8 font-semibold text-emerald-950">
          <a href="#home">Home</a>
          <a href="#about">Our Story</a>
          <a href="#products">Collection</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="premium-buy-btn !w-auto !py-2 !px-6 flex gap-2 items-center">
          <ShoppingCart size={18} /> Shop
        </button>
      </nav>

      {/* 2. Hero Section with Video */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">From Parali to Pride.</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">Transforming agricultural waste into premium luxury essentials.</p>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
      </header>

      {/* 3. Our Story Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">Sustainable Luxury, Rooted in Bihar.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Prawali focuses on the **"Parali"** problem. We collect rice husk directly from farmers, preventing stubble burning, and upcycle it into sturdy, 100% biodegradable products for your home.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center p-4 bg-emerald-50 rounded-2xl">
                <Recycle className="text-emerald-600 mb-2" size={32} />
                <span className="font-bold">180 Days</span>
                <p className="text-xs text-center opacity-70">Fully Biodegradable</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-emerald-50 rounded-2xl">
                <ShieldCheck className="text-emerald-600 mb-2" size={32} />
                <span className="font-bold">Eco-Safe</span>
                <p className="text-xs text-center opacity-70">Rice Husk Upcycling</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-10 rounded-[2rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 italic">Startly Innovations™ Technology</h3>
            <p className="opacity-80 leading-relaxed">
              Powered by advanced Bio-polymer science, we ensure our materials return to nature without leaving a trace of plastic.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Product Collection */}
      <section id="products" className="py-20 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-emerald-950 mb-12">Our Collection</h2>
          <div className="product-grid-wrapper">
            {products.map((p) => (
              <div key={p.id} className="premium-card">
                <img src={p.img} alt={p.name} className="w-full rounded-xl mb-4" />
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-emerald-700 font-bold">₹{p.price}</p>
                <button className="premium-buy-btn mt-4">Order Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer with Patna & Muzaffarpur Details */}
      <footer id="contact" className="bg-emerald-950 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Prawali</h3>
            <p className="opacity-60 italic">From Waste to Wonder.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6">Corporate Details</h4>
            <div className="space-y-3 opacity-70 text-sm">
              <p className="flex gap-2"><MapPin size={16} /> 9th Floor, Biscomaun Tower, Patna</p>
              <p className="flex gap-2"><MapPin size={16} /> Motipur, Muzaffarpur, Bihar</p>
              <p className="flex gap-2"><Mail size={16} /> team@startlyinnovations.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6">Company</h4>
            <p className="opacity-70 text-sm italic">A unit of Startly Innovations Pvt. Ltd.</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center opacity-40 text-xs">
          © 2026 Prawali. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;