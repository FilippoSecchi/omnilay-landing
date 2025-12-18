import { motion } from "framer-motion";
import homeData from "@/mock-data/home.json";
import { ArrowRight, Plus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FAQ() {
  const { faq } = homeData;

  return (
    <section id="faq" className="py-32 bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-medium tracking-tighter text-neutral-400 mb-16"
           >
             {faq.title}
           </motion.h2>

           <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
              <div className="md:col-span-2">
                 <div className="text-xl font-mono text-white mb-2">{faq.number}</div>
                 <div className="text-sm text-neutral-500">{faq.label}</div>
              </div>
              <div className="md:col-span-6">
                 <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-8">
                   {faq.description}
                 </h3>
              </div>
              <div className="md:col-span-4">
                 <p className="text-neutral-500 text-sm leading-relaxed max-w-sm ml-auto">
                   {faq.subDescription}
                 </p>
              </div>
           </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-1 border-t border-white/10 bg-white/5">
           
           {/* FAQ List */}
           <div className="md:col-span-7 bg-black">
              {faq.questions.map((q, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 border-b border-white/10 hover:bg-neutral-900/30 transition-colors cursor-pointer group">
                   <span className="text-neutral-400 group-hover:text-white transition-colors">{q}</span>
                   <div className="flex space-x-1">
                      <div className="w-8 h-px bg-[#6366f1]" />
                      <div className="w-8 h-px bg-[#6366f1]" />
                   </div>
                </div>
              ))}
           </div>

           {/* Contact / Form Area */}
           <div className="md:col-span-5 bg-black flex flex-col">
              
              {/* Image / Team Area */}
              <div className="h-[400px] relative overflow-hidden bg-neutral-900 group">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                   alt="Team" 
                   className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                 
                 <div className="absolute bottom-8 right-8">
                    <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                       <span className="text-[8px] uppercase tracking-widest text-white transform -rotate-90">You Scale Intelligence</span>
                    </div>
                 </div>
              </div>

              {/* Form */}
              <div className="flex-1 p-12 bg-neutral-900/20">
                 <h3 className="text-3xl font-medium text-white mb-4">{faq.footer.title}</h3>
                 <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
                   {faq.footer.description}
                 </p>

                 <div className="flex items-center space-x-4">
                    <span className="text-white text-sm">{faq.footer.cta}</span>
                    <Button size="icon" className="rounded-lg bg-[#6366f1] hover:bg-indigo-600">
                       <ArrowRight className="w-4 h-4" />
                    </Button>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}
