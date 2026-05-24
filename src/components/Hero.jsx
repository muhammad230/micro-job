export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Find Help for Any Task,{' '}
          <span className="text-yellow-300">Anytime, Anywhere</span>
        </h1>

        {/* Subheadline */}
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Connect with skilled workers for quick jobs. Post your task and get it done in minutes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 text-base">
            Get Started
            <span>→</span>
          </button>
          <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors text-base">
            Sign In
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-blue-500 rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">10,000+</div>
            <div className="text-blue-200 text-sm">Active Users</div>
          </div>
          <div className="bg-blue-500 rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">50,000+</div>
            <div className="text-blue-200 text-sm">Jobs Completed</div>
          </div>
          <div className="bg-blue-500 rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">4.9/5</div>
            <div className="text-blue-200 text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
