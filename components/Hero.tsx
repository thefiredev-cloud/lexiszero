'use client'

import dynamic from 'next/dynamic'

const Scene3DComponent = dynamic(() => import('../components/Scene3D'), { ssr: false })

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Legal Intelligence,{' '}
              <span className="text-violet">Zero Billable Hours</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              AI-powered legal analysis for contracts, compliance, and case research at a fraction of the cost.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glassmorphism p-4 rounded-lg">
                <div className="text-3xl font-bold text-violet">10x</div>
                <div className="text-sm text-text-secondary">faster research</div>
              </div>
              <div className="glassmorphism p-4 rounded-lg">
                <div className="text-3xl font-bold text-violet">90%</div>
                <div className="text-sm text-text-secondary">cost reduction</div>
              </div>
              <div className="glassmorphism p-4 rounded-lg">
                <div className="text-3xl font-bold text-violet">500+</div>
                <div className="text-sm text-text-secondary">case types</div>
              </div>
              <div className="glassmorphism p-4 rounded-lg">
                <div className="text-3xl font-bold text-violet">SOC 2</div>
                <div className="text-sm text-text-secondary">compliant</div>
              </div>
            </div>
            <a 
              href="#contact" 
              className="inline-block bg-violet hover:bg-violet/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Start Analyzing
            </a>
          </div>
          <div className="h-[500px] w-full">
            <Scene3DComponent />
          </div>
        </div>
      </div>
    </section>
  )
}
