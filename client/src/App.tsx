import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, MapPin, Mail, MessageCircle, Settings, Send, X, User, Trash2, PlusCircle } from 'lucide-react';

function App() {
  const [view, setView] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [orderCount, setOrderCount] = useState(0);
  
  // Product State: Isse aap products add/remove kar payenge
  const [productList, setProductList] = useState([
    { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
    { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
    { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
    { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
  ]);

  // Admin Form State
  const [newProduct, setNewProduct] = useState({ name: '', price: '', img: '' });

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setMessage('');
    // Riley AI logic yahan rahega
  };

  // Product Add karne ka function
  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      const id = productList.length > 0 ? productList[productList.length - 1].id + 1 : 1;
      setProductList([...productList, { ...newProduct, id }]);
      setNewProduct({ name: '', price: '', img: '/assets/logo.png.jpeg' });
    }
  };

  // Product Remove karne ka function
  const removeProduct = (id: number) => {
    setProductList(productList.filter(p => p.id !== id));
  };

  if (view === 'admin') return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
        <h1 className="text-2xl font-bold text-emerald-950 flex gap-2 items-center"><Settings /> Prawali Admin Dashboard</h1>
        <button onClick={() => setView('home')} className="bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold">Exit</button>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm text-center border border-emerald-50">
          <h3 className="text-gray-400 text-xs font-bold uppercase mb-2">Total Orders</h3>
          <p className="text-5xl font-black text-emerald-600">{orderCount}</p>
        </div>
        <div className="bg-white p-8 rounded-[2rem] shadow-sm text-center border border-emerald-50 col-span-2">
          <h3 className="text-emerald-950 font-bold mb-4 text-left flex gap-2"><PlusCircle /> Add New Product</h3>
          <div className="grid grid-cols-3 gap-4">
            <input type="text" placeholder="Name" className="p-3 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} />
            <input type="text" placeholder="Price (₹)" className="p-3 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />
            <button onClick={addProduct} className="bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition">Add Product</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-emerald-50">
        <h3 className="text-emerald-950 font-bold mb-6">Manage Products ({productList.length})</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-400 text-sm">
                <li className="py-4 px-2">Product</li>
                <li className="py-4 px-2">Price</li>
                <li className="py-4 px-2 text-right">Action</li>
              </tr>
            </thead>
            <tbody>
              {productList.map(p => (
                <tr key={p.id} className="border-b last:border-0">
                  <td className="py-4 px-2 font-bold text-emerald-900">{p.name}</td>
                  <td className="py-4 px-2 text-emerald-600 font-bold">₹{p.price}</td>
                  <td className="py-4 px-2 text-right">
                    <button onClick={() => removeProduct(p.id)} className="text-red-400 hover:text-red-600 transition"><Trash2 size={20}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans">
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-emerald-50 py-3 px-6 flex justify-between items-center shadow-sm">
        <a href="#home"><img src="/assets/logo.png.jpeg" alt="Logo" className="h-10 md:h-14 w-auto object-contain" /></a>
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-8 font-bold text-emerald-950 mr-4">
            <a href="#home" className="no-underline">Home</a>
            <a href="#products" className="no-underline">Collection</a>
          </div>
          <button className="text-emerald-700 font-bold text-sm"><User size={16} className="inline mr-1"/> Profile</button>
          <a href="#products" className="bg-emerald-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-md no-underline">Shop Now</a>
        </div>
      </nav>

      <header id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover"><source src="/assets/hero-video.mp4" type="video/mp4" /></video>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter drop-shadow-2xl">From Parali to Pride.</h1>
          <p className="text-xl md:text-2xl font-light italic opacity-90">Sustainable luxury tableware rooted in Bihar.</p>
        </div>
      </header>

      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-16 text-emerald-950 tracking-tight">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {productList.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-[2.5rem] border border-emerald-50 shadow-sm text-center group hover:shadow-2xl transition-all duration-500">
              <img src={p.img || '/assets/logo.png.jpeg'} alt={p.name} className="w-full h-48 object-cover rounded-3xl mb-4 shadow-inner group-hover:scale-105 transition-transform" />
              <h3 className="font-bold text-emerald-950">{p.name}</h3>
              <p className="text-emerald-600 font-black mb-4">₹{p.price}</p>
              <button onClick={() => setOrderCount(prev => prev + 1)} className="w-full bg-emerald-900 text-white py-2 rounded-xl font-bold hover:bg-emerald-700 transition">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-emerald-950 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 onClick={() => setView('admin')} className="text-3xl font-black mb-4 cursor-pointer hover:text-emerald-400 transition">Prawali</h2>
            <p className="opacity-60 mb-8 italic">Transforming Bihar's agricultural waste into luxury sustainable essentials.</p>
            <div className="space-y-2 opacity-50 text-sm">
              <p><MapPin size={14} className="inline mr-2"/> Biscomaun Tower, Patna, Bihar</p>
              <p><Mail size={14} className="inline mr-2"/> team@startlyinnovations.com</p>
            </div>
          </div>
          <div className="md:text-right border-t md:border-t-0 border-white/10 pt-8 md:pt-0">
            <h4 className="font-bold text-emerald-400 mb-4">Startly Innovations Pvt. Ltd.</h4>
            <p className="text-xs opacity-30 mt-12">© 2026 Prawali. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* SINGLE AI Button */}
      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-10 right-10 bg-emerald-700 text-white p-5 rounded-full shadow-2xl z-[200] hover:scale-110 transition-all">
        <MessageCircle size={32} />
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white rounded-[2rem] shadow-2xl border border-emerald-50 z-[200] overflow-hidden">
          <div className="bg-emerald-700 p-4 text-white flex justify-between items-center shadow-lg font-bold">
            <span className="flex gap-2 items-center"><MessageCircle size={18}/> Riley AI</span>
            <button onClick={() => setChatOpen(false)}><X size={20}/></button>
          </div>
          <div className="h-64 p-4 bg-slate-50 flex flex-col justify-end">
            <div className="p-3 bg-emerald-100 text-emerald-900 rounded-2xl text-sm mb-4">Namaste! Main Riley hoon. Startly Innovations ki AI sahayak.</div>
            <div className="flex gap-2">
              <input type="text" className="flex-1 p-2 rounded-lg text-sm border outline-none" placeholder="Ask Riley..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} />
              <button onClick={handleSendMessage} className="text-emerald-700"><Send size={20}/></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;