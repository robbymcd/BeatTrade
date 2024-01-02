import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BeatTrade',
  description: 'Marketplace for rappers to sell features, opens, vocal chains, and reposts',
}

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className={inter.className}>{children}</main>
    </>
  )
}
