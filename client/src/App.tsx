import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, MapPin, Mail, MessageCircle, Settings, Send, X, User, Trash2, PlusCircle, ShieldCheck, Recycle, Globe, Zap } from 'lucide-react';

function App() {
  const [view, setView] = useState('home');
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [orderCount, setOrderCount] = useState(12); // आपकी पिछली प्रोग्रेस के अनुसार
  const [orderMessage, setOrderMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { text: "Namaste! Main Riley hoon, Startly Innovations ki AI assistant.", isBot: true }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [productList, setProductList] = useState([
    { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
    { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
    { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
    { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setChatHistory(prev => [...prev, { text: message, isBot: false }]);
    setMessage('');
    setTimeout(() => {
      setChatHistory(prev => [...prev, { text: "Hum Bihar ki parali ko luxury tableware mein badalte hain.", isBot: true }]);
    }, 400);
  };

  const handleOrder = (name: string) => {
    setOrderCount(prev => prev + 1);
    setOrderMessage(`${name} added to orders!`);
    setTimeout(() => setOrderMessage(''), 3000);
  };

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatHistory, chatOpen]);

  // --- ADMIN VIEWS ---
  if (view === 'login') return (
    <div className="min-h-screen bg-emerald-50/20 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full text-center border border-emerald-100">
        <ShieldCheck className="mx-auto text-emerald-700 mb-4" size={50} />
        <h2 className="text-3xl font-black text-emerald-950 mb-6 tracking-tighter">Admin Login</h2>
        <input type="password" placeholder="Password: prawali123" value={password} onChange={(e) => setPassword(e.target.value)} 
               className="w-full p-4 rounded-2xl border border-emerald-100 mb-4 outline-none focus:ring-2 focus:ring-emerald-500 text-center"
               onKeyDown={(e) => e.key === 'Enter' && password === "prawali123" && setView('admin')} />
        <button onClick={() => password === "prawali123" ? setView('admin') : alert("Incorrect")} className="w-full bg-emerald-700 text-white py-4 rounded-2xl font-bold shadow-lg">Login</button>
        <button onClick={() => setView('home')} className="mt-4 text-gray-400">Cancel</button>
      </div>
    </div>
  );

  if (view === 'admin') return (
    <div className="min-h-screen bg-slate-50 p-8">
      <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
        <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Admin Control</h1>
        <button onClick={() => {setView('home'); setPassword('');}} className="bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold">Sign Out</button>
      </header>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-emerald-50">
          <h3 className="text-gray-400 text-xs font-bold uppercase mb-2">Lead Orders</h3>
          <p className="text-7xl font-black text-emerald-600">{orderCount}</p>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm col-span-2 border border-emerald-50">
          <h3 className="text-emerald-950 font-bold mb-6 italic">Live Inventory</h3>
          {productList.map(p => (
            <div key={p.id} className="flex justify-between items-center p-4 border-b last:border-0">{p.name} <span className="font-bold text-emerald-700">₹{p.price}</span></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfdfc] font-sans overflow-x-hidden">
      {orderMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[300] bg-emerald-900 text-white px-8 py-3 rounded-full font-bold shadow-2xl animate-bounce">
          {orderMessage}
        </div>
      )}

      {/* --- बड़ा लोगो और टैगलाइन वाला नेवबार --- */}
      <nav className="sticky top-0 z-[100] w-full bg-white shadow-sm border-b border-emerald-50 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <a href="#home">
            <img src="/assets/logo.png.jpeg" alt="Logo" className="h-16 md:h-20 w-auto object-contain" />
          </a>
          <div className="flex flex-col">
            <span className="text-3xl font-black text-emerald-950 tracking-tighter leading-none">Prawali</span>
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-black text-amber-500 mt-1">From Waste to Wonder</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-10 font-bold text-emerald-950 mr-6">
          <a href="#home" className="hover:text-emerald-600 no-underline text-emerald-950">Home</a>
          <a href="#story" className="hover:text-emerald-600 no-underline text-emerald-950">Our Story</a>
          <a href="#products" className="hover:text-emerald-600 no-underline text-emerald-950">Collection</a>
        </div>
        <a href="#products" className="bg-emerald-700 text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl no-underline">Shop Now</a>
      </nav>

      {/* --- हीरो वीडियो सेक्शन --- */}
      <header id="home" className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter drop-shadow-2xl leading-none">From Parali to Pride.</h1>
          <p className="text-xl md:text-2xl font-light italic opacity-90 max-w-2xl mx-auto">Sustainable luxury tableware rooted in Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </header>

      {/* --- स्टोरी सेक्शन --- */}
      <section id="story" className="py-24 px-6 bg-gradient-to-br from-[#f7fefc] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="bg-white p-14 rounded-[3.5rem] shadow-2xl border border-emerald-50">
            <h2 className="text-5xl font-black text-emerald-950 mb-8 tracking-tighter">Our Rooted Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
              Every year, Bihar's fields burn with Rice Husk (Parali). **Prawali** collects this waste directly from farmers, upcycling it into premium essentials that protect both Bihar's air and its farmers' dignity.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-5 bg-emerald-50 rounded-3xl border border-emerald-100 font-bold text-emerald-900"><Zap className="mx-auto mb-2"/> Heat Proof</div>
              <div className="p-5 bg-emerald-50 rounded-3xl border border-emerald-100 font-bold text-emerald-900"><Recycle className="mx-auto mb-2"/> BPA Free</div>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-14 rounded-[3.5rem] shadow-2xl relative">
            <h3 className="text-3xl font-black mb-6 italic text-emerald-300">Startly Innovations™</h3>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Based in Patna, we lead the research in bio-polymer science, ensuring our products decompose in soil within 180 days.
            </p>
            <div className="flex items-center gap-3"><Globe className="text-emerald-400"/> <span className="text-xs uppercase tracking-widest font-black">Patna | Biscomaun Tower</span></div>
          </div>
        </div>
      </section>

      {/* --- कलेक्शन सेक्शन --- */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-20 text-emerald-950 tracking-tighter italic">The Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {productList.map(p => (
            <div key={p.id} className="bg-white p-7 rounded-[3rem] border border-emerald-50 shadow-sm text-center group hover:shadow-2xl transition-all duration-500">
              <img src={p.img} alt={p.name} className="w-full h-60 object-cover rounded-[2rem] mb-6 shadow-inner group-hover:scale-105 transition-transform" />
              <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
              <p className="text-emerald-600 font-black text-lg mb-8">₹{p.price}</p>
              <button onClick={() => handleOrder(p.name)} className="w-full bg-emerald-950 text-white py-4 rounded-2xl font-bold shadow-xl active:scale-95">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* --- प्रीमियम "Heavy" फुटर --- */}
      <footer className="bg-[#042f24] text-white pt-28 pb-12 px-10 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-start">
          <div className="space-y-6">
            <h2 onClick={() => setView('login')} className="text-5xl font-black cursor-pointer tracking-tighter">Prawali</h2>
            <p className="text-amber-400 text-xs font-black uppercase tracking-[0.2em]">From Waste to Wonder</p>
            <p className="opacity-70 text-sm italic pr-6 leading-relaxed">Bihar's first luxury sustainable brand, upcycling stubble waste into premium essentials.</p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-[11px] border-b border-white/10 pb-4">Innovation Team</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-xs font-bold border border-emerald-700">K</div>
                <div className="text-xs">
                  <p className="font-black text-white">Krishna</p>
                  <p className="opacity-50 italic">Developer & AI Lead</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-xs font-bold border border-emerald-700">R</div>
                <div className="text-xs">
                  <p className="font-black text-white">Riley AI</p>
                  <p className="opacity-50 italic">AI Assistant</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-[11px] border-b border-white/10 pb-4">Registered Office</h4>
            <div className="space-y-5 opacity-80 text-sm">
              <p className="flex gap-4">
                <MapPin size={28} className="text-emerald-400 shrink-0" />
                <span>Startly Innovations Pvt. Ltd.<br/>Biscomaun Tower, Gandhi Maidan Road,<br/>Patna, Bihar - 800001</span>
              </p>
              <p className="flex gap-4 items-center">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <a href="mailto:team@startlyinnovations.com" className="text-white hover:text-emerald-400 no-underline transition">team@startlyinnovations.com</a>
              </p>
            </div>
          </div>
          <div className="bg-[#064e3b]/50 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h4 className="font-black text-emerald-300 italic mb-4 text-xl">Startly Innovations™</h4>
            <p className="text-xs opacity-70 leading-relaxed mb-6">Leading bio-polymer research in Patna. Products engineered to decompose within 180 days.</p>
            <div className="flex items-center gap-3 text-[10px] font-black text-emerald-400 tracking-tighter uppercase">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              Unit by Startly Innovations
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] opacity-30 tracking-[0.3em] uppercase font-bold text-center">© 2026 PRAWALI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] opacity-30 uppercase font-bold tracking-[0.2em]">
            <span>CIN: U72900BR2026</span>
            <span>Made with ❤️ in Bihar</span>
          </div>
        </div>
      </footer>

      {/* Riley AI बटन और विंडो */}
      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-10 right-10 bg-emerald-700 text-white p-5 rounded-full shadow-2xl z-[200] hover:scale-110 transition-all flex items-center justify-center">
        <MessageCircle size={32} />
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white rounded-[2rem] shadow-2xl border border-emerald-50 z-[200] overflow-hidden">
          <div className="bg-emerald-700 p-4 text-white flex justify-between items-center shadow-lg font-bold">
            <span className="flex gap-2 items-center"><MessageCircle size={18}/> Riley Support</span>
            <button onClick={() => setChatOpen(false)}><X size={20}/></button>
          </div>
          <div className="h-72 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-2 text-sm">
            {chatHistory.map((chat, i) => (
              <div key={i} className={`p-3 rounded-2xl max-w-[85%] ${chat.isBot ? 'bg-emerald-100 self-start shadow-sm' : 'bg-emerald-700 text-white self-end shadow-md'}`}>{chat.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t flex gap-2 bg-white">
            <input type="text" className="flex-1 outline-none text-sm px-2" placeholder="Ask Riley..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} />
            <button onClick={handleSendMessage} className="text-emerald-700"><Send size={20}/></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;