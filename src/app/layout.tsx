import './global.css'
import type { Metadata } from 'next'
import { container } from '@/styled-system/patterns'
import { Inter } from 'next/font/google'
import { cx } from '@/styled-system/css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontpage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(container(), inter.className)}>{children}</body>
    </html>
  )
}
