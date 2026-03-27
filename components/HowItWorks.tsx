export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload',
      description: 'Add contracts, filings, or compliance documents',
    },
    {
      number: '02',
      title: 'Analyze',
      description: 'AI extracts risks, clauses, and precedents',
    },
    {
      number: '03',
      title: 'Act',
      description: 'Get actionable legal guidance instantly',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How It <span className="text-violet">Works</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Three simple steps from documents to decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-violet mb-4 opacity-20">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
