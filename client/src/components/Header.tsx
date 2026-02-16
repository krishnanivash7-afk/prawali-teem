import logo from "@assets/WhatsApp_Image_2026-02-13_at_6.45.15_PM_1771072217382.jpeg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react"; 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/40 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> 
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-105">
            <img src={logo} alt="Prawali Logo" className="h-12 w-auto drop-shadow-sm" />
            <div className="flex flex-col">
               <span className="font-display font-bold text-2xl text-[#1a3c34] tracking-tight leading-none">
                Prawali
              </span>
              <span className="text-[10px] font-medium text-[#eab308] tracking-widest uppercase">
                From Waste to Wonder
              </span>
            </div>
          </Link>

          {/* Desktop Nav - ADMIN BUTTON REMOVED */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm font-bold text-slate-600 hover:text-[#065f46] transition-colors relative group">
              Our Vision
            </a>
            <a href="#product" className="text-sm font-bold text-slate-600 hover:text-[#065f46] transition-colors relative group">
              Products
            </a>
            <a href="#contact" className="text-sm font-bold text-slate-600 hover:text-[#065f46] transition-colors relative group">
              Contact
            </a>
            
            {/* Call to Action Button */}
            <Button 
              className="bg-[#065f46] hover:bg-[#044e3a] text-white rounded-full px-6 shadow-md transition-transform hover:scale-105"
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ShoppingCart size={18} className="mr-2"/> Shop Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - ADMIN LINK REMOVED */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border shadow-lg"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              <a href="#vision" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 hover:text-[#065f46]">Our Vision</a>
              <a href="#product" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 hover:text-[#065f46]">Products</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 hover:text-[#065f46]">Contact Us</a>
              
              <Button 
                className="w-full bg-[#065f46] text-white mt-4"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Shop Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}