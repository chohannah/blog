import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'

import Sidebar from '../components/sidebar'

import '../styles/index.scss'

const cormorant_garamond = Cormorant_Garamond({
  weight: ['300', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'yejinc',
    template: '%s | yejinc',
  },
  description: 'tech | mindfulness | design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={cormorant_garamond.variable}>
      <body suppressHydrationWarning={true}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  )
}
