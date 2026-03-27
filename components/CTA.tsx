export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="glassmorphism p-12 rounded-lg text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Ready to Transform Your <span className="text-violet">Legal Workflow?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join forward-thinking legal teams saving time and money with AI-powered legal intelligence.
          </p>
          <form 
            action="https://formsubmit.co/tanner@thefiredev.com" 
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-6 py-4 rounded-lg bg-dark-bg border border-violet/30 focus:border-violet focus:outline-none text-white placeholder-text-secondary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-6 py-4 rounded-lg bg-dark-bg border border-violet/30 focus:border-violet focus:outline-none text-white placeholder-text-secondary"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full px-6 py-4 rounded-lg bg-dark-bg border border-violet/30 focus:border-violet focus:outline-none text-white placeholder-text-secondary"
            />
            <textarea
              name="message"
              placeholder="Tell us about your needs"
              rows={4}
              className="w-full px-6 py-4 rounded-lg bg-dark-bg border border-violet/30 focus:border-violet focus:outline-none text-white placeholder-text-secondary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-violet hover:bg-violet/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
