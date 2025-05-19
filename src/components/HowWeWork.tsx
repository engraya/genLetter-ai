'use client'

import React from 'react'

function HowWeWork() {
  return (
    <section className="min-h-screen px-4 bg-white text-gray-800 dark:bg-gray-950 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        {/* Header */}
        <div className="md:w-2/3 lg:w-1/2">
          <div className="flex items-center space-x-3 text-blue-500 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="uppercase font-semibold tracking-wide text-sm">Process</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">How We Work</h2>
          <p className="w-full sm:whitespace-nowrap mt-4 text-gray-600 dark:text-gray-300">
            We follow a transparent and efficient process to help you get results fast and with confidence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6">
                {step.icon}
              </div>
              <h5 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {step.title}
              </h5>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: 'Initial Discussion',
    description: 'We’ll discuss your job goals and generate your first draft based on your unique needs.',
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    title: 'Deal Finalized',
    description: 'Once your inputs are locked, we finalize your tailored letter and give you full control.',
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Letter Delivered',
    description: 'Your cover letter is generated, styled, and formatted — ready to send in under 5 minutes.',
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M22 6L12 13 2 6" />
      </svg>
    ),
  },
  {
    title: 'Launch & Feedback',
    description: 'We celebrate your success and offer revisions or improvements based on your feedback.',
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
  },
]

export default HowWeWork
