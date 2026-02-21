import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, MapPin, Mail, MessageCircle, Settings, Send, X, User, Trash2, PlusCircle, ShieldCheck, Recycle, Globe } from 'lucide-react';

function App() {
  const [view, setView] = useState('home');
  const [password, setPassword] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  // 1. Order Count Fix: Button click increases this
  const [orderCount, setOrderCount] = useState(11);
  
  // 2. Product Management State
  const [productList, setProductList] = useState([
    { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
    { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
    { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
    { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', img: '/assets/logo.png.jpeg' });

  // Admin Functions
  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProductList([...productList, { ...newProduct, id: Date.now() }]);
      setNewProduct({ name: '', price: '', img: '/assets/logo.png.jpeg' });
    }
  };

  const removeProduct = (id: number) => setProductList(productList.filter(p => p.id !== id));

  // 3. Password Check View
  if (view === 'login') return (
    <div className="min-h-screen bg-emerald-50/30 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full text-center border border-emerald-100">
        <ShieldCheck className="mx-auto text-emerald-700 mb-4" size={50} />
        <h2 className="text-3xl font-black text-emerald-950 mb-6">Admin Login</h2>
        <input 
          type="password" 
          placeholder="Enter Admin Password" 
          className="w-full p-4 rounded-2xl border border-emerald-100 mb-4 outline-none focus:ring-2 focus:ring-emerald-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && password === "prawali123" && setView('admin')}
        />
        <button 
          onClick={() => password === "prawali123" ? setView('admin') : alert("Wrong Password!")} 
          className="w-full bg-emerald-700 text-white py-4 rounded-2xl font-bold shadow-lg"
        >Login</button>
        <button onClick={() => setView('home')} className="mt-4 text-gray-400">Cancel</button>
      </div>
    </div>
  );

  // 4. Enhanced Admin Dashboard
  if (view === 'admin') return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
        <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Admin Control</h1>
        <button onClick={() => {setView('home'); setPassword('');}} className="bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold">Logout</button>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm text-center border border-emerald-50">
          <h3 className="text-gray-400 text-xs font-bold uppercase mb-2">Total Live Orders</h3>
          <p className="text-6xl font-black text-emerald-600">{orderCount}</p>
        </div>
        <div className="bg-white p-8 rounded-[2rem] shadow-sm col-span-2 border border-emerald-50">
          <h3 className="text-emerald-950 font-bold mb-4 flex gap-2"><PlusCircle /> Add New Product</h3>
          <div className="flex gap-4">
            <input type="text" placeholder="Product Name" className="flex-1 p-3 border rounded-xl" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} />
            <input type="text" placeholder="Price (₹)" className="w-32 p-3 border rounded-xl" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />
            <button onClick={addProduct} className="bg-emerald-600 text-white px-6 rounded-xl font-bold">Add</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-emerald-50">
        <h3 className="text-emerald-950 font-bold mb-6 italic">Current Collection Management</h3>
        <div className="space-y-4">
          {productList.map(p => (
            <div key={p.id} className="flex justify-between items-center p-4 bg-emerald-50/30 rounded-2xl">
              <span className="font-bold text-emerald-900">{p.name}</span>
              <div className="flex items-center gap-6">
                <span className="font-black text-emerald-700">₹{p.price}</span>
                <button onClick={() => removeProduct(p.id)} className="text-red-400 hover:text-red-600"><Trash2 size={20}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans">
      {/* Premium Navbar */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-lg border-b border-emerald-50 py-3 px-6 flex justify-between items-center">
        <a href="#home"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-16 w-auto object-contain" /></a>
        <div className="flex gap-6 items-center">
          <div className="hidden lg:flex gap-8 font-bold text-emerald-950 mr-4">
            <a href="#home" className="no-underline">Home</a>
            <a href="#story" className="no-underline">Our Story</a>
          </div>
          <a href="#products" className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold text-sm no-underline shadow-lg">Shop Now</a>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover"><source src="/assets/hero-video.mp4" type="video/mp4" /></video>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter drop-shadow-2xl">From Parali to Pride.</h1>
          <p className="text-xl md:text-2xl font-light italic">Bihar's first luxury sustainable tableware.</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </header>

      {/* 5. Re-added Prawali & Startly Story */}
      <section id="story" className="py-24 px-6 bg-gradient-to-br from-[#f7fefc] to-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-emerald-50">
            <h2 className="text-4xl font-black text-emerald-950 mb-6 tracking-tight">The Prawali Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We collect Rice Husk (Parali) directly from farmers in Bihar to stop stubble burning and create premium, heat-resistant tableware.
            </p>
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-3xl border border-emerald-100">
              <Recycle className="text-emerald-700"/>
              <span className="font-bold text-emerald-900">100% Biodegradable & Safe</span>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-12 rounded-[3.5rem] shadow-2xl">
            <h3 className="text-3xl font-black mb-6 italic text-emerald-300">Startly Innovations™</h3>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Parent company of Prawali, dedicated to developing bio-polymer technology that decomposes within 180 days.
            </p>
            <Globe className="text-emerald-400 mb-2" size={40} />
            <p className="font-bold tracking-widest uppercase text-xs">Based in Patna, Bihar</p>
          </div>
        </div>
      </section>

      {/* Collection with Order Button Fix */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 text-emerald-950">Premium Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {productList.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-[2.5rem] border border-emerald-50 shadow-sm text-center group hover:shadow-2xl transition-all duration-500">
              <img src={p.img} alt={p.name} className="w-full h-52 object-cover rounded-3xl mb-6 shadow-inner group-hover:scale-105 transition-transform" />
              <h3 className="font-bold text-emerald-950 text-xl mb-2">{p.name}</h3>
              <p className="text-emerald-600 font-black text-lg mb-6">₹{p.price}</p>
              <button 
                onClick={() => {setOrderCount(prev => prev + 1); alert(`${p.name} added to your orders!`);}} 
                className="w-full bg-emerald-900 text-white py-3 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-lg"
              >Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with Admin Login Trigger */}
      <footer className="bg-emerald-950 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 onClick={() => setView('login')} className="text-3xl font-black mb-4 cursor-pointer hover:text-emerald-400 transition">Prawali</h2>
            <p className="opacity-60 mb-8 italic">Unit of Startly Innovations Pvt. Ltd. | Patna, Bihar</p>
            <div className="space-y-2 opacity-50 text-sm">
              <p><MapPin size={14} className="inline mr-2"/> Biscomaun Tower, Patna</p>
              <p><Mail size={14} className="inline mr-2"/> team@startlyinnovations.com</p>
            </div>
          </div>
          <div className="md:text-right flex flex-col justify-end">
            <p className="text-xs opacity-30">© 2026 PRAWALI. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* Single AI Button */}
      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-10 right-10 bg-emerald-700 text-white p-5 rounded-full shadow-2xl z-[200] hover:scale-110 transition-all">
        <MessageCircle size={32} />
      </button>
    </div>
  );
}

export default App;