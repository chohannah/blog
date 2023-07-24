import { Cormorant_Garamond } from 'next/font/google'
import { Fira_Code } from 'next/font/google'

export const cormorant_garamond = Cormorant_Garamond({
  weight: ['300', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

export const fira_code = Fira_Code({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})
