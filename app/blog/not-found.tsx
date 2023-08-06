import Link from 'next/link'
import Image from 'next/image'

import { notFoundGifUrlIdList } from '@/root/constants/images'
import LinkOutlinedArrow from '@/root/components/modules/link-outlined-arrow'

export default function NotFound() {
  const randomIndex = Math.floor(Math.random() * notFoundGifUrlIdList.length)
  const selectedGifUrl = `https://media.giphy.com/media/${notFoundGifUrlIdList[randomIndex].id}/giphy.gif`

  return (
    <section className="not-found">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-6 col-lg-7 sm-hidden">
            <div className="not-found-title">
              <h2 className="not-found-title-first">404</h2>
              <h3 className="not-found-title-second">Oops! Page not found.</h3>
            </div>

            <div className="not-found-guide">
              <h4 className="not-found-guide-title">How about:</h4>
              <ol className="not-found-guide-list">
                <li className="not-found-guide-list-item">
                  Double-check the URL for any typos or errors.
                </li>
                <li className="not-found-guide-list-item">
                  Return to the <Link href="/">Homepage</Link> to explore other
                  content.
                </li>
                <li className="not-found-guide-list-item">
                  Use the navigation menu above to find what you&apos;re looking
                  for.
                </li>
              </ol>
            </div>
            <LinkOutlinedArrow
              className="not-found-button"
              href="/"
              aria-label="Go to home"
            >
              Back to home
            </LinkOutlinedArrow>
          </div>

          <div className="col-sm-4 col-md-6 col-lg-5">
            <figure className="not-found-image-group">
              <div className="image">
                <Image
                  src={selectedGifUrl}
                  alt="error image"
                  className="giphy-embed"
                  fill
                  loading="lazy"
                />
              </div>
              <figcaption className="image-caption">
                <a href={notFoundGifUrlIdList[randomIndex].url}>via GIPHY</a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-4 col-md-6 col-lg-7 sm-only">
            <div className="not-found-title">
              <h2 className="not-found-title-first">404</h2>
              <h3 className="not-found-title-second">Oops! Page not found.</h3>
            </div>

            <div className="not-found-guide">
              <h4 className="not-found-guide-title">How about:</h4>
              <ol className="not-found-guide-list">
                <li className="not-found-guide-list-item">
                  Double-check the URL for any typos or errors.
                </li>
                <li className="not-found-guide-list-item">
                  Return to the <Link href="/">Homepage</Link> to explore other
                  content.
                </li>
                <li className="not-found-guide-list-item">
                  Use the navigation menu above to find what you&apos;re looking
                  for.
                </li>
              </ol>
            </div>
            <LinkOutlinedArrow
              className="not-found-button"
              href="/"
              aria-label="Go to home"
              target="_blank"
            >
              Back to home
            </LinkOutlinedArrow>
          </div>
        </div>
      </div>
    </section>
  )
}
