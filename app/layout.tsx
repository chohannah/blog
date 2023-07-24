import type { Metadata } from 'next'
import { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import { siteConfig } from '../config'
import { cormorant_garamond, fira_code } from '../lib/fonts'
import Sidebar from '../components/layouts/sidebar'
import Footer from '../components/layouts/footer'
import Content from '../components/layouts/content'

import '../styles/index.scss'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title}`,
    template: `${siteConfig.template}`,
  },
  description: `${siteConfig.description}`,
}

// toast styles constants
const mainCoralRgb = '240, 128, 128'
const mainCoralHex = '#fa825b'
const wintergreenRgb = '42, 187, 155'
const wintergreenHex = '#4b8178'
const ghostWhiteHex = '#f0eff4'

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
                    border: `1px solid ${wintergreenHex}`,
                    backgroundColor: `rgba(${wintergreenRgb}, 0.4)`,
                    color: ghostWhiteHex,
                  },
                },
                error: {
                  style: {
                    border: `1px solid ${mainCoralHex}`,
                    backgroundColor: `rgba(${mainCoralRgb}, 0.4)`,
                    color: ghostWhiteHex,
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
