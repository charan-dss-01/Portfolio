import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DSS-Charan-Portfolio',
  description: 'DSS-Charan-Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" type="image/svg+xml" href="/assets/favicon.ico" className='w-10 h-10 rounded-full' />
      <body className={`${inter.className} text-white`}>
      <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
