const features = [
  {
    icon: '⚡',
    bg: 'bg-blue-100',
    title: 'Fast & Easy',
    description: 'Get your task done quickly with our simple process',
  },
  {
    icon: '🛡️',
    bg: 'bg-green-100',
    title: 'Secure',
    description: 'Your payments are protected with secure transactions',
  },
  {
    icon: '💲',
    bg: 'bg-yellow-100',
    title: 'Affordable',
    description: 'Set your own budget and get competitive offers',
  },
  {
    icon: '⭐',
    bg: 'bg-purple-100',
    title: 'Rated Workers',
    description: 'Choose from verified workers with real reviews',
  },
]

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Why Choose MicroJobs?</h2>
          <p className="text-gray-600 text-lg">The best platform for quick tasks</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className={`w-16 h-16 ${f.bg} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
