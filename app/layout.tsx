import Header from '../components/header'

export const metadata = {
  title: "yejin's blog",
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
      <body>
        <Header />
        {children}
        {footer}
      </body>
    </html>
  )
}
