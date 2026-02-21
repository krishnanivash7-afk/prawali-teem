import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, MapPin, Mail, MessageCircle, Settings, Send, X, User, Trash2, PlusCircle, ShieldCheck, Recycle, Globe, Zap } from 'lucide-react';

function App() {
  const [view, setView] = useState('home');
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [orderCount, setOrderCount] = useState(12); // जैसा आपकी प्रोग्रेस e8b5c931 में है
  const [orderMessage, setOrderMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { text: "Namaste! Main Riley hoon, Startly Innovations ki AI sahayak.", isBot: true }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [productList, setProductList] = useState([
    { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
    { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
    { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
    { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
  ]);

  // AI Chat Logic
  const handleSendMessage = () => {
    if (!message.trim()) return;
    setChatHistory(prev => [...prev, { text: message, isBot: false }]);
    const currentMsg = message.toLowerCase();
    setMessage('');
    setTimeout(() => {
      let reply = "Hum Bihar ki parali pollution ko luxury tableware mein badalte hain.";
      if (currentMsg.includes("price")) reply = "Hamare products ₹149 se shuru hote hain.";
      setChatHistory(prev => [...prev, { text: reply, isBot: true }]);
    }, 400);
  };

  const handleOrder = (name: string) => {
    setOrderCount(prev => prev + 1);
    setOrderMessage(`${name} added to orders!`);
    setTimeout(() => setOrderMessage(''), 3000);
  };

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatHistory, chatOpen]);

  // ADMIN VIEWS (Login & Dashboard)
  if (view === 'login') return (
    <div className="min-h-screen bg-emerald-50/20 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full text-center border border-emerald-100">
        <ShieldCheck className="mx-auto text-emerald-700 mb-4" size={50} />
        <h2 className="text-3xl font-black text-emerald-950 mb-6 tracking-tighter">Admin Portal</h2>
        <input type="password" placeholder="Password: prawali123" value={password} onChange={(e) => setPassword(e.target.value)} 
               className="w-full p-4 rounded-2xl border border-emerald-100 mb-4 outline-none focus:ring-2 focus:ring-emerald-500"
               onKeyDown={(e) => e.key === 'Enter' && password === "prawali123" && setView('admin')} />
        <button onClick={() => password === "prawali123" ? setView('admin') : alert("Incorrect")} className="w-full bg-emerald-700 text-white py-4 rounded-2xl font-bold">Login</button>
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
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-emerald-50">
          <h3 className="text-gray-400 text-xs font-bold uppercase mb-2">Lead Orders</h3>
          <p className="text-7xl font-black text-emerald-600">{orderCount}</p>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm col-span-2 border border-emerald-50">
          <h3 className="text-emerald-950 font-bold mb-6 italic">Live Inventory Management</h3>
          {productList.map(p => (
            <div key={p.id} className="flex justify-between items-center p-3 border-b">{p.name} <span className="font-bold">₹{p.price}</span></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfdfc] font-sans">
      {orderMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[300] bg-emerald-900 text-white px-8 py-3 rounded-full font-bold shadow-2xl animate-bounce">
          {orderMessage}
        </div>
      )}

      {/* लोगो और टैगलाइन के साथ प्रीमियम नेवबार */}
      <nav className="sticky top-0 z-[100] w-full bg-white shadow-sm border-b border-emerald-50 py-3 px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <a href="#home"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-14 w-auto object-contain" /></a>
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-emerald-600 mt-1">From Waste to Wonder</span>
        </div>
        <div className="flex gap-6 items-center">
          <div className="hidden lg:flex gap-8 font-bold text-emerald-950">
            <a href="#home" className="no-underline">Home</a>
            <a href="#story" className="no-underline">Story</a>
          </div>
          <a href="#products" className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl no-underline">Shop Now</a>
        </div>
      </nav>

      {/* वाइडर वीडियो हीरो सेक्शन */}
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

      {/* स्टोरी और कलेक्शन यहाँ रहेगा */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {productList.map(p => (
            <div key={p.id} className="bg-white p-7 rounded-[3rem] border border-emerald-50 shadow-sm text-center">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover rounded-[2rem] mb-6" />
              <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
              <p className="text-emerald-600 font-black mb-6">₹{p.price}</p>
              <button onClick={() => handleOrder(p.name)} className="w-full bg-emerald-950 text-white py-3 rounded-2xl font-bold">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* फाइनल प्रीमियम "Heavy" फुटर */}
      <footer className="bg-[#042f24] text-white pt-28 pb-12 px-10 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-6">
            <h2 onClick={() => setView('login')} className="text-4xl font-black cursor-pointer tracking-tighter">Prawali</h2>
            <p className="opacity-70 text-sm italic">"From Parali to Pride." Transforming waste into luxury.</p>
          </div>
          <div>
            <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-[10px] mb-6">Innovation Team</h4>
            <div className="space-y-4 text-xs">
              <p className="font-bold">Krishna - Developer & AI Lead</p>
              <p className="font-bold">Riley AI - Assistant</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-[10px] mb-6">Registered Office</h4>
            <p className="text-xs opacity-70">Startly Innovations Pvt. Ltd.<br/>Biscomaun Tower, Patna, Bihar - 800001</p>
          </div>
          <div className="bg-[#064e3b]/50 p-6 rounded-[2.5rem] border border-white/5">
            <h4 className="font-black text-emerald-300 italic mb-3">Startly Innovations™</h4>
            <p className="text-xs opacity-70">Bio-polymer research ensuring products decompose within 180 days.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] opacity-30 uppercase font-bold tracking-[0.2em]">
          <p>© 2026 PRAWALI. ALL RIGHTS RESERVED.</p>
          <span>Made with ❤️ in Bihar</span>
        </div>
      </footer>

      {/* Riley AI बटन और विंडो */}
      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-10 right-10 bg-emerald-700 text-white p-5 rounded-full shadow-2xl z-[200]">
        <MessageCircle size={32} />
      </button>
      {chatOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white rounded-[2rem] shadow-2xl border border-emerald-50 z-[200] overflow-hidden">
          <div className="bg-emerald-700 p-4 text-white flex justify-between items-center shadow-lg font-bold">
            <span>Riley AI Support</span>
            <button onClick={() => setChatOpen(false)}><X size={20}/></button>
          </div>
          <div className="h-72 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-2 text-sm">
            {chatHistory.map((chat, i) => (
              <div key={i} className={`p-3 rounded-2xl ${chat.isBot ? 'bg-emerald-100 self-start' : 'bg-emerald-700 text-white self-end'}`}>{chat.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t flex gap-2">
            <input type="text" className="flex-1 outline-none text-sm" placeholder="Ask Riley..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} />
            <button onClick={handleSendMessage} className="text-emerald-700"><Send size={20}/></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;