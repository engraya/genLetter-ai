import React from 'react'

function About() {
  return (
    <section className="min-h-screen md:-mt-16 flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent mb-6 bg-gradient-to-r from-blue-400 to-emerald-500">
          About GenLetter AI
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          GenLetter AI is your smart assistant for creating personalized, job-ready cover letters in seconds. 
          Whether you're applying for your first internship or making a big career move, GenLetter uses the power 
          of artificial intelligence to help you stand out — no templates, no guesswork, just writing that sounds like you.
          <br /><br />
          Built for speed and simplicity, GenLetter takes just a few inputs — your role, experience, company name, and goals — 
          and turns them into a polished, professional letter tailored to the job. With live preview, instant downloads, and 
          editable output, you're always in control.
          <br /><br />
          Our mission is to take the stress out of job applications and give every candidate the tools to present their best self — 
          confidently, clearly, and fast.
        </p>
      </div>
    </section>
  )
}

export default About
