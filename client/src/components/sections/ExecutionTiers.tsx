import { motion } from "framer-motion";
import homeData from "@/mock-data/home.json";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExecutionTiers() {
  const { tiers } = homeData;

  return (
    <section id="tiers" className="py-32 bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-medium tracking-tighter text-neutral-400 mb-16"
           >
             {tiers.title}
           </motion.h2>

           <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
              <div className="md:col-span-2">
                 <div className="text-xl font-mono text-white mb-2">{tiers.number}</div>
                 <div className="text-sm text-neutral-500">{tiers.label}</div>
              </div>
              <div className="md:col-span-6">
                 <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-8">
                   {tiers.description}
                 </h3>
              </div>
              <div className="md:col-span-4">
                 <p className="text-neutral-500 text-sm leading-relaxed max-w-sm ml-auto">
                   {tiers.subDescription}
                 </p>
              </div>
           </div>
        </div>

        {/* Pricing Grid */}
        <div className="border border-white/10 rounded-xl overflow-hidden">
           {tiers.items.map((tier, idx) => (
             <div key={idx} className="grid md:grid-cols-12 border-b last:border-b-0 border-white/10 bg-neutral-900/10 hover:bg-neutral-900/30 transition-colors group">
                
                {/* Visual / Name */}
                <div className="md:col-span-3 p-8 border-r border-white/10 relative overflow-hidden">
                   <div className="relative z-10">
                      <h3 className={cn("text-xl font-medium mb-16", idx === 0 ? "text-[#6366f1]" : idx === 1 ? "text-white" : "text-[#6366f1]")}>
                        {tier.name}
                      </h3>
                      
                      {/* Cube Visual Placeholder */}
                      <div className="w-24 h-24 bg-gradient-to-br from-neutral-800 to-black border border-white/10 transform rotate-45 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                      
                      <p className="text-xs text-neutral-500 mt-16">
                        {idx === 0 ? "For minimal orchestration" : idx === 1 ? "For scaling autonomous fleets" : "For sovereign agent networks"}
                      </p>
                   </div>
                </div>

                {/* Price */}
                <div className="md:col-span-3 p-8 border-r border-white/10 flex flex-col justify-center items-center text-center">
                   <div className="text-xs text-neutral-500 mb-2">Price</div>
                   <div className="text-5xl font-medium text-white mb-1">{tier.price}</div>
                   <div className="text-xl text-neutral-400 mb-6">{tier.currency}</div>
                   
                   <div className="flex items-center space-x-2 text-xs text-neutral-500">
                      <span>Monthly</span>
                      <div className="w-8 h-4 bg-[#6366f1] rounded-full p-0.5">
                         <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      <span>Yearly</span>
                   </div>
                </div>

                {/* Plan Details */}
                <div className="md:col-span-3 p-8 border-r border-white/10 flex flex-col justify-center text-center">
                   <div className="text-xs text-neutral-500 mb-2">Plan</div>
                   <div className="text-lg text-white mb-8">{tier.plan}</div>
                   
                   <div className="border-t border-white/5 pt-8 w-full">
                      <div className="text-xs text-neutral-500 mb-2">Agent Capacity</div>
                      <div className="text-3xl font-medium text-white">{tier.capacity}</div>
                   </div>
                </div>

                {/* Features & Action */}
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                   <ul className="space-y-3 mb-8">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-center text-xs text-neutral-400">
                           <div className="w-1 h-1 bg-neutral-600 rounded-full mr-3" />
                           {feat}
                        </li>
                      ))}
                   </ul>

                   <button className="w-full py-3 rounded-lg bg-[#6366f1] text-white text-sm font-medium hover:bg-indigo-600 transition-colors flex items-center justify-center space-x-2">
                      <Check className="w-4 h-4" />
                      <span>Activate Tier</span>
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
