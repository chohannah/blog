/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const postImage = searchParams.get('image')
  const postUrl = searchParams.get('url')
  const backgroundImage = 'https://chohannah.com/images/og-image.png'

  const font = fetch(
    new URL(
      '../../public/fonts/CormorantGaramond-SemiBold.ttf',
      import.meta.url
    )
  ).then((res) => res.arrayBuffer())
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '7.5rem 12.5rem',
          backgroundImage: `url(${backgroundImage})`, // Use the selected image as the background
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginRight: '3.75rem',
            width: '960px',
            height: '573px',
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
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: '1rem 1.5rem',
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
              display: '-webkit-box',
              height: '345px',
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
        </div>

        <div
          style={{
            display: 'flex',
            flexShrink: '0',
            position: 'relative',
            width: '31.25rem',
            height: '52.5rem',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {postImage ? (
            <img
              src={`${postImage}`}
              alt={`header image of ${postTitle}}`}
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
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
