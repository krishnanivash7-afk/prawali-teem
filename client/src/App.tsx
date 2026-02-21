import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, MapPin, Mail, MessageCircle, Settings, Send, X, User, Trash2, PlusCircle, ShieldCheck, Recycle, Globe, Zap } from 'lucide-react';

function App() {
  const [view, setView] = useState('home');
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [orderCount, setOrderCount] = useState(12); // आपकी आखिरी प्रोग्रेस के अनुसार
  const [orderMessage, setOrderMessage] = useState('');

  const [productList, setProductList] = useState([
    { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
    { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
    { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
    { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
  ]);

  const handleOrder = (productName: string) => {
    setOrderCount(prev => prev + 1);
    setOrderMessage(`${productName} का ऑर्डर दर्ज किया गया!`);
    setTimeout(() => setOrderMessage(''), 3000);
  };

  if (view === 'admin') { /* एडमिन कोड यहाँ रहेगा */ }

  return (
    <div className="min-h-screen bg-[#fdfdfc] font-sans overflow-x-hidden">
      {orderMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[300] bg-emerald-900 text-white px-8 py-3 rounded-full font-bold shadow-2xl animate-bounce">
          {orderMessage}
        </div>
      )}

      {/* प्रीमियम नेवबार और हीरो सेक्शन */}
      <nav className="sticky top-0 z-[100] w-full bg-white shadow-sm border-b border-emerald-100 py-3 px-6 flex justify-between items-center">
        <a href="#home"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-16 w-auto object-contain" /></a>
        <a href="#products" className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold text-sm no-underline">Shop Now</a>
      </nav>

      <header id="home" className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover"><source src="/assets/hero-video.mp4" type="video/mp4" /></video>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter drop-shadow-2xl leading-none">From Parali to Pride.</h1>
          <p className="text-xl md:text-2xl font-light italic opacity-90 max-w-2xl mx-auto">Sustainable luxury tableware rooted in Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </header>

      {/* प्रोडक्ट्स सेक्शन */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-16 text-emerald-950 tracking-tighter italic">The Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {productList.map(p => (
            <div key={p.id} className="bg-white p-7 rounded-[3rem] border border-emerald-50 shadow-sm text-center group hover:shadow-2xl transition-all duration-500">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover rounded-[2rem] mb-6 shadow-inner group-hover:scale-105 transition-transform" />
              <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
              <p className="text-emerald-600 font-black text-lg mb-8">₹{p.price}</p>
              <button onClick={() => handleOrder(p.name)} className="w-full bg-emerald-950 text-white py-3.5 rounded-2xl font-bold shadow-xl active:scale-95 transition">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* --- फुल कॉर्पोरेट फुटर --- */}
      <footer className="bg-emerald-950 text-white pt-28 pb-12 px-10 border-t border-emerald-900 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          <div className="space-y-6">
            <h2 onClick={() => setView('login')} className="text-4xl font-black cursor-pointer hover:text-emerald-400 transition tracking-tighter">Prawali</h2>
            <p className="opacity-70 text-sm leading-relaxed italic">"From Parali to Pride." Bihar's first luxury sustainable brand.</p>
            <div className="flex gap-4 opacity-40"><Recycle size={20} /> <Globe size={20} /> <ShieldCheck size={20} /> <Zap size={20} /></div>
          </div>

          <div>
            <h4 className="font-bold text-emerald-400 mb-6 uppercase tracking-widest text-[10px]">Innovation Team</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-[10px] font-bold">K</div>
                <div className="text-xs"><p className="font-bold">Krishna</p><p className="opacity-50">Developer & AI Lead</p></div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-[10px] font-bold">R</div>
                <div className="text-xs"><p className="font-bold">Riley AI</p><p className="opacity-50">Assistant</p></div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-emerald-400 mb-6 uppercase tracking-widest text-[10px]">Registered Office</h4>
            <div className="space-y-5 opacity-70 text-sm">
              <p className="flex gap-3 leading-snug"><MapPin size={24} className="text-emerald-400 shrink-0" />
                <span>Startly Innovations Pvt. Ltd.<br/>Biscomaun Tower, Gandhi Maidan Road,<br/>Patna, Bihar - 800001</span>
              </p>
              <p className="flex gap-3 items-center"><Mail size={18} className="text-emerald-400 shrink-0" />
                <a href="mailto:team@startlyinnovations.com" className="text-white hover:text-emerald-400 transition">team@startlyinnovations.com</a>
              </p>
            </div>
          </div>

          <div className="bg-emerald-900/30 p-8 rounded-[2.5rem] border border-white/5">
            <h4 className="font-black text-emerald-300 italic mb-3 tracking-tight">Startly Innovations™</h4>
            <p className="text-xs opacity-70 leading-relaxed mb-6">Leading bio-polymer research in Patna. Decomposes within 180 days.</p>
            <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Direct From Patna</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] opacity-30 tracking-[0.3em] uppercase font-bold text-center md:text-left">© 2026 PRAWALI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] opacity-30 uppercase font-bold tracking-[0.2em]"><span className="hover:opacity-100 transition">CIN: U72900BR2026</span><span className="hover:opacity-100 transition">Made with ❤️ in Bihar</span></div>
        </div>
      </footer>
    </div>
  );
}

export default App;