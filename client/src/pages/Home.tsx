import product1 from "@assets/WhatsApp_Image_2026-02-1_1771072165821.jpeg";
import product2 from "@assets/WhatsApp_Image_2026-02-13_at_6.45.12_PM_1771072177929.jpeg";
import product3 from "@assets/WhatsApp_Image_2026-02-13_at_6.45.13_PM_1771072190940.jpeg";
import product4 from "@assets/WhatsApp_Image_2026-02-13_at_6.45.14_PM_1771072200908.jpeg";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { ArrowRight, Leaf, Recycle, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const startRileyCall = () => {
    if (window.vapiSDK?.default) {
      const vapi = new window.vapiSDK.default("c19b7909-74f0-459f-a23c-ff4cf3d9cbe6");
      vapi.start("517b20fd-d5b4-40b6-a9f8-57f6d1580f1c");
    } else {
      console.error("Vapi SDK not loaded");
    }
  };

  const products = [
    {
      img: product1,
      title: "Premium Rice Husk Plate",
      desc: "Elegantly crafted from 100% natural rice husk"
    },
    {
      img: product2,
      title: "Natural Tea Container",
      desc: "Keep your beverages fresh and aromatic"
    },
    {
      img: product3,
      title: "Eco-Friendly Tumbler",
      desc: "Sleek design for sustainable hydration"
    },
    {
      img: product4,
      title: "Artisan Coffee Cups",
      desc: "The perfect sustainable morning companion"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 lg:py-40 bg-[#f8fafc]">
          <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#065f46] to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-8xl font-display font-extrabold leading-tight text-slate-900 mb-8 tracking-tighter">
                From <span className="text-[#065f46]">Waste</span> to <span className="text-[#065f46]/80">Wonder</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Transforming agricultural waste into premium eco-friendly tableware. Join us in our journey towards a sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  onClick={startRileyCall}
                  size="lg" 
                  className="rounded-full bg-[#065f46] hover:bg-[#044e3a] text-white shadow-xl text-xl px-10 h-16 font-bold transition-all hover:scale-105"
                >
                  Talk to AI Expert (Riley)
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="rounded-full border-2 border-[#065f46] text-[#065f46] hover:bg-[#065f46] hover:text-white text-xl px-10 h-16 font-bold transition-all hover:scale-105"
                >
                  <a href="#product">Explore Products</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 text-slate-900">Our Vision & Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Prawali is dedicated to reducing agricultural waste by repurposing rice husk into premium, durable, and biodegradable products. We focus on innovation and sustainability to create a better planet.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#065f46]/10 p-3 rounded-xl"><Recycle className="text-[#065f46]" /></div>
                    <div>
                      <h4 className="font-bold text-lg">Waste Reduction</h4>
                      <p className="text-slate-500">Transforming rice husk into valuable resources.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#065f46]/10 p-3 rounded-xl"><Leaf className="text-[#065f46]" /></div>
                    <div>
                      <h4 className="font-bold text-lg">Eco Innovation</h4>
                      <p className="text-slate-500">Leading the way in sustainable product design.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={product1} alt="Vision" className="w-full h-[600px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section id="product" className="py-32 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-slate-900">Premium Collection</h2>
              <div className="w-24 h-1 bg-[#065f46] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {products.map((product, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 transition-all"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-xl mb-2 text-slate-900">{product.title}</h3>
                    <p className="text-slate-500 text-sm mb-6">{product.desc}</p>
                    <Button className="w-full bg-[#065f46] hover:bg-[#044e3a] text-white rounded-xl py-6 font-bold shadow-lg shadow-[#065f46]/10 transition-transform active:scale-95">
                      Buy Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-slate-600 mb-12">Interested in our products or partnership? We'd love to hear from you.</p>
            <div className="bg-[#f8fafc] p-10 rounded-3xl border border-slate-100">
              <p className="text-2xl font-bold text-[#065f46] mb-2">info@prawali.com</p>
              <p className="text-slate-500">Operational in Punjab & Bihar, India</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}
