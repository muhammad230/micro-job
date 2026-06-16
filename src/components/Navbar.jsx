export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            M
          </div>
          <span className="text-gray-900 font-semibold text-lg">MicroJobs</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Home</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Pricing</a>
          <a href="#login" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Login</a>
        </div>

        {/* CTA */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  )
}
