export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-violet">Lexis Zero</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-text-secondary hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-text-secondary hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#contact" className="text-text-secondary hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <div>
            <a 
              href="#contact" 
              className="bg-violet hover:bg-violet/90 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
