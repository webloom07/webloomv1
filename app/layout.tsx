import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webloom - Your Digital Growth Partner',
  description: 'Created with Webloom',
  generator: 'Prince',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
