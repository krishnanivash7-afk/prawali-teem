import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, ShieldCheck, MapPin, Mail, Ban, Users, MessageCircle, Settings, LogOut, Recycle, Send, X, User } from 'lucide-react';

const products = [
  { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
  { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
  { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
  { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
];

function App() {
  const [view, setView] = useState('home'); // home, admin, login, user-auth
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [chatHistory, setChatHistory] = useState([
    { text: "Namaste Krishna! Main Riley AI support hoon. Aap hamare products ya eco-mission ke baare mein kuch bhi puch sakte hain.", isBot: true }
  ]);

  // AI Logic: मैसेज के हिसाब से जवाब
  const getBotResponse = (userText: string) => {
    const text = userText.toLowerCase();
    if (text.includes("order")) return "Aap 'Order Now' par click karke order kar sakte hain. Jald hi tracking system bhi aayega!";
    if (text.includes("price") || text.includes("kitna")) return "Hamare products ₹149 se shuru hote hain. Aap 'Collection' section mein sab dekh sakte hain.";
    if (text.includes("parali") || text.includes("eco")) return "Hum Bihar ki 'Parali' pollution ko khatam karke ye premium bartan banate hain.";
    if (text.includes("hi") || text.includes("hello")) return "Hello! Main Riley AI. Main aapki kaise madad kar sakta hoon?";
    return "Muje thoda aur bataiye. Main abhi seekh raha hoon par aapke orders track karne mein jald madad kar paunga!";
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    const newUserMsg = { text: message, isBot: false };
    setChatHistory(prev => [...prev, newUserMsg]);
    const response = getBotResponse(message);
    setMessage('');

    setTimeout(() => {
      setChatHistory(prev => [...prev, { text: response, isBot: true }]);
    }, 800);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // --- ADMIN & USER LOGIN VIEWS ---
  if (view === 'login') {
    return (
      <div className="min-h-screen bg-[#fff5f5] flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full text-center border border-emerald-50 animate-in fade-in zoom-in">
          <Settings className="mx-auto text-emerald-600 mb-4" size={48} />
          <h2 className="text-3xl font-black text-emerald-950 mb-6 tracking-tighter">Admin Access</h2>
          <input type="password" placeholder="Admin Password" 
            className="w-full p-4 rounded-2xl border border-emerald-100 mb-4 outline-none focus:ring-2 focus:ring-emerald-500"
            value={password} onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (password === "prawali123" ? setView('admin') : alert("Galat!"))}
          />
          <button onClick={() => password === "prawali123" ? setView('admin') : alert("Galat!")} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition">Login</button>
          <button onClick={() => setView('home')} className="mt-4 text-gray-400">Back</button>
        </div>
      </div>
    );
  }

  if (view === 'user-auth') {
    return (
      <div className="min-h-screen bg-[#f0fff4] flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full text-center border border-emerald-50">
          <User className="mx-auto text-emerald-600 mb-4" size={48} />
          <h2 className="text-3xl font-black text-emerald-950 mb-2 tracking-tighter">Welcome to Prawali</h2>
          <p className="text-gray-500 mb-6">Apna account banayein ya login karein.</p>
          <input type="text" placeholder="Phone Number / Email" className="w-full p-4 rounded-2xl border border-emerald-100 mb-4" />
          <button onClick={() => {setIsUserLoggedIn(true); setView('home');}} className="w-full bg-emerald-900 text-white py-4 rounded-2xl font-bold shadow-xl">Sign In</button>
          <button onClick={() => setView('home')} className="mt-4 text-gray-400">Cancel</button>
        </div>
      </div>
    );
  }

  if (view === 'admin') {
    return (
      <div className="min-h-screen bg-slate-50 p-8 font-sans">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
            <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Admin Dashboard</h1>
            <button onClick={() => setView('home')} className="bg-red-50 text-red-600 px-6 py-2 rounded-full flex gap-2 items-center font-bold">
              <LogOut size={18} /> Exit
            </button>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 text-center">
              <h3 className="text-gray-400 uppercase text-xs font-bold mb-2">Total Orders</h3>
              <p className="text-5xl font-black text-emerald-600">0</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 text-center">
              <h3 className="text-gray-400 uppercase text-xs font-bold mb-2">Active AI Chats</h3>
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

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans overflow-x-hidden">
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-50 py-3 px-6 flex justify-between items-center shadow-sm">
        <a href="#home" className="hover:scale-105 transition-transform">
          <img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-14 w-auto object-contain" />
        </a>
        <div className="hidden md:flex gap-8 font-bold text-emerald-950 items-center">
          <a href="#home">Home</a>
          <a href="#about">Story</a>
          <a href="#products">Collection</a>
          {isUserLoggedIn ? (
            <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-sm"><User size={14}/> Profile</span>
          ) : (
            <button onClick={() => setView('user-auth')} className="text-emerald-600 hover:bg-emerald-50 px-4 py-1 rounded-full transition border border-emerald-100 text-sm">Sign In</button>
          )}
        </div>
        {/* Shop Now बटन फिक्स */}
        <a href="#products" className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition no-underline">Shop Now</a>
      </nav>

      {/* 2. Hero */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-8xl font-black mb-4 drop-shadow-2xl tracking-tighter">From Parali to Pride.</h2>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto italic">Premium eco-luxury tableware rooted in the heart of Bihar.</p>
          <div className="flex gap-4 justify-center mt-8">
             <a href="#products" className="bg-white text-emerald-900 px-8 py-3 rounded-full font-bold shadow-2xl hover:bg-emerald-50 transition no-underline">Explore</a>
             <button onClick={() => setChatOpen(true)} className="bg-blue-600/80 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold flex gap-2 items-center hover:bg-blue-600 transition">Talk to Riley</button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </header>

      {/* 3. Story Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-[#f0fff4] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-emerald-50">
            <h2 className="text-4xl font-bold text-emerald-950 mb-6 tracking-tighter leading-none">Upcycling Stubble.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">Directly collecting rice husk from farmers to stop smoke and create durable tableware.</p>
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-3xl border border-emerald-100">
              <Ban className="text-emerald-600" size={32} />
              <div><h4 className="font-bold">Zero Smoke</h4><p className="text-sm opacity-60">Bihar Air Quality Mission.</p></div>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[400px]">
            <h3 className="text-3xl font-black mb-6 italic leading-tight">Startly Innovations™ Technology</h3>
            <p className="text-xl opacity-80 leading-relaxed mb-8">Bio-polymers that decompose in soil within <strong>180 Days</strong>.</p>
            <ShieldCheck className="text-emerald-300" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 4. Products Grid */}
      <section id="products" className="py-24 bg-white px-6">
        <h2 className="text-4xl font-black text-center mb-16 text-emerald-950 tracking-tighter">The Collection</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white p-6 rounded-[2.5rem] border border-emerald-50 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center group">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover rounded-3xl mb-6 shadow-inner" />
              <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
              <p className="text-emerald-600 font-black text-lg mb-6">₹{p.price}</p>
              <button className="w-full bg-emerald-900 text-white py-3 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-xl">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Team Section */}
      <section id="team" className="py-24 bg-emerald-50/20 text-center">
        <h2 className="text-4xl font-black mb-16 text-emerald-950 tracking-tighter">The Visionaries</h2>
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

      {/* RILEY AI CHAT WINDOW फिक्स */}
      {chatOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-blue-50 z-[200] overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
            <span className="font-bold flex gap-2 items-center"><MessageCircle size={18}/> Riley Support</span>
            <button onClick={() => setChatOpen(false)} className="hover:rotate-90 transition-transform"><X size={20}/></button>
          </div>
          <div className="h-80 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3">
            {chatHistory.map((chat, i) => (
              <div key={i} className={`p-3 rounded-2xl text-sm max-w-[85%] ${chat.isBot ? 'bg-blue-100 text-blue-900 rounded-tl-none self-start shadow-sm' : 'bg-blue-600 text-white rounded-tr-none self-end shadow-md'}`}>
                {chat.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t bg-white flex gap-2">
            <input 
              type="text" placeholder="Puchhiye kuch..." 
              className="flex-1 text-sm outline-none px-2"
              value={message} onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage} className="text-blue-600 hover:scale-110 transition-transform"><Send size={20}/></button>
          </div>
        </div>
      )}

      {/* SINGLE प्रोफेशनल फ्लोटिंग बटन फिक्स */}
      <button 
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-10 right-10 bg-blue-600 text-white p-5 rounded-full shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:scale-110 transition-all z-[100] group flex items-center gap-2"
      >
        <MessageCircle size={32} />
        <span className="hidden group-hover:block font-bold text-sm pr-2">Talk to Riley</span>
      </button>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-20 px-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 onClick={() => setView('login')} className="text-3xl font-black mb-6 tracking-tighter cursor-pointer hover:text-emerald-400 transition">Prawali</h3>
            <p className="opacity-60 text-lg leading-relaxed italic">Transforming agricultural waste into premium luxury essentials.</p>
          </div>
          <div className="opacity-50 text-sm space-y-4">
            <p className="flex gap-2 justify-center md:justify-start"><MapPin size={16}/> Biscomaun Tower, Patna | Muzaffarpur, Bihar.</p>
            <p className="flex gap-2 justify-center md:justify-start"><Mail size={16}/> team@startlyinnovations.com</p>
          </div>
        </div>
        <div className="mt-20 text-center opacity-20 text-[10px] border-t border-white/5 pt-8">
          © 2026 Prawali. Unit of Startly Innovations Pvt. Ltd.
        </div>
      </footer>
    </div>
  );
}

export default App;