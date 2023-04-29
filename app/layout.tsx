import type { Metadata } from 'next'
import Header from '../components/header'

export const metadata: Metadata = {
  title: 'blog',
  description: 'tech | mindfulness | design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const footer = (
    <footer>
      <h1>footer</h1>
    </footer>
  )

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        {footer}
      </body>
    </html>
  )
}
