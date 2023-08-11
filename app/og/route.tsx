import { ImageResponse } from 'next/server'
import { NextRequest } from 'next/server'
import Image from 'next/image'
// import { allBlogs } from '@/root/.contentlayer/generated'

export const runtime = 'edge'

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const postImage = searchParams.get('image')
  const postUrl = searchParams.get('url')
  // const post = allBlogs.find((post) => post.slug === params.slug)

  let backgroundImage = '../../public/images/og-image.png'
  const logoSvg = () => {
    return (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2877_1321)">
          <circle cx="162.301" cy="162.995" r="162" fill="#331B3F" />
          <mask
            id="mask0_2877_1321"
            //   style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="325"
            height="325"
          >
            <circle cx="162.301" cy="162.995" r="162" fill="#331B3F" />
          </mask>
          <g mask="url(#mask0_2877_1321)">
            <path
              d="M-837.699 212C-804.366 238.667 -771.033 238.667 -737.699 212C-704.366 238.667 -671.033 238.667 -637.699 212C-604.366 238.667 -571.033 238.667 -537.699 212C-504.366 238.667 -471.033 238.667 -437.699 212C-404.366 238.667 -371.033 238.667 -337.699 212C-304.366 238.667 -271.033 238.667 -237.699 212C-204.366 238.667 -171.033 238.667 -137.699 212C-104.366 238.667 -71.0326 238.667 -37.6992 212C-4.36589 238.667 28.9674 238.667 62.3008 212C95.6341 238.667 128.967 238.667 162.301 212C195.634 238.667 228.967 238.667 262.301 212C295.634 238.667 328.967 238.667 362.301 212C395.634 238.667 428.967 238.667 462.301 212C495.634 238.667 528.967 238.667 562.301 212C595.634 238.667 628.967 238.667 662.301 212C695.634 238.667 728.967 238.667 762.301 212C795.634 238.667 828.967 238.667 862.301 212C895.634 238.667 928.967 238.667 962.301 212C995.634 238.667 1028.97 238.667 1062.3 212C1095.63 238.667 1128.97 238.667 1162.3 212"
              stroke="#ACC7B4"
              stroke-width="4"
            />
            <path
              d="M-837.699 252C-804.366 278.667 -771.033 278.667 -737.699 252C-704.366 278.667 -671.033 278.667 -637.699 252C-604.366 278.667 -571.033 278.667 -537.699 252C-504.366 278.667 -471.033 278.667 -437.699 252C-404.366 278.667 -371.033 278.667 -337.699 252C-304.366 278.667 -271.033 278.667 -237.699 252C-204.366 278.667 -171.033 278.667 -137.699 252C-104.366 278.667 -71.0326 278.667 -37.6992 252C-4.36589 278.667 28.9674 278.667 62.3008 252C95.6341 278.667 128.967 278.667 162.301 252C195.634 278.667 228.967 278.667 262.301 252C295.634 278.667 328.967 278.667 362.301 252C395.634 278.667 428.967 278.667 462.301 252C495.634 278.667 528.967 278.667 562.301 252C595.634 278.667 628.967 278.667 662.301 252C695.634 278.667 728.967 278.667 762.301 252C795.634 278.667 828.967 278.667 862.301 252C895.634 278.667 928.967 278.667 962.301 252C995.634 278.667 1028.97 278.667 1062.3 252C1095.63 278.667 1128.97 278.667 1162.3 252"
              stroke="#ACC7B4"
              stroke-width="4"
            />
            <path
              d="M-837.699 292C-804.366 318.667 -771.033 318.667 -737.699 292C-704.366 318.667 -671.033 318.667 -637.699 292C-604.366 318.667 -571.033 318.667 -537.699 292C-504.366 318.667 -471.033 318.667 -437.699 292C-404.366 318.667 -371.033 318.667 -337.699 292C-304.366 318.667 -271.033 318.667 -237.699 292C-204.366 318.667 -171.033 318.667 -137.699 292C-104.366 318.667 -71.0326 318.667 -37.6992 292C-4.36589 318.667 28.9674 318.667 62.3008 292C95.6341 318.667 128.967 318.667 162.301 292C195.634 318.667 228.967 318.667 262.301 292C295.634 318.667 328.967 318.667 362.301 292C395.634 318.667 428.967 318.667 462.301 292C495.634 318.667 528.967 318.667 562.301 292C595.634 318.667 628.967 318.667 662.301 292C695.634 318.667 728.967 318.667 762.301 292C795.634 318.667 828.967 318.667 862.301 292C895.634 318.667 928.967 318.667 962.301 292C995.634 318.667 1028.97 318.667 1062.3 292C1095.63 318.667 1128.97 318.667 1162.3 292"
              stroke="#ACC7B4"
              stroke-width="4"
            />
          </g>
        </g>

        <defs>
          <clipPath id="clip0_2877_1321">
            <rect
              width="324"
              height="324"
              fill="white"
              transform="translate(0.300781 0.995117)"
            />
          </clipPath>
        </defs>
      </svg>
    )
  }

  // Check if the image path exists in metadata
  // if (post && post.image) {
  //   backgroundImage = post.image
  // }

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
            <span style={{ marginRight: '3.375rem' }}>{logoSvg()}</span>
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
