import { motion } from "framer-motion";
import homeData from "@/mock-data/home.json";
import { Activity, Battery, CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function SystemMonitor() {
  const { monitor } = homeData;

  return (
    <section id="monitor" className="py-32 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-medium tracking-tighter text-neutral-400 mb-16"
           >
             {monitor.title}
           </motion.h2>

           <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
              <div className="md:col-span-2">
                 <div className="text-xl font-mono text-white mb-2">{monitor.number}</div>
                 <div className="text-sm text-neutral-500">{monitor.label}</div>
              </div>
              <div className="md:col-span-6">
                 <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-8">
                   {monitor.description}
                 </h3>
              </div>
              <div className="md:col-span-4">
                 <p className="text-neutral-500 text-sm leading-relaxed max-w-sm ml-auto">
                   {monitor.subDescription}
                 </p>
              </div>
           </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 auto-rows-[320px] bg-neutral-900 border border-neutral-900">
           
           {/* Cerebrum Visual - Large */}
           <div className="md:col-span-1 md:row-span-1 bg-[#6366f1] p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              <div className="relative z-10 flex justify-between text-white/60 text-xs">
                 <span>{monitor.cerebrum.title}</span>
              </div>
              
              {/* Abstract 3D shape placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-48 h-48 border-[12px] border-black rounded-full transform rotate-45 scale-y-50" />
                 <div className="absolute w-48 h-48 border-[12px] border-black rounded-full transform -rotate-45 scale-y-50" />
                 <div className="absolute w-40 h-40 border-[8px] border-black rounded-full" />
              </div>

              <div className="relative z-10 text-2xl font-medium text-white/50">{monitor.cerebrum.tag}</div>
           </div>

           {/* Agent Network Status */}
           <div className="bg-neutral-900 p-8 flex flex-col items-center justify-center relative border-r border-b border-black">
              <h4 className="text-lg text-white mb-2">{monitor.network.title}</h4>
              <p className="text-xs text-neutral-500 mb-8">{monitor.network.subtitle}</p>
              
              {/* Pie Chart Representation */}
              <div className="w-32 h-32 rounded-full border-[16px] border-[#6366f1] relative mb-8">
                 <div className="absolute inset-0 border-[16px] border-neutral-700 rounded-full clip-path-half transform rotate-45" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-neutral-900 rounded-full" />
                 </div>
              </div>

              <div className="flex w-full justify-between px-4">
                 {monitor.network.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                       <div className="text-xl font-bold text-white">{stat.value}</div>
                       <div className="text-[10px] text-neutral-500 uppercase flex items-center justify-center gap-1">
                          <div className={cn("w-1.5 h-1.5 rounded-full", i === 0 ? "bg-[#6366f1]" : "bg-neutral-600")} />
                          {stat.label}
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Multi-Zone Agent Status */}
           <div className="md:col-span-2 bg-neutral-900 p-8 flex flex-col justify-between border-b border-black">
              <div className="flex justify-between items-start">
                 {monitor.zones.locations.map((loc, i) => (
                   <div key={i} className="text-center w-1/3">
                      <div className="text-white font-medium mb-1">{loc.city}</div>
                      <div className="text-[10px] text-neutral-600 mb-6">{loc.zone}</div>
                      
                      {/* Clock Visual */}
                      <div className="w-16 h-16 rounded-full border border-neutral-800 mx-auto mb-4 relative bg-black/20">
                         <div className="absolute top-1/2 left-1/2 w-1/2 h-[1px] bg-neutral-600 origin-left transform -rotate-45" />
                         <div className="absolute top-1/2 left-1/2 w-1/3 h-[1px] bg-[#6366f1] origin-left transform -rotate-12" />
                      </div>
                      
                      <div className="text-xs text-white mb-1">{loc.status}</div>
                      <div className="text-[10px] text-neutral-600">{loc.detail}</div>
                   </div>
                 ))}
              </div>
              <div className="text-center mt-8">
                 <div className="inline-block px-3 py-1 rounded-full border border-neutral-800 text-[10px] text-neutral-500 uppercase tracking-widest">
                    Autonomous Coordination Layer
                 </div>
                 <h4 className="text-lg text-white mt-4">{monitor.zones.title}</h4>
              </div>
           </div>

           {/* Pulse Window */}
           <div className="bg-neutral-900 p-6 flex flex-col justify-between border-r border-black">
              <div className="flex items-end justify-between h-24 gap-1">
                 {[...Array(20)].map((_, i) => (
                   <div 
                     key={i} 
                     className="bg-[#6366f1] w-full rounded-t-sm"
                     style={{ height: `${30 + Math.random() * 70}%`, opacity: 0.5 + Math.random() * 0.5 }} 
                   />
                 ))}
              </div>
              <div className="text-xs text-neutral-500 mb-8">Agent Pulse Window</div>
              
              <div>
                 <div className="text-5xl font-light text-white mb-1">{monitor.bottom.uptime}</div>
                 <div className="text-sm text-neutral-500">Uptime</div>
              </div>
           </div>

           {/* Agent Output */}
           <div className="bg-neutral-900 p-6 flex flex-col items-center justify-center border-r border-black">
              <h4 className="text-white mb-2">Agent Output</h4>
              <p className="text-xs text-neutral-500 mb-8">Orchestration vs. fallback execution</p>
              
              {/* Line Chart Placeholder */}
              <div className="w-full h-32 relative mb-6">
                 <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                    <path d="M0 40 Q 20 30, 40 10 T 80 20 T 100 5" fill="none" stroke="#6366f1" strokeWidth="2" />
                    <path d="M0 45 Q 20 40, 40 25 T 80 35 T 100 20" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
                 </svg>
              </div>

              <div className="flex w-full justify-around">
                 <div className="text-center">
                    <div className="text-xl font-bold text-white">{monitor.bottom.agentOutput.optimized}</div>
                    <div className="text-[10px] text-neutral-500 flex items-center justify-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" /> Optimized
                    </div>
                 </div>
                 <div className="text-center">
                    <div className="text-xl font-bold text-white">{monitor.bottom.agentOutput.standard}</div>
                    <div className="text-[10px] text-neutral-500 flex items-center justify-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-white" /> Standard
                    </div>
                 </div>
              </div>
           </div>

           {/* Autonomy Maturity */}
           <div className="md:col-span-1 bg-neutral-900 p-6 flex flex-col border-r border-black">
               <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white">Autonomy Maturity</h4>
                  <div className="text-right">
                     <div className="text-[10px] text-neutral-500">Evolution Score</div>
                     <div className="text-xl text-[#6366f1]">{monitor.bottom.maturity.score}</div>
                  </div>
               </div>
               <p className="text-xs text-neutral-500 mb-8">Agent infrastructure evolution score</p>

               <div className="flex items-end justify-between h-full gap-2">
                  {[38, 79, 92, 84, 98].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end group">
                       <div 
                         className="bg-[#6366f1] w-full rounded-t-sm transition-all duration-500 relative group-hover:bg-indigo-500"
                         style={{ height: `${val}%` }}
                       >
                         <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-white font-medium">{val}%</div>
                       </div>
                       <div className="text-[8px] text-neutral-500 text-center mt-2 leading-tight">
                         {["Agent Onboarding", "Resource Utilization", "Threat Resilience", "Load Elasticity", "Runtime Stability"][i]}
                       </div>
                    </div>
                  ))}
               </div>
           </div>

           {/* Right Mini Cards */}
           <div className="bg-neutral-900 flex flex-col border-black">
               <div className="flex-1 p-6 border-b border-black flex flex-col items-center justify-center">
                   <div className="text-[10px] text-neutral-500 mb-4">{monitor.bottom.core.version}</div>
                   <Battery className="w-8 h-8 text-[#6366f1] mb-2" />
                   <div className="text-2xl text-white">{monitor.bottom.core.battery}</div>
               </div>
               <div className="flex-1 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                   <div className="text-[10px] text-neutral-500 text-center mb-4">Cross-Layer DeFi Execution</div>
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
               </div>
           </div>

        </div>

        {/* Footer */}
        <div className="grid grid-cols-4 border-t border-black bg-black py-4 text-[10px] text-neutral-500 uppercase tracking-widest text-center">
           <div className="hover:text-white transition-colors cursor-pointer">Log Output</div>
           <div className="hover:text-white transition-colors cursor-pointer">Agents, Not Scripts</div>
           <div className="hover:text-white transition-colors cursor-pointer">Zero Manual Ops</div>
           <div className="hover:text-white transition-colors cursor-pointer">Self-Operating Logic</div>
        </div>
      </div>
    </section>
  );
}
