import { ImageResponse } from 'next/server'
import { NextRequest } from 'next/server'
import Image from 'next/image'

export const runtime = 'edge'

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const postImage = searchParams.get('image')
  const postUrl = searchParams.get('url')

  let backgroundImage = '../../public/images/og-image.png'
  const logoSvg = '../../public/images/logo.svg'

  const fontDataPromises = [
    fetch(
      new URL(
        '../../public/fonts/CormorantGaramond-SemiBold.ttf',
        import.meta.url
      )
    ).then((res) => res.arrayBuffer()),
    fetch(
      new URL(
        '../../public/fonts/CormorantGaramond-LightItalic.ttf',
        import.meta.url
      )
    ).then((res) => res.arrayBuffer()),
  ]

  const [semiBoldFontData, semiBoldItalicFontData] = await Promise.all(
    fontDataPromises
  )

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '7.5rem 12.5rem',
          backgroundImage: `url(${backgroundImage})`, // Use the selected image as the background
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'space-between',
            marginRight: '3.75rem',
            width: '56.25rem',
            height: 'auto',
            fontFamily: 'Cormorant Garamond',
            lineHeight: '120%',
            textAlign: 'left',
            color: '#F0EFF4', // ghost-white
            whiteSpace: 'pre-wrap',
            textOverflow: 'ellipsis',
          }}
        >
          <p
            style={{
              display: 'flex',
              flexShrink: '0',
              justifyContent: 'start',
              alignItems: 'center',
              padding: '1rem 1.5rem',
              alignSelf: 'stretch',
              fontSize: '2rem',
              fontWeight: '300',
              fontStyle: 'italic',
              borderRadius: '8px',
              backgroundColor: 'rgba(21, 21, 21, 0.4)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {postUrl}
          </p>

          <p
            style={{
              display: '-web-kit-box',
              fontSize: '6rem',
              fontWeight: '600',
              overflow: 'hidden',
              whiteSpace: 'pre-wrap',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '3',
            }}
          >
            {postTitle}
          </p>

          <p
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              padding: '1rem 1.5rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(21, 21, 21, 0.4)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                marginRight: '3.375rem',
                backgroundImage: `url(${logoSvg})`,
              }}
            >
              {logoSvg}
            </span>
            <span
              style={{
                display: 'inline-block',
                position: 'relative',
                top: '10px',
                marginRight: '0.75rem',
                fontSize: '2.5rem',
                fontWeight: '600',
              }}
            >
              joyejin
            </span>
            <span
              style={{
                display: 'inline-block',
                position: 'relative',
                bottom: '4px',
                fontSize: '2rem',
              }}
            >
              — Frontend Engineer
            </span>
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexShrink: '0',
            position: 'relative',
            width: '31.25rem',
            height: '52.5rem',
            borderRadius: '8px',
          }}
        >
          {postImage ? (
            <Image
              src={`${postImage}`}
              alt={`header image of ${postTitle}}`}
              fill
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : null}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Cormorant Garamond SemiBold',
          data: semiBoldFontData,
          style: 'normal',
        },
        {
          name: 'Cormorant Garamond Light Italic',
          data: semiBoldItalicFontData,
          style: 'italic',
        },
      ],
    }
  )
}
