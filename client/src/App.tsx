import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, MapPin, Mail, MessageCircle, Settings, Send, X, User, Trash2, PlusCircle, ShieldCheck, Recycle, Globe, Zap } from 'lucide-react';

function App() {
  const [view, setView] = useState('home');
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [orderCount, setOrderCount] = useState(11); // Last recorded orders
  const [orderMessage, setOrderMessage] = useState('');

  const [productList, setProductList] = useState([
    { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
    { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
    { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
    { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', img: '/assets/logo.png.jpeg' });

  // 1. INP Issue Fix: Using a toast instead of alert()
  const handleOrder = (productName: string) => {
    setOrderCount(prev => prev + 1);
    setOrderMessage(`${productName} added to orders!`);
    setTimeout(() => setOrderMessage(''), 3000); // Auto-hide after 3 seconds
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProductList([...productList, { ...newProduct, id: Date.now() }]);
      setNewProduct({ name: '', price: '', img: '/assets/logo.png.jpeg' });
    }
  };

  const removeProduct = (id: number) => setProductList(productList.filter(p => p.id !== id));

  // Admin Login View with Password
  if (view === 'login') return (
    <div className="min-h-screen bg-emerald-50/20 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full text-center border border-emerald-100">
        <ShieldCheck className="mx-auto text-emerald-700 mb-4" size={50} />
        <h2 className="text-3xl font-black text-emerald-950 mb-6 tracking-tighter">Admin Portal</h2>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} 
               className="w-full p-4 rounded-2xl border border-emerald-100 mb-4 outline-none focus:ring-2 focus:ring-emerald-500"
               onKeyDown={(e) => e.key === 'Enter' && password === "prawali123" && setView('admin')} />
        <button onClick={() => password === "prawali123" ? setView('admin') : alert("Incorrect Password")} 
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
            <button onClick={addProduct} className="bg-emerald-600 text-white px-8 rounded-2xl font-bold hover:bg-emerald-700 transition">Save</button>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-emerald-50">
        <h3 className="text-emerald-950 font-bold mb-8 italic">Live Inventory Management</h3>
        <div className="grid gap-4">
          {productList.map(p => (
            <div key={p.id} className="flex justify-between items-center p-5 bg-emerald-50/30 rounded-3xl border border-emerald-50/50">
              <span className="font-bold text-emerald-900 text-lg">{p.name}</span>
              <div className="flex items-center gap-10">
                <span className="font-black text-emerald-700">₹{p.price}</span>
                <button onClick={() => removeProduct(p.id)} className="text-red-400 hover:text-red-600 transition"><Trash2 size={22}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfdfc] font-sans overflow-x-hidden">
      {/* Toast Message for Order Fix */}
      {orderMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[300] bg-emerald-900 text-white px-8 py-3 rounded-full font-bold shadow-2xl animate-bounce">
          {orderMessage}
        </div>
      )}

      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-emerald-50 py-3 px-6 flex justify-between items-center">
        <a href="#home"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-16 w-auto object-contain" /></a>
        <div className="flex gap-6 items-center">
          <div className="hidden lg:flex gap-10 font-bold text-emerald-950 mr-6">
            <a href="#home" className="hover:text-emerald-600 transition">Home</a>
            <a href="#story" className="hover:text-emerald-600 transition">Story</a>
          </div>
          <a href="#products" className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl no-underline hover:bg-emerald-800 transition">Shop Now</a>
        </div>
      </nav>

      <header id="home" className="relative h-screen flex items-center justify-center">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter drop-shadow-2xl leading-none">From Parali to Pride.</h1>
          <p className="text-xl md:text-2xl font-light italic opacity-90 max-w-2xl mx-auto">Sustainable luxury tableware rooted in Bihar.</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </header>

      {/* Startly & Prawali Brand Story */}
      <section id="story" className="py-24 px-6 bg-gradient-to-br from-[#f7fefc] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="bg-white p-14 rounded-[3.5rem] shadow-2xl border border-emerald-50">
            <h2 className="text-5xl font-black text-emerald-950 mb-8 tracking-tighter">Our Rooted Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Every year, Bihar's fields burn with Rice Husk (Parali), creating dangerous smog. **Prawali** collects this waste directly from farmers, upcycling it into premium, heat-resistant tableware that protects both Bihar's air and its farmers' dignity.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-emerald-50 rounded-3xl text-center border border-emerald-100"><Zap className="text-emerald-700 mx-auto mb-2"/><span className="font-bold text-xs">Heat Proof</span></div>
              <div className="p-5 bg-emerald-50 rounded-3xl text-center border border-emerald-100"><Recycle className="text-emerald-700 mx-auto mb-2"/><span className="font-bold text-xs">BPA Free</span></div>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl font-black mb-6 italic text-emerald-300 tracking-tight">Startly Innovations™</h3>
            <p className="text-xl opacity-90 leading-relaxed mb-8 font-light">
              As the parent company, **Startly Innovations Pvt. Ltd.** based in Patna, leads the research in bio-polymer science, ensuring our products decompose in soil within 180 days.
            </p>
            <div className="flex items-center gap-3"><Globe className="text-emerald-400"/> <span className="text-xs uppercase tracking-widest font-black">Patna | Biscomaun Tower</span></div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-20 text-emerald-950 tracking-tighter italic underline decoration-emerald-500 decoration-4 underline-offset-8">The Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {productList.map(p => (
            <div key={p.id} className="bg-white p-7 rounded-[3rem] border border-emerald-50 shadow-sm text-center group hover:shadow-[0_30px_60px_-15px_rgba(6,95,70,0.2)] hover:-translate-y-4 transition-all duration-500">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover rounded-[2rem] mb-6 shadow-inner group-hover:scale-105 transition-transform" />
              <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
              <p className="text-emerald-600 font-black text-lg mb-8">₹{p.price}</p>
              <button onClick={() => handleOrder(p.name)} 
                      className="w-full bg-emerald-950 text-white py-3.5 rounded-2xl font-bold hover:bg-emerald-800 transition shadow-xl active:scale-95">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-emerald-950 text-white py-24 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 onClick={() => setView('login')} className="text-4xl font-black mb-6 cursor-pointer hover:text-emerald-400 transition tracking-tighter">Prawali</h2>
            <p className="opacity-60 mb-10 italic text-lg">Unit of Startly Innovations Pvt. Ltd. | Bihar's Proud Sustainable Brand.</p>
            <div className="space-y-4 opacity-50 text-sm font-light">
              <p className="flex gap-2"><MapPin size={18}/> Biscomaun Tower, Patna, Bihar</p>
              <p className="flex gap-2"><Mail size={18}/> team@startlyinnovations.com</p>
            </div>
          </div>
          <div className="md:text-right flex flex-col justify-end">
            <p className="text-xs opacity-30 tracking-widest uppercase font-bold">© 2026 PRAWALI. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-10 right-10 bg-emerald-700 text-white p-5 rounded-full shadow-2xl z-[200] hover:scale-110 transition-all flex items-center justify-center">
        <MessageCircle size={32} />
      </button>
    </div>
  );
}

export default App;