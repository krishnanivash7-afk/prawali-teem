import React from 'react';
import { ShoppingCart, Leaf, ShieldCheck, Recycle, MapPin, Mail, Ban } from 'lucide-react';

const products = [
  { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
  { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
  { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
  { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
];

const team = [
  { name: "Krishna", role: "Developer & AI Lead", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Krishna" },
  { name: "Riley", role: "AI Assistant", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Riley" }
];

function App() {
  return (
    <div className="min-h-screen">
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel py-3 px-6 flex justify-between items-center">
        <a href="#home" className="hover:scale-105 transition duration-300">
          <img src="/assets/logo.png.jpeg" alt="Prawali Logo" className="h-10 md:h-14 w-auto object-contain" />
        </a>
        <div className="hidden md:flex gap-8 font-semibold text-emerald-950">
          <a href="#home">Home</a>
          <a href="#about">Story</a>
          <a href="#products">Products</a>
          <a href="#team">Team</a>
        </div>
        <button className="premium-buy-btn !py-2 !px-6 text-sm">Shop Now</button>
      </nav>

      {/* 2. Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-2xl">From Parali to Pride.</h2>
          <p className="text-xl opacity-90">Eco-Luxury Tableware Rooted in Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </header>

      {/* 3. Mission Section (Mint & Peach Background) */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-[#f0fff4] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-emerald-100">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6 tracking-tighter">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Prawali reduces Bihar's air pollution by upcycling Rice Husk into beautiful, durable tableware.
            </p>
            <div className="flex gap-4 p-4 bg-emerald-50 rounded-2xl">
              <Ban className="text-emerald-600" />
              <p className="text-sm font-bold">Zero Stubble Burning Policy</p>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-10 rounded-[3rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 italic">Startly Innovations™</h3>
            <p className="opacity-80">Technology that creates bio-polymers decomposing in soil within 180 Days.</p>
          </div>
        </div>
      </section>

      {/* 4. Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Collection</h2>
          <div className="product-grid-wrapper">
            {products.map((p) => (
              <div key={p.id} className="premium-card">
                <img src={p.img} alt={p.name} className="w-full h-64 object-cover rounded-2xl mb-6 shadow-sm" />
                <h3 className="text-xl font-bold text-emerald-950">{p.name}</h3>
                <p className="text-emerald-600 font-bold text-lg">₹{p.price}</p>
                <button className="premium-buy-btn w-full mt-4">Order Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section id="team" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-emerald-950">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((m, i) => (
              <div key={i} className="group">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto mb-4 group-hover:scale-110 transition">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-xl">{m.name}</h4>
                <p className="text-emerald-600 text-sm font-semibold">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer id="contact" className="bg-emerald-950 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div><h3 className="text-2xl font-bold mb-4">Prawali</h3><p className="opacity-60 italic">Bihar's Sustainable Pride.</p></div>
          <div><h4 className="font-bold mb-4">Corporate Office</h4><p className="text-sm opacity-70 flex gap-2"><MapPin size={16}/> Biscomaun Tower, Patna</p></div>
          <div><h4 className="font-bold mb-4">Contact</h4><p className="text-sm opacity-70 flex gap-2"><Mail size={16}/> team@startlyinnovations.com</p></div>
        </div>
        <div className="mt-12 text-center opacity-30 text-xs border-t border-white/10 pt-8">© 2026 Prawali. Unit of Startly Innovations.</div>
      </footer>
    </div>
  );
}

export default App;