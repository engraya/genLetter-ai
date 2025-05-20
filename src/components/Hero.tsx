'use client'

import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import { Button } from '@/components/ui'

function Hero() {
  return (
    <section className="relative py-14 md:py-24">
      {/* Background blur */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-purple-400 dark:from-blue-700" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-base font-semibold text-blue-500 dark:text-blue-300 tracking-wide uppercase">
          Stand Out in Every Application
        </h2>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
            Cover Letters Powered by AI,<br />
            <span className="relative inline-block px-2 py-1">
              <svg
                className="stroke-current absolute bottom-0 left-0 text-blue-300 dark:text-blue-400 w-full h-3"
                viewBox="0 0 410 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                  strokeWidth={12}
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <span className="relative">Made Just for You</span>
            </span>
          </h1>
          
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Say goodbye to blank pages and boring templates. GenLetter AI helps you craft personalized, job-ready cover letters in seconds — just enter a few details, and let AI do the writing.
        </p>


        <div className="flex justify-center items-center gap-4 mt-8 flex-wrap">
          <Link
            href="/generate"
            className="px-5 py-1 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            Get Started
          </Link>

          <Link
            href="https://github.com/engraya/genLetter-ai"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" className="flex items-center gap-2">
              <IoLogoGithub className="text-lg" />
              GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
