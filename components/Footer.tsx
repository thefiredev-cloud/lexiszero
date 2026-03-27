export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-violet/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-violet mb-4">Lexis Zero</h3>
            <p className="text-text-secondary">
              Legal Intelligence, Zero Billable Hours
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Get Started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a 
                  href="https://thefiredev.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  The Fire Dev LLC
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/thefiredev-cloud/lexiszero" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-violet/20 text-center text-text-secondary">
          <p>Built by <a href="https://thefiredev.com" target="_blank" rel="noopener noreferrer" className="text-violet hover:text-violet/80 transition-colors">The Fire Dev LLC</a></p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Lexis Zero. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
