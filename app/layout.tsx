import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { Fira_Code } from 'next/font/google'
import { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import { siteConfig } from '../config'
import Sidebar from '../components/layouts/sidebar'
import Footer from '../components/layouts/footer'
import Content from '../components/layouts/content'

import '../styles/index.scss'

const cormorant_garamond = Cormorant_Garamond({
  weight: ['300', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

const fira_code = Fira_Code({
  weight: ['400', '700'],
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

// toast styles constants
const mainCoral = '240, 128, 128' // #fa825b
const wintergreen = '42, 187, 155' // #4b8178
const ghostWhite = '#f0eff4'

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
            <Footer />
            <Toaster
              toastOptions={{
                className: 'toast',
                success: {
                  style: {
                    border: `1px solid ${wintergreen}`,
                    backgroundColor: `rgba(${wintergreen}, 0.4)`,
                    color: ghostWhite,
                  },
                },
                error: {
                  style: {
                    border: `1px solid ${mainCoral}`,
                    backgroundColor: `rgba(${mainCoral}, 0.4)`,
                    color: ghostWhite,
                  },
                },
              }}
              position="top-center"
            />
          </div>
        </div>
      </body>
    </html>
  )
}
