import React, { useState } from 'react';
import { ShoppingCart, Leaf, ShieldCheck, MapPin, Mail, Ban, Users, MessageCircle, Settings, LogOut } from 'lucide-react';

const products = [
  { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
  { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
  { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
  { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
];

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Admin चेक करने के लिए

  // --- ADMIN VIEW ---
  if (isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 p-8 font-sans">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-3xl shadow-sm">
            <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Admin Dashboard</h1>
            <button onClick={() => setIsAdmin(false)} className="bg-red-50 text-red-600 px-6 py-2 rounded-full flex gap-2 items-center font-bold">
              <LogOut size={18} /> Exit Admin
            </button>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
              <h3 className="text-gray-500 font-bold mb-2">Total Orders</h3>
              <p className="text-4xl font-black text-emerald-600">0</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
              <h3 className="text-gray-500 font-bold mb-2">Active Users</h3>
              <p className="text-4xl font-black text-emerald-600">1</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 text-center">
              <p className="text-sm text-gray-400">Manage Products, Orders & AI coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN WEBSITE VIEW ---
  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans">
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-emerald-50 py-3 px-6 flex justify-between items-center">
        <a href="#home">
          <img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-14 w-auto object-contain" />
        </a>
        <div className="hidden md:flex gap-8 font-bold text-emerald-950">
          <a href="#home">Home</a>
          <a href="#about">Story</a>
          <a href="#products">Products</a>
          <button onClick={() => setIsAdmin(true)} className="text-emerald-600 hover:underline">Admin</button>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-emerald-100">Shop</button>
      </nav>

      {/* 2. Hero */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl">From Parali to Pride.</h2>
          <p className="text-xl opacity-90">Eco-Luxury Tableware Rooted in Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </header>

      {/* 3. Story Section (Picky Green & Peach) */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-[#f0fff4] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-emerald-50">
            <h2 className="text-4xl font-bold text-emerald-950 mb-6 tracking-tighter">Prawali Upcycling</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Preventing air pollution by turning Rice Husk into durable, heat-resistant tableware.</p>
            <div className="flex gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <Ban className="text-emerald-600" /> <span className="font-bold text-emerald-900">Zero Smoke Mission</span>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-10 rounded-[3rem] shadow-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 italic">Startly Innovations™ Technology</h3>
            <p className="opacity-80">Our Bio-polymers decompose in soil within <strong>180 Days</strong>.</p>
          </div>
        </div>
      </section>

      {/* 4. Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="product-grid-wrapper grid md:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.id} className="premium-card bg-white p-6 rounded-[2rem] border border-emerald-50 shadow-sm hover:-translate-y-4 transition-all duration-500">
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-2xl mb-4" />
                <h3 className="font-bold text-emerald-950">{p.name}</h3>
                <p className="text-emerald-600 font-bold mb-4">₹{p.price}</p>
                <button className="w-full bg-emerald-600 text-white py-2 rounded-xl font-bold">Order Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section id="team" className="py-20 bg-emerald-50/20 text-center">
          <h2 className="text-4xl font-black mb-12 text-emerald-950">The Team</h2>
          <div className="flex justify-center gap-12">
            {team.map((m, i) => (
              <div key={i}>
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 mx-auto">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">{m.name}</h4>
                <p className="text-emerald-600 text-sm">{m.role}</p>
              </div>
            ))}
          </div>
      </section>

      {/* 6. Riley AI Floating Button */}
      <button 
        onClick={() => alert("Riley AI: Hello Krishna! I am getting ready to assist your customers.")}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition active:scale-95 z-[100] flex items-center gap-2 group"
      >
        <MessageCircle size={28} />
        <span className="hidden group-hover:block font-bold pr-2">Talk to Riley</span>
      </button>

      {/* 7. Footer */}
      <footer className="bg-emerald-950 text-white py-12 px-8 text-center md:text-left">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div><h3 className="text-2xl font-bold mb-4">Prawali</h3><p className="opacity-60 italic">Bihar's Sustainable Pride.</p></div>
          <div className="text-sm opacity-50"><MapPin size={16} className="inline mr-2"/> Patna | Muzaffarpur | team@startlyinnovations.com</div>
        </div>
      </footer>
    </div>
  );
}

export default App;