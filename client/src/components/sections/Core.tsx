import { motion } from "framer-motion";
import homeData from "@/mock-data/home.json";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Core() {
  const { core } = homeData;

  return (
    <section id="core" className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-medium tracking-tighter text-neutral-400 mb-16"
           >
             {core.title}
           </motion.h2>

           <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
              <div className="md:col-span-2">
                 <div className="text-xl font-mono text-white mb-2">{core.number}</div>
                 <div className="text-sm text-neutral-500">{core.label}</div>
              </div>
              <div className="md:col-span-6">
                 <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-8">
                   {core.description}
                 </h3>
              </div>
              <div className="md:col-span-4">
                 <p className="text-neutral-500 text-sm leading-relaxed max-w-sm ml-auto">
                   {core.subDescription}
                 </p>
              </div>
           </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 h-[600px] border-t border-white/10">
           
           {/* Active Card (01) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-[#6366f1] p-8 flex flex-col relative group overflow-hidden border-r border-white/10"
           >
              <div className="flex items-start justify-between mb-8">
                 <ArrowUpRight className="w-6 h-6 text-white" />
                 <span className="text-6xl font-light text-white/20">01</span>
              </div>
              
              <h3 className="text-2xl font-medium text-white mb-4">{core.services[0].title}</h3>
              <p className="text-sm text-indigo-100/80 leading-relaxed mb-8">
                {core.services[0].description}
              </p>

              <div className="mt-auto relative w-full aspect-square rounded-lg overflow-hidden bg-black/20">
                 {/* Placeholder for crystal sphere */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
                 </div>
              </div>

              <div className="mt-8 flex items-center space-x-2">
                 <div className="w-4 h-4 text-white">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                 </div>
                 <span className="text-xs uppercase font-medium tracking-wider text-white">{core.services[0].tag}</span>
              </div>
           </motion.div>

           {/* Inactive Columns */}
           {core.services.slice(1).map((service, idx) => (
             <div key={idx} className="border-r border-white/10 p-8 flex flex-col text-neutral-600 hover:bg-neutral-900/30 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between mb-8">
                   <span className="opacity-0 group-hover:opacity-100 transition-opacity">↓</span>
                   <span className="text-2xl font-light opacity-50">{service.id}</span>
                </div>
                <h3 className="text-xl font-medium opacity-50 group-hover:opacity-100 group-hover:text-white transition-all">{service.title}</h3>
             </div>
           ))}

           {/* Description Column */}
           <div className="border-r border-white/10 p-8 flex flex-col justify-between bg-neutral-900/20">
              <div className="text-xs text-neutral-500 border-b border-white/10 pb-4 mb-4 flex justify-between">
                <span>Core Services</span>
                <span>4/4</span>
              </div>
              
              <div className="mt-auto">
                 <h3 className="text-3xl font-medium text-white mb-6 leading-tight">
                   {core.summary.title}
                 </h3>
                 <p className="text-sm text-neutral-500 leading-relaxed mb-12">
                   {core.summary.description}
                 </p>
                 
                 {/* Dot Grid */}
                 <div className="grid grid-cols-6 gap-4 mb-8">
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className={cn("w-1 h-1 rounded-full", i === 7 ? "bg-[#6366f1]" : "bg-neutral-800")} />
                    ))}
                 </div>
                 
                 <div className="flex items-center space-x-2 text-neutral-500 text-xs">
                    <span className="w-px h-3 bg-[#6366f1]" />
                    <span>{core.summary.footer}</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex justify-end mt-8">
           <button className="flex items-center space-x-4 px-6 py-3 bg-[#6366f1] rounded-full text-white hover:bg-indigo-600 transition-colors">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </section>
  );
}
