import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, ShieldCheck, MapPin, Mail, Ban, MessageCircle, Settings, LogOut, Send, X, User, Recycle, Globe } from 'lucide-react';

const products = [
  { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
  { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
  { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
  { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
];

function App() {
  const [view, setView] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { text: "Namaste! Prawali Support mein swagat hai. Main Riley AI hoon, Startly Innovations dwara nirmit.", isBot: true }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Riley AI Logic - INP Issue Fix
  const handleSendMessage = () => {
    if (!message.trim()) return;
    const userMsg = { text: message, isBot: false };
    setChatHistory(prev => [...prev, userMsg]);
    setMessage('');
    setTimeout(() => {
      const botReply = message.toLowerCase().includes("price") ? "Hamare products ₹149 se shuru hote hain." : "Main Prawali ke mission ke bare mein seekh rahi hoon!";
      setChatHistory(prev => [...prev, { text: botReply, isBot: true }]);
    }, 400);
  };

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatHistory]);

  if (view === 'login') return (
    <div className="min-h-screen bg-emerald-50/30 flex items-center justify-center p-6 font-sans">
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full text-center border border-emerald-100">
        <Settings className="mx-auto text-emerald-700 mb-4" size={48} />
        <h2 className="text-3xl font-black text-emerald-950 mb-6">Admin Access</h2>
        <input type="password" placeholder="Enter Secret Password" 
               className="w-full p-4 rounded-2xl border border-emerald-100 mb-4 outline-none focus:ring-2 focus:ring-emerald-500" 
               onKeyDown={(e) => e.key === 'Enter' && setView('admin')} />
        <button onClick={() => setView('admin')} className="w-full bg-emerald-700 text-white py-4 rounded-2xl font-bold shadow-lg">Login to Dashboard</button>
        <button onClick={() => setView('home')} className="mt-4 text-gray-400">Back to Store</button>
      </div>
    </div>
  );

  if (view === 'admin') return (
    <div className="min-h-screen bg-slate-50 p-8">
      <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
        <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Admin Dashboard</h1>
        <button onClick={() => setView('home')} className="bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold">Exit</button>
      </header>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-emerald-50">
          <h3 className="text-gray-400 font-bold mb-2">Total Orders</h3>
          <p className="text-6xl font-black text-emerald-600">0</p>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-emerald-100">
          <h3 className="text-gray-400 font-bold mb-2">Active AI Chats</h3>
          <p className="text-6xl font-black text-emerald-600">1</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* 1. Premium Navbar */}
      <nav className="glass-nav py-3 px-6 flex justify-between items-center">
        <a href="#home"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-16 w-auto object-contain" /></a>
        <div className="hidden lg:flex gap-8 font-bold text-emerald-950">
          <a href="#home">Home</a><a href="#story">Our Story</a><a href="#products">Collection</a>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-emerald-700 font-bold text-sm flex gap-1 items-center hover:underline"><User size={16}/> Sign In</button>
          <a href="#products" className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md no-underline">Shop Now</a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-6xl md:text-9xl font-black mb-4 drop-shadow-2xl tracking-tighter">From Parali to Pride.</h2>
          <p className="text-xl md:text-3xl font-light opacity-90 max-w-3xl mx-auto italic">Bihar's sustainable luxury tableware by Startly Innovations.</p>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </header>

      {/* 3. Deep Story Section */}
      <section id="story" className="py-24 px-6 bg-gradient-to-br from-[#f7fefc] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-emerald-50">
            <h2 className="text-5xl font-black text-emerald-950 mb-8 tracking-tighter leading-none">Prawali's Root</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Bihar generates millions of tons of Rice Husk (Parali) every year, leading to severe air pollution.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Prawali was born to upcycle this waste into beautiful, premium, and durable tableware that empowers farmers and protects the earth.
            </p>
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-3xl border border-emerald-100"><Ban className="text-emerald-700"/><span className="font-bold text-emerald-900">Zero Stubble Burning Policy</span></div>
          </div>
          <div className="bg-emerald-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[450px]">
            <h3 className="text-3xl font-black mb-6 italic leading-tight text-emerald-300">Startly Innovations™ Technology</h3>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Our parent company, **Startly Innovations**, develops advanced bio-polymer technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><Recycle className="text-emerald-400"/> Decomposes in soil within <strong>180 Days</strong></div>
              <div className="flex items-center gap-3"><Globe className="text-emerald-400"/> 100% Heat Resistant & FDA Approved</div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 4. Products */}
      <section id="products" className="py-24 bg-white px-6">
        <h2 className="text-4xl font-black text-center mb-16 text-emerald-950 tracking-tighter">The Premium Collection</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map(p => (
            <div key={p.id} className="prawali-card text-center group">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover rounded-3xl mb-6 shadow-inner group-hover:scale-105 transition-transform duration-500" />
              <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
              <p className="text-emerald-600 font-black text-lg mb-6">₹{p.price}</p>
              <button className="w-full bg-emerald-900 text-white py-3 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-xl">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Team */}
      <section className="py-24 bg-[#fcfcfc] text-center px-6">
        <h2 className="text-4xl font-black mb-16 text-emerald-950 tracking-tighter">The Visionaries</h2>
        <div className="flex flex-wrap justify-center gap-20">
          <div>
            <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto mb-6"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Krishna" className="w-full h-full" /></div>
            <h4 className="font-bold text-2xl text-emerald-950">Krishna</h4><p className="text-emerald-600 font-bold uppercase text-xs tracking-widest">Developer & AI Lead</p>
          </div>
          <div>
            <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto mb-6"><img src="https://api.dicebear.com/7.x/bottts/svg?seed=Riley" className="w-full h-full" /></div>
            <h4 className="font-bold text-2xl text-emerald-950">Riley</h4><p className="text-emerald-600 font-bold uppercase text-xs tracking-widest">AI Assistant</p>
          </div>
        </div>
      </section>

      {/* Riley AI Window (Optimized) */}
      {chatOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white rounded-[2rem] shadow-2xl border border-emerald-50 z-[200] overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-emerald-700 p-4 text-white flex justify-between items-center shadow-lg">
            <span className="font-bold flex gap-2 items-center"><MessageCircle size={18}/> Riley AI Support</span>
            <button onClick={() => setChatOpen(false)}><X size={20}/></button>
          </div>
          <div className="h-80 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3 text-sm">
            {chatHistory.map((chat, i) => (
              <div key={i} className={`p-3 rounded-2xl max-w-[85%] ${chat.isBot ? 'bg-emerald-100 text-emerald-950 self-start rounded-tl-none shadow-sm' : 'bg-emerald-700 text-white self-end rounded-tr-none shadow-md'}`}>{chat.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t flex gap-2 bg-white">
            <input type="text" className="flex-1 outline-none text-sm px-2" placeholder="Message Riley..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} />
            <button onClick={handleSendMessage} className="text-emerald-700"><Send size={20}/></button>
          </div>
        </div>
      )}

      {/* SINGLE Riley AI Button (Double Icon Fix) */}
      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-10 right-10 bg-emerald-700 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(6,95,70,0.3)] z-[200] hover:scale-110 transition-all flex items-center justify-center">
        <MessageCircle size={32} />
      </button>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-24 px-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div><h3 onClick={() => setView('login')} className="text-4xl font-black mb-6 tracking-tighter cursor-pointer hover:text-emerald-400 transition">Prawali</h3><p className="opacity-60 italic text-lg leading-relaxed">Transforming Bihar's agricultural waste into luxury sustainable essentials.</p></div>
          <div className="space-y-4">
            <h4 className="font-bold text-xl mb-6">Corporate Office</h4>
            <p className="flex gap-3 opacity-50 justify-center md:justify-start"><MapPin size={18}/> Biscomaun Tower, Patna, Bihar</p>
            <p className="flex gap-3 opacity-50 justify-center md:justify-start"><Mail size={18}/> team@startlyinnovations.com</p>
          </div>
          <div className="text-center md:text-right"><h4 className="font-bold text-xl mb-6 italic text-emerald-300">Startly Innovations Pvt. Ltd.</h4><p className="opacity-30 text-xs uppercase tracking-widest mt-12">© 2026 Prawali. All Rights Reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}

export default App;