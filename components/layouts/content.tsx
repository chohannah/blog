type ContentLayoutProps = {
  children?: React.ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="col-sm-4 col-md-9 col-lg-9">
      <main id="main-content" className="content" tabIndex={-1}>
        {children}
      </main>
    </div>
  )
}
