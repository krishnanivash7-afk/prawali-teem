import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, MapPin, Mail, MessageCircle, Settings, Send, X, User, Trash2, PlusCircle, ShieldCheck, Recycle, Globe, Zap } from 'lucide-react';

function App() {
  const [view, setView] = useState('home');
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [orderCount, setOrderCount] = useState(12); // जैसा आपकी फोटो e8b5c931 में है
  const [orderMessage, setOrderMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { text: "Namaste! Main Riley hoon. Prawali aur Startly Innovations ke bare mein kuch bhi puchiye.", isBot: true }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [productList, setProductList] = useState([
    { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
    { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
    { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
    { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', img: '/assets/logo.png.jpeg' });

  // AI Chat Logic Fix
  const handleSendMessage = () => {
    if (!message.trim()) return;
    const userMsg = { text: message, isBot: false };
    setChatHistory(prev => [...prev, userMsg]);
    setMessage('');
    
    setTimeout(() => {
      let botReply = "Hum Bihar ki parali pollution ko luxury tableware mein badalte hain.";
      if (message.toLowerCase().includes("price")) botReply = "Hamare products ₹149 se shuru hote hain.";
      setChatHistory(prev => [...prev, { text: botReply, isBot: true }]);
    }, 400);
  };

  const handleOrder = (productName: string) => {
    setOrderCount(prev => prev + 1);
    setOrderMessage(`${productName} added to orders!`);
    setTimeout(() => setOrderMessage(''), 3000);
  };

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatHistory, chatOpen]);

  if (view === 'login') return (
    <div className="min-h-screen bg-emerald-50/20 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full text-center border border-emerald-100">
        <ShieldCheck className="mx-auto text-emerald-700 mb-4" size={50} />
        <h2 className="text-3xl font-black text-emerald-950 mb-6">Admin Portal</h2>
        <input type="password" placeholder="Password: prawali123" value={password} onChange={(e) => setPassword(e.target.value)} 
               className="w-full p-4 rounded-2xl border border-emerald-100 mb-4 outline-none focus:ring-2 focus:ring-emerald-500"
               onKeyDown={(e) => e.key === 'Enter' && password === "prawali123" && setView('admin')} />
        <button onClick={() => password === "prawali123" ? setView('admin') : alert("Incorrect")} 
                className="w-full bg-emerald-700 text-white py-4 rounded-2xl font-bold shadow-lg">Login</button>
        <button onClick={() => setView('home')} className="mt-4 text-gray-400">Cancel</button>
      </div>
    </div>
  );

  if (view === 'admin') return (
    <div className="min-h-screen bg-slate-50 p-8">
      <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
        <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Control Center</h1>
        <button onClick={() => {setView('home'); setPassword('');}} className="bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold">Sign Out</button>
      </header>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center border border-emerald-50">
          <h3 className="text-gray-400 text-xs font-bold uppercase mb-2">Lead Orders</h3>
          <p className="text-7xl font-black text-emerald-600">{orderCount}</p>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm col-span-2 border border-emerald-50">
          <h3 className="text-emerald-950 font-bold mb-6 flex gap-2"><PlusCircle /> Add New Product</h3>
          <div className="flex gap-4">
            <input type="text" placeholder="Name" className="flex-1 p-3 border rounded-2xl outline-none" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} />
            <input type="text" placeholder="Price ₹" className="w-32 p-3 border rounded-2xl outline-none" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />
            <button onClick={() => setProductList([...productList, {...newProduct, id: Date.now()}])} className="bg-emerald-600 text-white px-8 rounded-2xl font-bold">Save</button>
          </div>
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

      {/* Premium Navbar */}
      <nav className="sticky top-0 z-[100] w-full bg-white shadow-sm border-b border-emerald-100 py-3 px-6 flex justify-between items-center">
        <a href="#home"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-16 w-auto object-contain" /></a>
        <div className="flex gap-6 items-center">
          <div className="hidden lg:flex gap-10 font-bold text-emerald-950 mr-6">
            <a href="#home" className="hover:text-emerald-600 transition">Home</a>
            <a href="#story" className="hover:text-emerald-600 transition">Story</a>
          </div>
          <a href="#products" className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl no-underline">Shop Now</a>
        </div>
      </nav>

      {/* Cinematic Hero Video */}
      <header id="home" className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter drop-shadow-2xl">From Parali to Pride.</h1>
          <p className="text-xl md:text-2xl font-light italic opacity-90 max-w-2xl mx-auto">Sustainable luxury tableware rooted in Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </header>

      {/* Brand Story */}
      <section id="story" className="py-24 px-6 bg-gradient-to-br from-[#f7fefc] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="bg-white p-14 rounded-[3.5rem] shadow-2xl border border-emerald-50">
            <h2 className="text-5xl font-black text-emerald-950 mb-8 tracking-tighter">Our Rooted Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every year, Bihar's fields burn with Rice Husk (Parali). **Prawali** collects this waste to create premium, heat-resistant tableware.
            </p>
          </div>
          <div className="bg-emerald-900 text-white p-14 rounded-[3.5rem] shadow-2xl relative">
            <h3 className="text-3xl font-black mb-6 italic text-emerald-300">Startly Innovations™</h3>
            <p className="text-xl opacity-90 leading-relaxed">
              Based in Patna, we lead the research in bio-polymer science, ensuring our products decompose in soil within 180 days.
            </p>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-20 text-emerald-950">The Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {productList.map(p => (
            <div key={p.id} className="bg-white p-7 rounded-[3rem] border border-emerald-50 shadow-sm text-center group hover:shadow-2xl transition-all duration-500">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover rounded-[2rem] mb-6 shadow-inner group-hover:scale-105 transition-transform" />
              <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
              <p className="text-emerald-600 font-black text-lg mb-8">₹{p.price}</p>
              <button onClick={() => handleOrder(p.name)} className="w-full bg-emerald-950 text-white py-3.5 rounded-2xl font-bold shadow-xl active:scale-95">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-24 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 onClick={() => setView('login')} className="text-4xl font-black mb-6 cursor-pointer hover:text-emerald-400 transition tracking-tighter">Prawali</h2>
            <p className="opacity-60 mb-10 italic text-lg text-emerald-50">Unit of Startly Innovations Pvt. Ltd. | Bihar's Proud Sustainable Brand.</p>
          </div>
          <div className="md:text-right flex flex-col justify-end">
            <p className="text-xs opacity-30 tracking-widest uppercase font-bold">© 2026 PRAWALI. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* AI CHAT WINDOW */}
      {chatOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white rounded-[2rem] shadow-2xl border border-emerald-50 z-[200] overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-emerald-700 p-4 text-white flex justify-between items-center shadow-lg">
            <span className="font-bold flex gap-2 items-center"><MessageCircle size={18}/> Riley AI Support</span>
            <button onClick={() => setChatOpen(false)}><X size={20}/></button>
          </div>
          <div className="h-80 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3 text-sm">
            {chatHistory.map((chat, i) => (
              <div key={i} className={`p-3 rounded-2xl max-w-[85%] ${chat.isBot ? 'bg-emerald-100 text-emerald-950 self-start shadow-sm' : 'bg-emerald-700 text-white self-end shadow-md'}`}>{chat.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t flex gap-2 bg-white">
            <input type="text" className="flex-1 outline-none text-sm px-2" placeholder="Ask Riley..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} />
            <button onClick={handleSendMessage} className="text-emerald-700 hover:scale-110 transition-all"><Send size={20}/></button>
          </div>
        </div>
      )}

      {/* AI BUTTON */}
      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-10 right-10 bg-emerald-700 text-white p-5 rounded-full shadow-2xl z-[200] hover:scale-110 transition-all flex items-center justify-center">
        <MessageCircle size={32} />
      </button>
    </div>
  );
}

export default App;