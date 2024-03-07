import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stride',
  description: 'Generated by create next app',
  icons: [
    {
      rel: 'icon',
      url: '/logo.svg',
      type: 'image/svg+xml',
      media: '(prefers-color-scheme: light)'
    }
  ]
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          { children }
        </ThemeProvider>
      </body>
    </html>
  )
}
