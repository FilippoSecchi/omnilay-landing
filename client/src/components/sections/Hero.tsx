import { motion } from "framer-motion";
import homeData from "@/mock-data/home.json";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";

export function Hero() {
  const { hero } = homeData;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black text-white pt-20">
      <ParticleBackground />
      
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
        
        {/* Left: Tagline */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 hidden lg:block self-start pt-20"
        >
          <p className="text-sm font-medium text-neutral-400 whitespace-pre-line leading-relaxed">
            {hero.tagline}
          </p>
        </motion.div>

        {/* Center: Main Content */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] mb-8"
          >
            {hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              {hero.highlightedTitle}
            </span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8 items-start mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl text-white font-medium mb-2">{hero.description}</p>
              <p className="text-neutral-500 text-sm max-w-xs leading-relaxed mb-6">
                {hero.subDescription}
              </p>
              
              <div className="flex items-center space-x-4">
                 <div className="h-px w-12 bg-neutral-700" />
                 <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md h-10 px-6 font-medium">
                  <Terminal className="w-4 h-4 mr-2" />
                  {hero.cta}
                 </Button>
              </div>
            </motion.div>

            {/* Stats Row Mobile/Desktop */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="flex flex-col sm:flex-row gap-8 mt-4 md:mt-0"
            >
               {hero.stats.map((stat, idx) => (
                 <div key={idx}>
                   <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-1">{stat.value}</div>
                   <div className="text-white text-sm font-medium">{stat.label}</div>
                   <div className="text-neutral-600 text-xs">{stat.subLabel}</div>
                 </div>
               ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Floating Card */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="lg:col-span-2 hidden lg:flex flex-col justify-center relative"
        >
           <div className="relative group cursor-pointer">
             <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-4 rounded-xl relative z-10 w-64 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-mono text-neutral-400">Cerebrum</div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="space-y-2 mb-4">
                   <div className="h-1 w-full bg-neutral-800 rounded overflow-hidden">
                     <div className="h-full w-2/3 bg-indigo-500" />
                   </div>
                   <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                      <span>Logic Forge</span>
                      <span>Active</span>
                   </div>
                </div>
                
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                   <div>
                      <div className="text-xs text-white font-medium">{hero.sidebarCard.title}</div>
                      <div className="text-[10px] text-neutral-500">{hero.sidebarCard.subtitle}</div>
                   </div>
                   <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
