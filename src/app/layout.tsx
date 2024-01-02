import type { Metadata } from 'next'
import { AuthProvider } from './Store/AuthProvider'

import Header from './Components/Header/Header'
import Footer from './Components/Footer'

import './globals.css';

export const metadata: Metadata = {
  title: 'BeatTrade',
  description: 'Marketplace for rappers to sell features, opens, vocal chains, and reposts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </body>
      </html>
    </>
  )
}
