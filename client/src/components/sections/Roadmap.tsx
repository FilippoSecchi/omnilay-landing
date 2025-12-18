import { motion } from "framer-motion";
import homeData from "@/mock-data/home.json";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Roadmap() {
  const { roadmap } = homeData;

  return (
    <section id="roadmap" className="py-32 bg-neutral-950 text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-medium tracking-tighter text-neutral-400 mb-16"
           >
             {roadmap.title}
           </motion.h2>

           <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
              <div className="md:col-span-2">
                 <div className="text-xl font-mono text-white mb-2">{roadmap.number}</div>
                 <div className="text-sm text-neutral-500">{roadmap.label}</div>
              </div>
              <div className="md:col-span-6">
                 <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-8">
                   {roadmap.description}
                 </h3>
              </div>
              <div className="md:col-span-4">
                 <p className="text-neutral-500 text-sm leading-relaxed max-w-sm ml-auto">
                   {roadmap.subDescription}
                 </p>
              </div>
           </div>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-12 border-t border-white/10 min-h-[600px]">
           
           {/* Left Visual Area */}
           <div className="md:col-span-4 border-r border-white/10 relative overflow-hidden bg-black">
              {/* Particle Burst Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-64 h-64">
                    <div className="absolute inset-0 bg-white rounded-full blur-[100px] opacity-10" />
                    <div className="absolute inset-0 border border-white/20 rounded-full animate-ping" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.5)]" />
                    
                    {/* Rays */}
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-gradient-to-r from-white/50 to-transparent origin-left"
                        style={{ transform: `translateY(-50%) rotate(${i * 30}deg)` }} 
                      />
                    ))}
                 </div>
              </div>
              
              {/* Progress Bar */}
              <div className="absolute bottom-8 left-8 flex space-x-1">
                 {[...Array(10)].map((_, i) => (
                   <div key={i} className={cn("w-1 h-4 rounded-full", i < 2 ? "bg-[#6366f1]" : "bg-neutral-800")} />
                 ))}
              </div>
           </div>

           {/* Right Content Area */}
           <div className="md:col-span-8 flex flex-col">
              
              {/* Top Controls */}
              <div className="h-32 border-b border-white/10 flex items-center justify-between px-12">
                 <div className="flex items-center space-x-4">
                    <span className="text-neutral-500">Deploy logic, not code.</span>
                    <div className="flex space-x-1">
                       <div className="w-8 h-2 bg-[#6366f1] rounded-full" />
                       <div className="w-2 h-2 bg-neutral-700 rounded-full" />
                       <div className="w-2 h-2 bg-neutral-700 rounded-full" />
                    </div>
                 </div>
                 <div className="flex space-x-6 text-[#6366f1]">
                    <ArrowLeft className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
                    <ArrowRight className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
                 </div>
              </div>

              {/* Main Stage Content */}
              <div className="flex-1 p-12 flex flex-col justify-center">
                 <h3 className="text-4xl font-medium text-white mb-8">
                   {roadmap.stages[1].phase}
                 </h3>
                 <p className="text-neutral-400 leading-relaxed max-w-2xl mb-12 text-lg">
                   {roadmap.stages[1].description}
                 </p>
                 
                 <div className="mt-auto flex items-end justify-between">
                    <div>
                       <div className="text-5xl font-light text-neutral-500 mb-2">
                         {roadmap.stages[1].timing}
                       </div>
                       <div className="text-neutral-600 text-sm">
                         {roadmap.stages[1].subTiming}
                       </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-4">
                       <button className="bg-[#6366f1] text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-indigo-600 transition-colors">
                          <Check className="w-4 h-4 bg-white text-[#6366f1] rounded-full p-0.5" />
                          <span>{roadmap.stages[1].cta}</span>
                       </button>
                       <p className="text-xs text-neutral-500 max-w-[150px] text-right">
                         See how Exyra progresses from execution to full autonomy.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
