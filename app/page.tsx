import { homeName, homeTitle, homeBody } from '../lib/page-content'

export default function HomePage() {
  return (
    <section>
      <h1>{homeName}</h1>
      <h2>{homeTitle}</h2>
      <p>{homeBody()}</p>
    </section>
  )
}
