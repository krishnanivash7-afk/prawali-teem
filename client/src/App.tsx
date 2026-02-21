import React, { useState } from 'react';
import { ShoppingCart, Leaf, ShieldCheck, MapPin, Mail, Ban, Users, MessageCircle, Settings, LogOut, Recycle } from 'lucide-react';

const products = [
  { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
  { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
  { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
  { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
];

const team = [
  { name: "Krishna", role: "Founder & AI Lead", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Krishna" },
  { name: "Riley", role: "AI Assistant", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Riley" }
];

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // --- 1. ADMIN DASHBOARD VIEW ---
  if (isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 p-8 font-sans">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
            <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Admin</h1>
            <button onClick={() => setIsAdmin(false)} className="bg-red-50 text-red-600 px-6 py-2 rounded-full flex gap-2 items-center font-bold hover:bg-red-100 transition">
              <LogOut size={18} /> Exit Dashboard
            </button>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
              <h3 className="text-gray-500 font-bold mb-2 uppercase text-xs tracking-widest">Total Orders</h3>
              <p className="text-5xl font-black text-emerald-600 tracking-tighter">0</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
              <h3 className="text-gray-500 font-bold mb-2 uppercase text-xs tracking-widest">Active AI Chats</h3>
              <p className="text-5xl font-black text-emerald-600 tracking-tighter">1</p>
            </div>
            <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-lg">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <button className="w-full bg-white/10 hover:bg-white/20 p-3 rounded-xl mb-3 text-left transition">Add New Product</button>
              <button className="w-full bg-white/10 hover:bg-white/20 p-3 rounded-xl text-left transition">Update Riley AI Training</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. MAIN WEBSITE VIEW ---
  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans">
      {/* Navbar with Logo */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-50 py-3 px-6 flex justify-between items-center shadow-sm">
        <a href="#home" className="hover:scale-105 transition-transform duration-300">
          <img src="/assets/logo.png.jpeg" alt="Prawali Logo" className="h-10 md:h-14 w-auto object-contain" />
        </a>
        <div className="hidden md:flex gap-8 font-bold text-emerald-950">
          <a href="#home" className="hover:text-emerald-600 transition">Home</a>
          <a href="#about" className="hover:text-emerald-600 transition">Our Mission</a>
          <a href="#products" className="hover:text-emerald-600 transition">Products</a>
          <button onClick={() => setIsAdmin(true)} className="text-emerald-600 hover:bg-emerald-50 px-4 py-1 rounded-full transition border border-emerald-100 text-sm">Admin</button>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition">Shop</button>
      </nav>

      {/* Hero */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-8xl font-black mb-4 drop-shadow-2xl tracking-tighter">From Parali to Pride.</h2>
          <p className="text-xl md:text-2xl font-light tracking-wide opacity-90 max-w-2xl mx-auto">Premium eco-friendly tableware rooted in the heart of Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </header>

      {/* Story Section (Mint & Peach Background) */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-[#f0fff4] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-emerald-100 border border-emerald-50">
            <span className="text-emerald-600 font-black tracking-widest uppercase text-xs mb-4 block">Prawali's Promise</span>
            <h2 className="text-4xl font-bold text-emerald-950 mb-6 tracking-tighter leading-none">Solving the "Parali" Crisis.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We collect rice husk directly from farmers to stop stubble burning. We upcycle it into beautiful, durable, and unbreakable tableware.
            </p>
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-3xl border border-emerald-100">
              <Ban className="text-emerald-600" size={32} />
              <div>
                <h4 className="font-bold text-emerald-950">Zero Smoke Policy</h4>
                <p className="text-sm text-emerald-700/70">Preventing Bihar's air pollution crisis.</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[400px]">
            <h3 className="text-3xl font-black mb-6 italic leading-tight">Startly Innovations™ Technology</h3>
            <p className="text-xl opacity-80 leading-relaxed mb-8">
              Our parent company builds technology that creates bio-polymers. These materials **decompose in soil within 180 Days**.
            </p>
            <div className="flex items-center gap-3 text-emerald-300 font-bold tracking-tighter">
              <ShieldCheck /> Verified Sustainable Science
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 text-emerald-950 tracking-tighter">The Collection</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {products.map((p) => (
              <div key={p.id} className="group bg-white p-6 rounded-[2.5rem] border border-emerald-50 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center">
                <div className="overflow-hidden rounded-3xl mb-6 shadow-inner bg-emerald-50/30">
                  <img src={p.img} alt={p.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
                <p className="text-emerald-600 font-black text-lg mb-6">₹{p.price}</p>
                <button className="w-full bg-emerald-900 text-white py-3 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-xl shadow-emerald-100">Order Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-emerald-50/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16 text-emerald-950 tracking-tighter">The Visionaries</h2>
          <div className="flex flex-wrap justify-center gap-20">
            {team.map((m, i) => (
              <div key={i} className="group">
                <div className="w-44 h-44 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-emerald-200/50">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-2xl text-emerald-950 leading-none mb-2">{m.name}</h4>
                <p className="text-emerald-600 font-black tracking-widest text-xs uppercase">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Riley AI Button */}
      <button 
        onClick={() => alert("Riley AI: Hello Krishna! Dashboard is now active. I am ready to handle your customers.")}
        className="fixed bottom-10 right-10 bg-blue-600 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:scale-110 hover:rotate-12 transition-all active:scale-95 z-[100] group flex items-center gap-3"
      >
        <MessageCircle size={32} />
        <span className="hidden group-hover:block font-bold text-sm tracking-tight pr-2">Riley AI Support</span>
      </button>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-20 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-3xl font-black mb-6 tracking-tighter">Prawali</h3>
            <p className="opacity-60 text-lg font-light leading-relaxed italic">Transforming agricultural waste into premium luxury essentials.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6">Corporate Office</h4>
            <div className="space-y-4 opacity-50 text-sm">
              <p className="flex gap-3"><MapPin className="text-emerald-400"/> 9th Floor, Biscomaun Tower, Patna</p>
              <p className="flex gap-3"><MapPin className="text-emerald-400"/> Motipur, Muzaffarpur, Bihar</p>
              <p className="flex gap-3"><Mail className="text-emerald-400"/> team@startlyinnovations.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6">Eco Impact</h4>
            <div className="flex gap-6">
              <Leaf className="text-emerald-400" size={40} />
              <Recycle className="text-emerald-400" size={40} />
              <ShieldCheck className="text-emerald-400" size={40} />
            </div>
          </div>
        </div>
        <div className="mt-20 text-center opacity-20 text-[10px] border-t border-white/5 pt-8 uppercase tracking-[0.2em]">
          © 2026 Prawali. Unit of Startly Innovations Pvt. Ltd.
        </div>
      </footer>
    </div>
  );
}

export default App;