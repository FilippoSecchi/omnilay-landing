import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Core } from "@/components/sections/Core";
import { ExecutionTiers } from "@/components/sections/ExecutionTiers";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Roadmap } from "@/components/sections/Roadmap";
import { Stack } from "@/components/sections/Stack";
import { SystemMonitor } from "@/components/sections/SystemMonitor";

export function FooterSection() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 border-b border-white/10 pb-24">
           {/* Brand */}
           <div className="md:col-span-3 border-r border-white/10 pr-8">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-8">
                 <div className="w-10 h-10 border border-white/40 rounded-full transform rotate-45" />
              </div>
              <p className="text-xl font-medium text-neutral-400 max-w-xs leading-relaxed">
                The fastest way to launch, operate and scale agents.
              </p>
           </div>

           {/* Big Logo */}
           <div className="md:col-span-5 border-r border-white/10 px-8 flex flex-col justify-between relative overflow-hidden">
              <div 
                className="relative z-10 text-[120px] font-medium tracking-tighter leading-none text-white opacity-80 cursor-pointer pointer-events-auto"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                omnilay
              </div>
              <div className="space-y-1 text-xs text-neutral-500 mt-8">
                 <div>Available Worldwide</div>
                 <div>Cloud-native by design</div>
                 <div>Backed by autonomous systems</div>
              </div>

              {/* Particle dust effect overlay */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
           </div>

           {/* Newsletter */}
           <div className="md:col-span-4 pl-8">
              <h3 className="text-xl text-white mb-2">Get the latest from Exyra</h3>
              <p className="text-xs text-neutral-500 mb-8">
                Stay in sync with launches, features and updates. <span className="text-[#6366f1]">*</span>
              </p>
              
              <div className="space-y-4">
                 <input 
                   type="text" 
                   placeholder="Your Name" 
                   className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6366f1] transition-colors"
                 />
                 <div className="flex space-x-2">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="flex-1 bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6366f1] transition-colors"
                    />
                    <button className="bg-[#6366f1] text-white px-4 rounded-lg hover:bg-indigo-600 transition-colors">
                       →
                    </button>
                 </div>
              </div>

              <div className="mt-8 text-[10px] text-neutral-600">
                 By submitting, you agree to our <span className="text-[#6366f1] underline cursor-pointer">Terms & Service</span>.
                 <br /><br />
                 <span className="text-[#6366f1]">*</span> No noise. Only valuable signals.
              </div>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-8 py-12 border-b border-white/10">
           {/* Col 1 - Nav */}
           <div className="space-y-3">
              <div className="w-4 h-1 bg-[#6366f1] mb-6" />
              {['Home', 'Modular Stack', 'Core Capabilities', 'Roadmap', 'AI System Monitor', 'Execution Tiers', 'FAQ'].map(item => (
                <div key={item} className="text-sm text-white hover:text-[#6366f1] cursor-pointer transition-colors">{item}</div>
              ))}
           </div>

           {/* Col 2 - Resources */}
           <div className="space-y-3">
              <div className="w-4 h-1 bg-[#6366f1] mb-6 opacity-0" />
              {['Cerebrum v1.0', 'Litepaper', 'Pitch Deck', 'KYC', 'Terms & Service', 'Privacy Policy', 'IQ.wiki'].map(item => (
                 <div key={item} className="text-sm text-neutral-400 hover:text-white cursor-pointer transition-colors">{item}</div>
              ))}
           </div>
           
           {/* Col 3 & 4 - Empty for spacing or future links */}
           <div className="md:col-span-2"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 text-[10px] text-neutral-600">
           <div className="flex flex-col space-y-2">
              <div>© 2025 Exyra. All right reserved.</div>
              <div className="flex items-center space-x-1">
                 <span>✦</span> <span>designed by exyra</span>
              </div>
           </div>

           <div className="max-w-md text-center md:text-left my-4 md:my-0">
             Exyra is an execution-first AI infrastructure layer, purpose-built for decentralized orchestration and modular autonomy
           </div>

           <div className="flex space-x-6">
              {/* Social Icons Placeholder */}
              {['X', 'Tel', 'Dis', 'Git', 'Med', 'Sub'].map((icon, i) => (
                 <span key={i} className="hover:text-white cursor-pointer transition-colors">
                   {icon === 'X' ? '𝕏' : '○'}
                 </span>
              ))}
           </div>
           
           <button className="bg-neutral-900 p-3 rounded-lg hover:bg-neutral-800 transition-colors">
              ↑
           </button>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Core />
        <Roadmap />
        <SystemMonitor />
        <ExecutionTiers />
        <FAQ />
      </main>
      <FooterSection />
    </div>
  );
}
