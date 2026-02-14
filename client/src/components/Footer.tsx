import { Leaf, Heart, Recycle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">P</div>
              <span className="font-display font-bold text-xl">Prawali</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming waste into wonder. Building a sustainable future one step at a time through innovation and community action.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#vision" className="hover:text-primary">Our Vision</a></li>
              <li><a href="#product" className="hover:text-primary">Products</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@prawali.com</li>
              <li>+91 987 654 3210</li>
              <li>Punjab, India</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Impact</h4>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-2 rounded-full text-primary mb-1">
                  <Leaf size={20} />
                </div>
                <span className="text-xs text-muted-foreground">Eco</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-accent/10 p-2 rounded-full text-accent">
                  <Heart size={20} />
                </div>
                <span className="text-xs text-muted-foreground">Care</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-500/10 p-2 rounded-full text-blue-500">
                  <Recycle size={20} />
                </div>
                <span className="text-xs text-muted-foreground">Cycle</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prawali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
