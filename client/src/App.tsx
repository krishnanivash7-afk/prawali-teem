import React, { useState } from 'react';
import { ShoppingCart, Leaf, ShieldCheck, MapPin, Mail, Ban, Users, MessageCircle, Settings, LogOut, Recycle, Send, X } from 'lucide-react';

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
  const [view, setView] = useState('home'); // home, admin, login
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false); // Riley AI Chat Window

  const handleAdminLogin = () => {
    if (password === "prawali123") { // Aapka Admin Password
      setView('admin');
      setPassword('');
    } else {
      alert("Galat Password! Kripya sahi password dalein.");
    }
  };

  // --- 1. ADMIN LOGIN VIEW ---
  if (view === 'login') {
    return (
      <div className="min-h-screen bg-[#fff5f5] flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full border border-emerald-50 text-center">
          <Settings className="mx-auto text-emerald-600 mb-4" size={48} />
          <h2 className="text-3xl font-black text-emerald-950 mb-6 tracking-tighter">Admin Access</h2>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            className="w-full p-4 rounded-2xl border border-emerald-100 mb-4 focus:ring-2 focus:ring-emerald-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleAdminLogin} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-lg">Login to Dashboard</button>
          <button onClick={() => setView('home')} className="mt-4 text-gray-400 hover:text-emerald-600 font-medium">Back to Website</button>
        </div>
      </div>
    );
  }

  // --- 2. ADMIN DASHBOARD VIEW ---
  if (view === 'admin') {
    return (
      <div className="min-h-screen bg-slate-50 p-8 font-sans">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
            <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Admin Dashboard</h1>
            <button onClick={() => setView('home')} className="bg-red-50 text-red-600 px-6 py-2 rounded-full flex gap-2 items-center font-bold">
              <LogOut size={18} /> Exit Dashboard
            </button>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
              <h3 className="text-gray-500 font-bold mb-2 uppercase text-xs">Total Orders</h3>
              <p className="text-5xl font-black text-emerald-600">0</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
              <h3 className="text-gray-500 font-bold mb-2 uppercase text-xs">Active AI Chats</h3>
              <p className="text-5xl font-black text-emerald-600">1</p>
            </div>
            <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-lg">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <button className="w-full bg-white/10 hover:bg-white/20 p-3 rounded-xl mb-3 text-left">Add New Product</button>
              <button className="w-full bg-white/10 hover:bg-white/20 p-3 rounded-xl text-left">Riley AI Settings</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 3. MAIN WEBSITE VIEW ---
  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-50 py-3 px-6 flex justify-between items-center shadow-sm">
        <a href="#home"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-14 w-auto" /></a>
        <div className="hidden md:flex gap-8 font-bold text-emerald-950">
          <a href="#home">Home</a>
          <a href="#about">Story</a>
          <a href="#products">Collection</a>
          <button onClick={() => setView('login')} className="text-emerald-600 text-sm border border-emerald-100 px-4 py-1 rounded-full">Admin</button>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">Shop Now</button>
      </nav>

      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-8xl font-black mb-4 drop-shadow-2xl">From Parali to Pride.</h2>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">Sustainable luxury tableware rooted in Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </header>

      {/* Story Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-[#f0fff4] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-emerald-50 text-center md:text-left">
            <h2 className="text-4xl font-bold text-emerald-950 mb-6 tracking-tighter leading-none">Upcycling Stubble.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">Directly collecting rice husk from farmers to stop smoke and create durable tableware.</p>
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-3xl border border-emerald-100 justify-center md:justify-start">
              <Ban className="text-emerald-600" size={32} />
              <div className="text-left"><h4 className="font-bold">Zero Smoke</h4><p className="text-sm">Bihar Air Quality Mission.</p></div>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-12 rounded-[3.5rem] shadow-2xl text-center md:text-left min-h-[400px] flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-6 italic leading-tight">Startly Innovations™ Technology</h3>
            <p className="text-xl opacity-80 leading-relaxed mb-8">Bio-polymers that <strong>decompose in soil within 180 Days</strong>.</p>
            <div className="flex items-center gap-3 text-emerald-300 font-bold justify-center md:justify-start">
              <ShieldCheck /> Verified Sustainable Science
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-white px-6">
        <h2 className="text-4xl font-black text-center mb-16 text-emerald-950 tracking-tighter">Our Collection</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white p-6 rounded-[2.5rem] border border-emerald-50 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover rounded-3xl mb-6 shadow-inner" />
              <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
              <p className="text-emerald-600 font-black text-lg mb-6">₹{p.price}</p>
              <button className="w-full bg-emerald-900 text-white py-3 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-xl">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-emerald-50/20 text-center">
        <h2 className="text-4xl font-black mb-16 text-emerald-950 tracking-tighter">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-20">
          {team.map((m, i) => (
            <div key={i} className="group">
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-emerald-200">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-2xl text-emerald-950 leading-none mb-2">{m.name}</h4>
              <p className="text-emerald-600 font-black tracking-widest text-xs uppercase">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RILEY AI CHAT WINDOW */}
      {chatOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white rounded-[2rem] shadow-2xl border border-blue-50 z-[200] overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <span className="font-bold flex gap-2 items-center"><MessageCircle size={18}/> Riley AI</span>
            <button onClick={() => setChatOpen(false)}><X size={20}/></button>
          </div>
          <div className="h-64 p-4 overflow-y-auto bg-slate-50 text-sm">
            <div className="bg-blue-100 p-3 rounded-2xl rounded-tl-none mb-4 text-blue-950">
              Hello Krishna! Main aapke customers ki help karne ke liye taiyaar hoon. Products ke baare mein kuch puchna hai?
            </div>
          </div>
          <div className="p-4 border-t flex gap-2">
            <input type="text" placeholder="Type a message..." className="flex-1 text-sm outline-none" />
            <button className="text-blue-600"><Send size={18}/></button>
          </div>
        </div>
      )}

      {/* Floating Riley AI Button */}
      <button 
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-10 right-10 bg-blue-600 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:scale-110 transition-all z-[100] group flex items-center gap-3"
      >
        <MessageCircle size={32} />
        <span className="hidden group-hover:block font-bold text-sm pr-2">Talk to Riley AI</span>
      </button>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-20 px-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div><h3 className="text-3xl font-black mb-6 tracking-tighter">Prawali</h3><p className="opacity-60 italic text-lg leading-relaxed">Transforming agricultural waste into premium luxury essentials.</p></div>
          <div>
            <h4 className="font-bold text-xl mb-6">Corporate Office</h4>
            <p className="opacity-50 text-sm mb-4 flex gap-2 justify-center md:justify-start"><MapPin size={16}/> Biscomaun Tower, Patna | Muzaffarpur, Bihar.</p>
            <p className="opacity-50 text-sm flex gap-2 justify-center md:justify-start"><Mail size={16}/> team@startlyinnovations.com.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;