import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneCall, Leaf, Sprout } from "lucide-react"; 
import { Button } from "@/components/ui/button";

// हमने इंटरनेट की फोटो इस्तेमाल की है ताकि 'Path Error' न आए
const product1 = "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-20 text-center">
        <h1 className="text-5xl font-black text-[#1a3c34] mb-4">From Parali to Pride.</h1>
        <p className="text-[#eab308] font-bold mb-12 uppercase tracking-widest">Powered by Startly Innovations™ Technology</p>
        
        <div id="product" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          <div className="bg-white rounded-3xl shadow-lg p-4 border hover:shadow-2xl transition-all">
            <img src={product1} alt="Rice Husk Plate" className="rounded-2xl mb-4 h-48 w-full object-cover" />
            <h3 className="font-bold text-[#1a3c34]">Rice Husk Dinner Plate</h3>
            <div className="flex justify-between items-center mt-4 pt-2 border-t">
              <span className="font-bold text-[#065f46]">₹199</span>
              <Button size="sm" className="bg-[#1a3c34] rounded-full px-6">Buy</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}