import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { Fira_Code } from 'next/font/google'

import { siteConfig } from '../config'
import Sidebar from '../components/sidebar'
import Content from '../components/content'

import '../styles/index.scss'

const cormorant_garamond = Cormorant_Garamond({
  weight: ['300', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

const fira_code = Fira_Code({
  weight: ['300', '600'],
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title}`,
    template: `${siteConfig.template}`,
  },
  description: `${siteConfig.description}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html
      lang="en"
      className={`${cormorant_garamond.variable} ${fira_code.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <div className="container">
          <div className="row">
            <Sidebar />
            <Content>{children}</Content>
          </div>
        </div>
      </body>
    </html>
  )
}
