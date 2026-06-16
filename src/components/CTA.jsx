export default function CTA() {
  return (
    <section className="bg-blue-700 py-20 px-6 text-center text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-blue-200 text-lg mb-10">
          Join thousands of users getting their tasks done every day
        </p>
        <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors text-base flex items-center gap-2 mx-auto">
          Create Free Account
          <span>→</span>
        </button>
      </div>
    </section>
  )
}
