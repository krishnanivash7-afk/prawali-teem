import logo from "@assets/WhatsApp_Image_2026-02-13_at_6.45.15_PM_1771072217382.jpeg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src={logo} alt="Prawali Logo" className="h-10 w-auto" />
            <span className="font-display font-bold text-2xl text-foreground tracking-tight">
              Prawali
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Our Vision</a>
            <a href="#product" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Products</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <Link href="/admin-prawali">
              <Button variant="ghost" className="text-sm font-medium">Admin</Button>
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md shadow-primary/20">
              Join Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col">
              <a href="#vision" onClick={() => setIsOpen(false)} className="text-base font-medium text-foreground">Our Vision</a>
              <a href="#product" onClick={() => setIsOpen(false)} className="text-base font-medium text-foreground">Products</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-base font-medium text-foreground">Contact</a>
              <Link href="/admin-prawali" onClick={() => setIsOpen(false)} className="text-base font-medium text-foreground">Admin Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
