'use client'

import React from 'react'

function CTA() {
  return (
    <section className="relative isolate px-6 py-24 mt-16 sm:py-32 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden rounded-3xl max-w-5xl mx-auto shadow-2xl">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { src: '1.svg', style: { top: '5%', left: '5%' }, delay: '0.2s' },
          { src: '3.svg', style: { top: '5%', right: '5%' }, delay: '0.6s' },
          { src: '5.svg', style: { top: '45%', left: '15%' }, delay: '0.8s' },
          { src: '10.svg', style: { top: '45%', right: '15%' }, delay: '1.2s' },
          { src: '4.svg', style: { top: '85%', left: '5%' }, delay: '1.4s' },
          { src: '8.svg', style: { top: '85%', right: '5%' }, delay: '1.8s' },
          { src: '9.svg', style: { top: '25%', left: '30%' }, delay: '2.0s', hideOnMobile: true },
          { src: '7.svg', style: { top: '65%', right: '30%' }, delay: '2.2s', hideOnMobile: true },
        ].map(({ src, style, delay, hideOnMobile }, idx) => (
          <img
            key={idx}
            src={`https://eliteai.tools/images/home/${src}`}
            alt="Decorative AI icon"
            className={`absolute w-16 h-16 animate-float transition-all duration-1000 opacity-30 hover:opacity-90 ${
              hideOnMobile ? 'hidden md:block' : ''
            }`}
            style={{ ...style, animationDelay: delay }}
          />
        ))}
      </div>

      {/* CTA Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Ready to Land the Interview?
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Create a tailored, professional cover letter in seconds — powered by GenLetter AI.
          No sign-up needed. Just start typing.
        </p>
        <a
          href="/generate"
          className="mt-8 inline-block bg-emerald-600 hover:bg-cyan-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
        >
          Generate Your Letter
        </a>
      </div>
    </section>
  )
}

export default CTA
