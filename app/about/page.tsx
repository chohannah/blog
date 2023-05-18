import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="about">
      <h1 className="srOnly">about page</h1>

      <article className="about-intro">
        <h2 className="about-intro-title">About Yejin</h2>
        <p>
          Hi, I’m a frontend software engineer who strives to create intuitive,
          aesthetic, and inclusive products.
        </p>
        <p>
          I believe in the credo “Weniger, Aber Besser” (less, but better),
          which inspires me to simplify my life and focus on what’s truly
          important.
        </p>
        <p>
          Although I’m not sure if I would define myself as a minimalist, I find
          that simplifying my life helps me realise my priorities. My main
          focuses in current life are technology, learning, flexibility,
          connectivity, and kombucha.
        </p>
      </article>

      <div className="about-image">
        <Image
          fill
          objectFit="cover"
          src="./images/about-image.jpg"
          alt="yejin is walking along river"
          loading="lazy"
        />
      </div>

      <article className="about-details">
        <h2 className="about-details-title">Passions, Experience, Education</h2>
        <p>
          I’m passionate about creative fields, such as design, music,
          photography, and coding — for sure.
        </p>
        <p>
          In fact, previous work experience as a User Experience Designer at
          TEDxSeoul and Marketing Intern at BMW led me to pursue current career
          path as a frontend software engineer.
        </p>
        <p>
          I genuinely love the web and am fascinated by its endless
          possibilities, especially when witnessing how people from all over the
          world can connect and solve problems together. <br />
          Also, majoring in Computer Science at Korean National Open
          University(KNOU) helps me to understand more about the web and
          computer in general — although the more I study the more I realise
          that there is still so much to learn.
        </p>
        <p>
          Yes, it’s frustrating at times, I find it exciting most of the time as
          I enjoy learning.
        </p>
      </article>

      <article className="about-values">
        <h2 className="about-values-title">Pursuing Values When Working</h2>
        <dl className="about-values-list">
          <div className="about-values-list-item">
            <dt>
              <sup>01</sup>Growth Mindset
            </dt>
            <dd>
              I believe that talents can be developed through hard work, good
              strategies, and input from others.
            </dd>
            <dd>
              At the same time, I am aware that we all have fixed mindsets that
              can trigger feelings of insecurity or defensiveness when faced
              with challenges or criticism. By acknowledging this fact, I strive
              to learn from these experiences and grow as a result.
            </dd>
          </div>

          <div className="about-values-list-item">
            <dt>
              <sup>02</sup>
              Abundance Mindset
            </dt>
            <dd>
              Before beginning work on a project, I always think about what I
              can contribute and how I can grow along with the organisation.
            </dd>
            <dd>
              I feel empowered and engaged when I am able to share my knowledge
              and experience with others.
            </dd>
          </div>

          <div className="about-values-list-item">
            <dt>
              <sup>03</sup>
              Respect
            </dt>
            <dd>
              I believe that it’s important to treat colleagues with respect,
              especially when giving feedback.
            </dd>
            <dd>
              I also believe that everyone has something to learn from others,
              and I try to actively listen when communicating.
            </dd>
          </div>
        </dl>
      </article>
    </section>
  )
}
