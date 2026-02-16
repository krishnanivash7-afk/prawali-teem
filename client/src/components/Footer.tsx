import { Leaf, Heart, Recycle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">P</div>
              <span className="font-display font-bold text-xl">Prawali</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming waste into wonder. Building a sustainable future through innovation.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold text-primary">A unit of:</p>
              <p className="text-sm font-medium text-foreground">Startly Innovations Pvt. Ltd.</p>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#vision" className="hover:text-primary">Our Vision</a></li>
              <li><a href="#product" className="hover:text-primary">Products</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact & Legal Address Column (UPDATED) */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold text-foreground mb-4 text-[#065f46]">Corporate Details</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block font-bold text-foreground text-xs uppercase tracking-wider">Corporate Office</span>
                9th Floor, Biscomaun Tower,<br/> Patna - 800001
              </li>
              <li>
                <span className="block font-bold text-foreground text-xs uppercase tracking-wider mt-2">Registered Office</span>
                Motipur, Muzaffarpur,<br/> Bihar - 843111
              </li>
              <li className="pt-1">
                <span className="font-semibold text-foreground">Email: </span>
                Team@startlyinnovations.com
              </li>
            </ul>
          </div>

          {/* Impact Column */}
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
        
        {/* Bottom Copyright & GST Section (UPDATED) */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prawali. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            GSTIN: <span className="font-mono font-medium">10ABKCS8084N1ZS</span> | CIN: (Available on request)
          </p>
        </div>
      </div>
    </footer>
  );
}