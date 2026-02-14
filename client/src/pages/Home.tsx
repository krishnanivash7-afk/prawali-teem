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
  const products = [
    {
      img: product1,
      title: "Eco-Friendly Plate",
      desc: "Sustainable tableware for every occasion"
    },
    {
      img: product2,
      title: "Tea Container",
      desc: "Keep your tea fresh naturally"
    },
    {
      img: product3,
      title: "Eco Tumbler",
      desc: "Durable and stylish hydration"
    },
    {
      img: product4,
      title: "Daily Use Cups",
      desc: "Perfect for your morning routine"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32 bg-secondary/20">
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  <Leaf className="h-4 w-4" />
                  <span>Sustainability First</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-foreground mb-6">
                  From <span className="text-primary">Waste</span> to <span className="text-accent">Wonder</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                  Prawali transforms agricultural waste into sustainable products. Join us in creating a cleaner, greener future for generations to come.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full eco-gradient text-white shadow-lg shadow-primary/20 text-lg px-8 h-12">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-2 text-lg px-8 h-12 bg-transparent">
                    Learn More
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white">
                  <img 
                    src={product1} 
                    alt="Sustainable Future" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-lg">Prawali Initiative</p>
                    <p className="text-white/80 text-sm">Punjab & Bihar</p>
                  </div>
                </div>
                
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Our Vision & Mission</h2>
              <p className="text-muted-foreground">
                We believe that waste is simply a resource in the wrong place. Our mission is to redirect agricultural byproducts into valuable, eco-friendly goods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Recycle className="h-8 w-8 text-primary" />,
                  title: "Waste Reduction",
                  desc: "Minimizing agricultural burning by repurposing stubble and organic waste."
                },
                {
                  icon: <Leaf className="h-8 w-8 text-accent" />,
                  title: "Eco Products",
                  desc: "Creating 100% biodegradable packaging and daily use items."
                },
                {
                  icon: <Droplets className="h-8 w-8 text-blue-500" />,
                  title: "Clean Water",
                  desc: "Ensuring our processing methods are water-efficient and non-polluting."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-secondary/20 border border-secondary hover:border-primary/30 transition-all duration-300"
                >
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section id="product" className="py-24 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Product Gallery</h2>
              <p className="text-muted-foreground">Explore our range of eco-friendly products crafted from agricultural waste.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">{product.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}
