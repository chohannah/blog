export const metadata = {
  title: "yejin's blog",
  description: 'tech | mindfulness | design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <h1>header</h1>
    </header>
  )

  const footer = (
    <footer>
      <h1>footer</h1>
    </footer>
  )

  return (
    <html lang="en">
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
