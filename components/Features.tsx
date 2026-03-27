export default function Features() {
  const features = [
    {
      title: 'Contract Analysis',
      description: 'Automatically extract key clauses, identify risks, and highlight obligations in seconds.',
    },
    {
      title: 'Case Research',
      description: 'Search through millions of precedents and case law with AI-powered relevance ranking.',
    },
    {
      title: 'Compliance Monitoring',
      description: 'Stay ahead of regulatory changes and ensure ongoing compliance across jurisdictions.',
    },
    {
      title: 'Risk Assessment',
      description: 'Proactive identification of legal risks and potential liabilities before they become issues.',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need for <span className="text-violet">Legal Intelligence</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive AI-powered tools that handle the heavy lifting so you can focus on strategy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphism p-8 rounded-lg hover:border-violet transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
