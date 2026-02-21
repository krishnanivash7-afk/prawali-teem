import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, ShieldCheck, MapPin, Mail, Ban, MessageCircle, Settings, LogOut, Send, X, User, Recycle } from 'lucide-react';

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
  const [view, setView] = useState('home');
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([{ text: "Hello Krishna! Ab main database se jud chuki hoon.", isBot: true }]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setChatHistory(prev => [...prev, { text: message, isBot: false }]);
    const botReply = message.toLowerCase().includes("price") ? "Hamare products ₹149 se shuru hote hain." : "Main jald hi aapke orders track kar paungi!";
    setTimeout(() => setChatHistory(prev => [...prev, { text: botReply, isBot: true }]), 400);
    setMessage('');
  };

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatHistory]);

  if (view === 'login') return (
    <div className="min-h-screen bg-[#fff5f5] flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full text-center">
        <Settings className="mx-auto text-emerald-600 mb-4" size={48} />
        <h2 className="text-3xl font-black mb-6">Admin Access</h2>
        <input type="password" placeholder="Password" className="w-full p-4 rounded-2xl border mb-4 outline-none focus:ring-2 focus:ring-emerald-500" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (password === "prawali123" ? setView('admin') : alert("Galat!"))} />
        <button onClick={() => password === "prawali123" ? setView('admin') : alert("Galat!")} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold">Login</button>
        <button onClick={() => setView('home')} className="mt-4 text-gray-400">Back</button>
      </div>
    </div>
  );

  if (view === 'admin') return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
        <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Admin</h1>
        <button onClick={() => setView('home')} className="bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold">Exit</button>
      </header>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-emerald-50"><h3 className="text-gray-400 font-bold mb-2">Total Orders</h3><p className="text-6xl font-black text-emerald-600">0</p></div>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-emerald-100"><h3 className="text-gray-400 font-bold mb-2">Active AI Chats</h3><p className="text-6xl font-black text-emerald-600">1</p></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans">
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-lg border-b border-emerald-50 py-3 px-6 flex justify-between items-center">
        <a href="#home"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-14 w-auto object-contain" /></a>
        <div className="hidden lg:flex gap-8 font-bold text-emerald-950"><a href="#home">Home</a><a href="#about">Story</a><a href="#products">Collection</a></div>
        <div className="flex gap-4 items-center">
          <span className="text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-100 flex gap-1 items-center"><User size={14}/> Profile</span>
          <a href="#products" className="bg-emerald-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg no-underline">Shop Now</a>
        </div>
      </nav>

      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover"><source src="/assets/hero-video.mp4" type="video/mp4" /></video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-8xl font-black mb-4 drop-shadow-2xl tracking-tighter">From Parali to Pride.</h2>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto italic">Sustainable luxury tableware rooted in Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </header>

      <section id="about" className="py-24 px-6 bg-gradient-to-br from-[#f0fff4] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-emerald-50">
            <h2 className="text-4xl font-bold text-emerald-950 mb-6 tracking-tighter">Upcycling Stubble.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">Directly collecting rice husk from farmers to create durable tableware.</p>
          </div>
          <div className="bg-emerald-900 text-white p-12 rounded-[3.5rem] shadow-2xl"><h3 className="text-3xl font-black mb-6 italic">Startly Innovations™ Science</h3><p className="text-xl opacity-80 leading-relaxed">Technology that creates bio-polymers decomposing in soil within 180 Days.</p></div>
        </div>
      </section>

      <section id="products" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-[2.5rem] border border-emerald-50 shadow-sm text-center group hover:shadow-2xl transition-all duration-500">
              <img src={p.img} alt={p.name} className="w-full h-52 object-cover rounded-3xl mb-4 group-hover:scale-105 transition-transform" />
              <h3 className="font-bold text-emerald-950 text-lg">{p.name}</h3>
              <p className="text-emerald-600 font-black mb-4">₹{p.price}</p>
              <button className="w-full bg-emerald-900 text-white py-2 rounded-xl font-bold">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className="py-24 bg-emerald-50/20 text-center">
        <h2 className="text-4xl font-black mb-16 text-emerald-950">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-20">
          {team.map((m, i) => (
            <div key={i} className="group">
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-emerald-200"><img src={m.img} alt={m.name} className="w-full h-full object-cover" /></div>
              <h4 className="font-bold text-2xl text-emerald-950">{m.name}</h4><p className="text-emerald-600 font-black tracking-widest text-xs uppercase">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {chatOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white rounded-[2rem] shadow-2xl border border-blue-50 z-[200] overflow-hidden">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg"><span className="font-bold flex gap-2 items-center"><MessageCircle size={18}/> Riley Support</span><button onClick={() => setChatOpen(false)}><X size={20}/></button></div>
          <div className="h-72 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3 text-sm">{chatHistory.map((chat, i) => (<div key={i} className={`p-3 rounded-2xl max-w-[85%] ${chat.isBot ? 'bg-blue-100 text-blue-950 self-start' : 'bg-blue-600 text-white self-end'}`}>{chat.text}</div>))}<div ref={chatEndRef} /></div>
          <div className="p-4 border-t flex gap-2 bg-white"><input type="text" className="flex-1 outline-none text-sm" placeholder="Type..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} /><button onClick={handleSendMessage} className="text-blue-600"><Send size={20}/></button></div>
        </div>
      )}

      {/* SINGLE RILEY BUTTON FIX */}
      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-10 right-10 bg-blue-600 text-white p-5 rounded-full shadow-2xl z-[200] hover:scale-110 transition-all flex items-center justify-center"><MessageCircle size={32} /></button>

      <footer className="bg-emerald-950 text-white py-20 px-10 text-center md:text-left">
        <h3 onClick={() => setView('login')} className="text-3xl font-black mb-6 cursor-pointer hover:text-emerald-400 inline-block transition">Prawali</h3>
        <p className="opacity-50 text-sm">© 2026 Prawali. Unit of Startly Innovations Pvt. Ltd. | Biscomaun Tower, Patna</p>
      </footer>
    </div>
  );
}

export default App;