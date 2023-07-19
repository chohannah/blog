import { homeTitle, homeBody } from '../lib/page-content'
import LinkOutlinedArrow from '../components/modules/link-outlined-arrow'

const HomePage = () => {
  return (
    <section className="home">
      <div className="home-text">
        <h2 className="home-title">{homeTitle}</h2>
        {homeBody()}
      </div>

      <LinkOutlinedArrow href="/about">more about me</LinkOutlinedArrow>
    </section>
  )
}

export default HomePage
