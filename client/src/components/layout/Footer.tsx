export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-extrabold text-white mb-4">EXYRA</h2>
            <p className="text-neutral-400 max-w-sm">
              The world's first fully autonomous AI software engineer. 
              Building the future of software development, one commit at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors">Integration</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Exyra AI Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
