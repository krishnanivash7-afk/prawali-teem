import { useState } from "react";
import { MessageCircle, X, Mic, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LeadForm } from "./LeadForm";
import { useVapi } from "@/hooks/use-vapi";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { startCall, isSessionActive, stopCall } = useVapi();

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        
        {/* Vapi Voice Call Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="icon"
            className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
              isSessionActive 
                ? "bg-red-500 hover:bg-red-600 animate-pulse" 
                : "bg-white text-primary hover:bg-gray-50 border border-primary/20"
            }`}
            onClick={isSessionActive ? stopCall : startCall}
          >
            {isSessionActive ? (
              <PhoneCall className="h-6 w-6 text-white" />
            ) : (
              <Mic className="h-6 w-6" />
            )}
          </Button>
        </motion.div>

        {/* Chat Toggle Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
              <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Chat with us</h3>
                  <p className="text-xs opacity-90">We typically reply in a few minutes</p>
                </div>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="text-white hover:bg-white/20 h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-6 bg-secondary/10">
                <p className="text-sm text-muted-foreground mb-4">
                  Hi there! 👋 Fill out the form below and our team will get back to you about our sustainable solutions.
                </p>
                <LeadForm onSuccess={() => setTimeout(() => setIsOpen(false), 2000)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
