const steps = [
  {
    icon: '🔍',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    title: '1. Post Your Job',
    description: 'Describe your task, set your budget, and publish it in seconds.',
  },
  {
    icon: '👥',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500',
    title: '2. Get Offers',
    description: 'Skilled workers review your job and send their proposals.',
  },
  {
    icon: '✅',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500',
    title: '3. Job Complete',
    description: 'Choose the best worker, get the job done, and leave a review.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-500 text-lg">Simple steps to get your job done</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className={`w-16 h-16 ${step.iconBg} rounded-full flex items-center justify-center text-2xl mx-auto mb-5`}>
                {step.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
