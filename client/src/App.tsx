import React from 'react';
import { ShoppingCart, Users, MessageSquare, Leaf, ShieldCheck, Truck } from 'lucide-react';

// आपके प्रोडक्ट्स का डेटा (फोटो के नाम वही हैं जो आपने भेजे थे)
const products = [
  { id: 1, name: "Rice Husk Plate", price: "199", img: "/assets/plate.png.jpeg" },
  { id: 2, name: "Eco Tumbler", price: "299", img: "/assets/tumbler.png.jpeg" },
  { id: 3, name: "Artisan Coffee Cup", price: "149", img: "/assets/coffee-cup.png.jpeg" },
  { id: 4, name: "Sustainable Container", price: "249", img: "/assets/container.png.jpeg" }
];

// टीम का डेटा (इसे आप बाद में बदल सकते हैं)
const team = [
  { name: "Krishna", role: "Founder & AI Lead", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Krishna" },
  { name: "Riley", role: "AI Assistant", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Riley" }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-panel py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gradient">PRAWALI</h1>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#products" className="hover:text-primary transition">Products</a>
          <a href="#team" className="hover:text-primary transition">Team</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
        <button className="premium-buy-btn !w-auto !py-2 !px-6 flex gap-2 items-center">
          <ShoppingCart size={18} /> Shop Now
        </button>
      </nav>

      {/* 2. Hero Section with Video Background */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">From Parali to Pride.</h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8">Premium Sustainable Tableware by Startly Innovations™</p>
          <a href="#products" className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition shadow-2xl">
            Explore Collection
          </a>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </header>

      {/* 3. Product Grid (Side-by-Side) */}
      <section id="products" className="py-20 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-950 mb-4">Our Premium Collection</h2>
            <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
          </div>
          
          <div className="product-grid-wrapper">
            {products.map((p) => (
              <div key={p.id} className="premium-card">
                <img src={p.img} alt={p.name} />
                <h3 className="text-xl font-bold text-emerald-900">{p.name}</h3>
                <p className="text-emerald-700 font-bold text-lg my-2">₹{p.price}</p>
                <button className="premium-buy-btn">Order Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team Page Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-emerald-950 mb-12">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-100 mb-4 group-hover:border-emerald-500 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-emerald-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Simple Footer */}
      <footer className="bg-emerald-950 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4">Prawali</h3>
            <p className="opacity-70">Transforming agricultural waste into premium luxury essentials.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="opacity-70 space-y-2">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Collection</a></li>
              <li><a href="#team">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="opacity-70">Email: team@startlyinnovations.com</p>
            <p className="opacity-70">Patna, Bihar, India</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center opacity-50 text-sm">
          © 2026 Prawali. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;