import product1 from "@assets/WhatsApp_Image_2026-02-1_1771072165821.jpeg";
import product2 from "@assets/WhatsApp_Image_2026-02-13_at_6.45.12_PM_1771072177929.jpeg";
import product3 from "@assets/WhatsApp_Image_2026-02-13_at_6.45.13_PM_1771072190940.jpeg";
import product4 from "@assets/WhatsApp_Image_2026-02-13_at_6.45.14_PM_1771072200908.jpeg";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneCall, Leaf, Sprout } from "lucide-react"; // Icons added
import { Button } from "@/components/ui/button";

export default function Home() {
  const startRileyCall = () => {
    // Ye code direct Riley AI ko call lagayega
    if (window && (window as any).vapiSDK) {
      const vapi = new (window as any).vapiSDK.default(
        "c19b7909-74f0-459f-a23c-ff4cf3d9cbe6",
      );
      vapi.start("517b20fd-d5b4-40b6-a9f8-57f6d1580f1c");
    } else {
      alert("Riley AI load ho rahi hai, please refresh karein!");
    }
  };

  // Updated Product List with Prices & Better Descriptions
  const products = [
    {
      img: product1,
      title: "Rice Husk Dinner Plate",
      price: "₹199",
      desc: "Sturdy, washable, and 100% natural. Made from farm waste to save the air.",
    },
    {
      img: product2,
      title: "Eco-Storage Container",
      price: "₹249",
      desc: "Airtight & moisture-free. Keep your tea and spices fresh without plastic.",
    },
    {
      img: product3,
      title: "Earth Coffee Cup",
      price: "₹149",
      desc: "Heat resistant and unbreakable. Sip your coffee responsibly.",
    },
    {
      img: product4,
      title: "Sustainable Tumbler",
      price: "₹299",
      desc: "Your daily travel companion. Zero plastic, 100% style.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-16">
        
        {/* HERO SECTION - Focus on Prawali Brand */}
        <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black text-[#1a3c34] mb-6 leading-tight">
                From <span className="text-[#eab308]">Parali</span> <br/>
                to <span className="text-[#065f46]">Pride.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                We don't just sell products; we solve pollution. 
                **Prawali** transforms agricultural waste (Rice Husk) into 
                premium, unbreakable daily essentials.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="rounded-full bg-[#065f46] hover:bg-[#044e3a] text-white px-8 h-14 text-lg font-bold shadow-lg"
                >
                  Shop Now
                </Button>
                <Button
                  onClick={startRileyCall}
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#065f46] text-[#065f46] hover:bg-[#065f46]/10 px-8 h-14 text-lg font-bold"
                >
                  <PhoneCall className="mr-2 h-5 w-5" /> Talk to AI
                </Button>
              </div>
            </motion.div>

            {/* Hero Image Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
               <div className="absolute inset-0 bg-[#eab308]/20 rounded-full blur-3xl transform rotate-12 -z-10"></div>
               <img 
                 src={product1} 
                 alt="Rice Husk Plate" 
                 className="rounded-[40px] shadow-2xl w-full max-w-md mx-auto transform hover:-rotate-2 transition-transform duration-500"
               />
            </motion.div>
          </div>
        </section>

        {/* TECHNOLOGY SECTION - Startly vs Prawali */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#eab308] font-bold tracking-widest uppercase text-sm">Powered by Science</span>
              <h2 className="text-4xl font-bold text-[#1a3c34] mt-2">Startly Innovations™ Technology</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Box 1: Corn Tech */}
              <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all">
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
                  <Leaf size={28} />
                </div>
                <h4 className="text-2xl font-bold text-[#1a3c34] mb-3">Biodegradable Plastic</h4>
                <p className="text-slate-600 leading-relaxed">
                  Our parent company, **Startly Innovations**, creates bio-polymers using **Corn Starch**. 
                  Unlike regular plastic, our material completely decomposes in soil within just **180 Days**.
                </p>
              </div>

              {/* Box 2: Rice Husk Tech */}
              <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all">
                <div className="h-14 w-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-700">
                  <Sprout size={28} />
                </div>
                <h4 className="text-2xl font-bold text-[#1a3c34] mb-3">Rice Husk Upcycling</h4>
                <p className="text-slate-600 leading-relaxed">
                  **Prawali** focuses on the "Parali" problem. We collect rice husk directly from farmers 
                  (preventing smoke) and bind it into sturdy, heat-resistant products for your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section id="product" className="py-20 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#1a3c34]">
            Our Premium Collection
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            Sustainable luxury for your everyday life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-64 overflow-hidden bg-gray-50 relative">
                   <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#065f46]">
                    Eco-Friendly
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1 text-[#1a3c34]">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-xs mb-4 min-h-[40px]">
                    {p.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-xl font-bold text-[#065f46]">{p.price}</span>
                    <Button className="bg-[#1a3c34] hover:bg-[#065f46] rounded-full px-6 text-sm">
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}