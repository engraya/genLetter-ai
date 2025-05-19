'use client'

import React from 'react'

const featureList = [
  {
    title: 'Lightning Fast',
    description: 'Cover letters generated in seconds — not minutes. Speed meets precision.',
    color: 'blue',
    icon: (
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: 'Secure by Design',
    description: 'Built with privacy in mind. We never store your data. Ever.',
    color: 'green',
    icon: (
      <>
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </>
    ),
  },
  {
    title: 'Intuitive Interface',
    description: 'Minimalist UI that helps you focus on what matters: your career.',
    color: 'purple',
    icon: (
      <path d="M4 5h16v2H4V5zm0 8h7v6H4v-6zm12 0h4v6h-4v-6z" />
    ),
  },
  {
    title: '24/7 Support',
    description: 'Human support when you need it. We’ve got your back.',
    color: 'yellow',
    icon: (
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Regular Updates',
    description: 'We evolve constantly — biweekly improvements and features.',
    color: 'red',
    icon: (
      <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    ),
  },
  {
    title: '99.9% Uptime',
    description: 'Deployed across global servers — your letters are always available.',
    color: 'indigo',
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
]

function Features() {
  return (
    <section className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wide">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            GenLetter AI Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A powerful tool designed to elevate your job search — fast, smart, and secure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map(({ title, description, icon, color }, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 mb-6 rounded-lg flex items-center justify-center bg-${color}-100 dark:bg-${color}-500/10`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-8 h-8 text-${color}-600 dark:text-${color}-400`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
