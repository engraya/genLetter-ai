import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'
import 'bs-icon/icons.css'
import Footer from '@/components/layout/Footer'
import { Navbar, ThemeProvider } from '@/components/layout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

export default async function MainLayout({ children }) {

  return (
    <html suppressHydrationWarning>
      <head>
        <title>GenLetter AI</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <body className={GeistSans.className}>
        <ThemeProvider attribute='class'>
          <main className='min-h-screen'>
            <Navbar />
            <div className='max-w-screen-2xl mx-auto py-8 px-6 md:px-8 overflow-x-auto'>
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
