import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, ShieldCheck, MapPin, Mail, Ban, Users, MessageCircle, Settings, LogOut, Recycle, Send, X, User } from 'lucide-react';

const products = [
  { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
  { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
  { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
  { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
];

function App() {
  const [view, setView] = useState('home'); 
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { text: "Namaste Krishna! Main Riley AI hoon. Products ya humare mission ke bare mein kuch bhi puchiye.", isBot: true }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Riley AI Logic
  const getBotResponse = (input: string) => {
    const text = input.toLowerCase();
    if (text.includes("hi") || text.includes("hello")) return "Hello! Prawali mein swagat hai. Main Riley AI, aapki kaise madad karun?";
    if (text.includes("price") || text.includes("kitna")) return "Humare products ₹149 se shuru hote hain.";
    if (text.includes("parali") || text.includes("eco")) return "Hum Bihar ki parali ko upcycle karke unbreakable bartan banate hain.";
    return "Jald hi main aapke orders track karne mein bhi madad karungi!";
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const userMsg = { text: message, isBot: false };
    setChatHistory(prev => [...prev, userMsg]);
    const botReply = getBotResponse(message);
    setMessage('');
    setTimeout(() => {
      setChatHistory(prev => [...prev, { text: botReply, isBot: true }]);
    }, 400); // Fast response to fix INP
  };

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatHistory]);

  // --- Login & Admin Logic ---
  const handleAdminLogin = () => {
    if (password === "prawali123") { setView('admin'); setPassword(''); }
    else { alert("Wrong Password!"); }
  };

  if (view === 'login') {
    return (
      <div className="min-h-screen bg-[#fff5f5] flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full text-center border border-emerald-50">
          <Settings className="mx-auto text-emerald-600 mb-4" size={48} />
          <h2 className="text-3xl font-black mb-6 tracking-tighter">Admin Access</h2>
          <input type="password" placeholder="Password" className="w-full p-4 rounded-2xl border mb-4 outline-none focus:ring-2 focus:ring-emerald-500" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()} />
          <button onClick={handleAdminLogin} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold">Login</button>
          <button onClick={() => setView('home')} className="mt-4 text-gray-400">Back</button>
        </div>
      </div>
    );
  }

  if (view === 'admin') {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
          <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Admin</h1>
          <button onClick={() => setView('home')} className="bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold">Exit Dashboard</button>
        </header>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-emerald-50">
            <h3 className="text-gray-400 uppercase text-xs font-bold mb-2 tracking-widest">Total Orders</h3>
            <p className="text-6xl font-black text-emerald-600">0</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-emerald-50">
            <h3 className="text-gray-400 uppercase text-xs font-bold mb-2 tracking-widest">Active AI Chats</h3>
            <p className="text-6xl font-black text-emerald-600">1</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans overflow-x-hidden">
      {/* 1. Navbar: Login Move to corner fix */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-lg border-b border-emerald-50 py-3 px-6 flex justify-between items-center shadow-sm">
        <a href="#home" className="hover:scale-105 transition-transform"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-14 w-auto object-contain" /></a>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-8 font-bold text-emerald-950 mr-4">
            <a href="#home">Home</a>
            <a href="#about">Story</a>
            <a href="#products">Collection</a>
          </div>
          
          {/* Login Button moved next to Shop Now */}
          {isUserLoggedIn ? (
            <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full text-sm font-bold border border-emerald-100"><User size={16}/> Profile</span>
          ) : (
            <button onClick={() => setIsUserLoggedIn(true)} className="text-emerald-700 font-bold text-sm hover:underline">Sign In</button>
          )}
          <a href="#products" className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold no-underline shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition">Shop Now</a>
        </div>
      </nav>

      {/* 2. Hero */}
      <header id="home" className="relative h-screen flex items-center justify-center">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-8xl font-black mb-4 drop-shadow-2xl tracking-tighter">From Parali to Pride.</h2>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto italic">Sustainable luxury tableware rooted in the heart of Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </header>

      {/* 3. Products Grid */}
      <section id="products" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-[2.5rem] border border-emerald-50 shadow-sm text-center group hover:shadow-2xl transition-all duration-500">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-3xl mb-4 shadow-inner group-hover:scale-105 transition-transform" />
              <h3 className="font-bold text-emerald-950">{p.name}</h3>
              <p className="text-emerald-600 font-bold mb-4">₹{p.price}</p>
              <button className="w-full bg-emerald-900 text-white py-2 rounded-xl font-bold hover:bg-emerald-700">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Riley AI Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white rounded-[2rem] shadow-2xl border border-blue-50 z-[200] overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
            <span className="font-bold flex gap-2 items-center"><MessageCircle size={18}/> Riley Support</span>
            <button onClick={() => setChatOpen(false)} className="hover:rotate-90 transition-transform"><X size={20}/></button>
          </div>
          <div className="h-72 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3 text-sm">
            {chatHistory.map((chat, i) => (
              <div key={i} className={`p-3 rounded-2xl max-w-[85%] ${chat.isBot ? 'bg-blue-100 text-blue-950 self-start' : 'bg-blue-600 text-white self-end'}`}>{chat.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t flex gap-2 bg-white">
            <input type="text" className="flex-1 outline-none text-sm" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} />
            <button onClick={handleSendMessage} className="text-blue-600 hover:scale-110 transition-transform"><Send size={20}/></button>
          </div>
        </div>
      )}

      {/* SINGLE Riley AI Button */}
      <button 
        onClick={() => setChatOpen(!chatOpen)} 
        className="fixed bottom-10 right-10 bg-blue-600 text-white p-5 rounded-full shadow-[0_15px_40px_rgba(37,99,235,0.4)] z-[200] hover:scale-110 transition-all flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </button>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-20 px-10 text-center md:text-left">
        <h3 onClick={() => setView('login')} className="text-3xl font-black mb-6 cursor-pointer hover:text-emerald-400 inline-block transition">Prawali</h3>
        <p className="opacity-50 text-sm">© 2026 Prawali. Unit of Startly Innovations Pvt. Ltd. | Biscomaun Tower, Patna</p>
      </footer>
    </div>
  );
}

export default App;