import React from 'react';
import { ShoppingCart, Leaf, ShieldCheck, Recycle, MapPin, Mail, Flame, Ban } from 'lucide-react';

const products = [
  { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
  { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
  { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
  { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
];

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Navigation Bar with Clean Logo Style */}
      <nav className="fixed top-0 w-full z-50 glass-panel py-3 px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
            <Leaf size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-emerald-950">PRAWALI</span>
        </a>
        <div className="hidden md:flex gap-8 font-semibold text-emerald-900">
          <a href="#home" className="hover:text-emerald-600 transition">Home</a>
          <a href="#about" className="hover:text-emerald-600 transition">Our Mission</a>
          <a href="#products" className="hover:text-emerald-600 transition">Products</a>
        </div>
        <button className="premium-buy-btn !w-auto !py-2 !px-6 flex gap-2 items-center">
          <ShoppingCart size={18} /> Shop Now
        </button>
      </nav>

      {/* 2. Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">From Parali to Pride.</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">High-performance tableware crafted from upcycled agricultural waste.</p>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
      </header>

      {/* 3. Corrected Mission Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-950 mb-4">Why Prawali?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We are not just selling products; we are solving a global pollution crisis from the heart of Bihar.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Ban size={28} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">Zero Burning Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                Prawali focuses on the <strong>"Parali"</strong> (stubble burning) problem. We collect rice husk directly from farmers, preventing toxic smoke and upcycling it into sturdy, <strong>heat-resistant</strong> tableware for your home.
              </p>
            </div>

            <div className="p-10 bg-emerald-900 text-white rounded-[2.5rem] shadow-xl">
              <div className="bg-white/20 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Recycle size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 italic">The Science of Startly Innovations™</h3>
              <p className="opacity-80 leading-relaxed mb-6">
                Our parent company develops advanced bio-polymers using corn starch that <strong>decomposes in soil within 180 Days</strong>. We use this science to create a world where plastic no longer exists.
              </p>
              <div className="flex gap-4 items-center text-emerald-300 font-bold">
                <ShieldCheck /> 100% Bio-Based Research
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Grid */}
      <section id="products" className="py-20 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-emerald-950 mb-12">Our Premium Collection</h2>
          <div className="product-grid-wrapper">
            {products.map((p) => (
              <div key={p.id} className="premium-card">
                <img src={p.img} alt={p.name} className="w-full rounded-2xl mb-4" />
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-emerald-700 font-bold text-lg my-2">₹{p.price}</p>
                <button className="premium-buy-btn">Order Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer id="contact" className="bg-emerald-950 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Prawali</h3>
            <p className="opacity-60 italic leading-relaxed">Bihar's first sustainable luxury brand, turning waste into wonder.</p>
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
            <h4 className="font-bold text-xl mb-6">Startly Innovations Pvt. Ltd.</h4>
            <p className="opacity-60 text-sm italic">Driving India toward a plastic-free future with bio-polymer technology.</p>
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