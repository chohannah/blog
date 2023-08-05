type ContentLayoutProps = {
  children?: React.ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <main id="main-content" className="content" tabIndex={-1}>
      {children}
    </main>
  )
}
