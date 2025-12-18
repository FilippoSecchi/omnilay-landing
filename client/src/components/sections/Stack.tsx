import { motion } from "framer-motion";
import homeData from "@/mock-data/home.json";
import { ArrowRight, Box, Cpu, Fingerprint, Lock, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Stack() {
  const { stack } = homeData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "box": return <Box className="w-8 h-8 text-neutral-500" />;
      case "dial": return <Settings className="w-8 h-8 text-neutral-500" />;
      case "mesh": return <Cpu className="w-8 h-8 text-neutral-500" />;
      case "lock": return <Lock className="w-8 h-8 text-neutral-500" />;
      default: return <Box className="w-8 h-8 text-neutral-500" />;
    }
  };

  return (
    <section id="stack" className="py-32 bg-neutral-950 text-white relative overflow-hidden">
       <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-medium tracking-tighter text-neutral-400 mb-16"
           >
             {stack.title}
           </motion.h2>

           <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
              <div className="md:col-span-2">
                 <div className="text-xl font-mono text-white mb-2">{stack.number}</div>
                 <div className="text-sm text-neutral-500">{stack.label}</div>
              </div>
              <div className="md:col-span-6">
                 <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-8">
                   {stack.description}
                 </h3>
              </div>
              <div className="md:col-span-4">
                 <p className="text-neutral-500 text-sm leading-relaxed max-w-sm ml-auto">
                   {stack.subDescription}
                 </p>
              </div>
           </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
           
           {/* Cerebrum Card - Large */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="md:col-span-2 bg-black border border-white/10 rounded-xl p-8 relative overflow-hidden group"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-black z-0" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                 <div>
                    <div className="text-sm text-neutral-400 mb-2">Reasoning Engine</div>
                    <div className="text-3xl font-medium text-white">{stack.cerebrum.name}</div>
                 </div>
                 <div className="absolute right-0 bottom-0 w-[400px] h-[400px] opacity-30 translate-x-1/3 translate-y-1/3">
                    {/* Placeholder for Brain/Neural Graphic */}
                    <div className="w-full h-full rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-0 rounded-full border border-white/5 scale-75 animate-[spin_15s_linear_infinite_reverse]" />
                 </div>
              </div>
           </motion.div>

           {/* Modular Agent Suite - Blue Card */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-[#6366f1] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden"
           >
              <div className="flex justify-between items-center text-indigo-200 text-xs mb-8">
                 <span>{stack.suite.label}</span>
                 <span>{stack.suite.count}</span>
              </div>
              <div>
                 <h3 className="text-2xl font-medium text-white mb-4 leading-snug">
                   {stack.suite.title}
                 </h3>
                 <p className="text-indigo-100/80 text-xs leading-relaxed">
                   {stack.suite.description}
                 </p>
              </div>
           </motion.div>

           {/* Grid Items */}
           {stack.cards.map((card, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 + (idx * 0.1) }}
               className={cn(
                 "bg-black border border-white/10 rounded-xl p-6 flex flex-col justify-between group hover:border-white/20 transition-colors",
                 card.title === "Cerebrum v1.0" ? "md:col-span-1" : ""
               )}
             >
                {card.title === "Cerebrum v1.0" ? (
                  <>
                    <div className="space-y-4">
                      <h4 className="text-2xl font-medium text-white">{card.title}</h4>
                      <div className="text-indigo-400 text-xs">{card.badge}</div>
                      <div className="mt-4">
                        <div className="text-[10px] uppercase text-neutral-500 mb-1">Development Progress</div>
                        <div className="text-4xl font-mono text-neutral-300">{card.progress}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-neutral-400">{card.cta}</span>
                      <button className="w-10 h-10 rounded-lg bg-[#6366f1] flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                     <div className="flex justify-between items-start">
                        <h4 className="text-xl font-medium text-white">{card.title}</h4>
                        <div className="p-2">
                           <div className="grid grid-cols-2 gap-1 w-4">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-0.5 h-0.5 bg-neutral-600 rounded-full" />
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="mt-auto pt-12 flex justify-between items-end">
                        <div className="w-full h-32 relative">
                           {/* Abstract wireframe placeholder */}
                           <div className="absolute inset-0 border border-white/5 rounded opacity-50 transform rotate-12 scale-75 origin-bottom-left" />
                           <div className="absolute inset-0 border border-white/5 rounded opacity-30 transform -rotate-6 scale-90 origin-bottom-right" />
                        </div>
                        <button className="w-10 h-10 rounded-lg bg-[#6366f1] flex items-center justify-center text-white shrink-0 hover:bg-indigo-600 transition-colors">
                           <ArrowRight className="w-5 h-5" />
                        </button>
                     </div>
                  </>
                )}
             </motion.div>
           ))}
        </div>
       </div>
    </section>
  );
}
