import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonicalPath: string
}

const SITE = 'https://catherinepatchell.com'
const OG_IMAGE = `${SITE}/og-image.jpg`

export function SEO({ title, description, canonicalPath }: SEOProps) {
  const url = `${SITE}${canonicalPath}`
  const fullTitle = `${title} | Catherine Patchell`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Catherine Patchell Photography" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cmpatchell" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Catherine Patchell',
          url: SITE,
          image: OG_IMAGE,
          sameAs: [
            'https://www.instagram.com/cmpatchell',
            'https://v13.net/author/catherine-patchell/',
            'https://newnoisemagazine.com/author/catherine/',
            'https://www.linkedin.com/in/catherinepatchell/',
            'https://x.com/cmpatchell',
          ],
          jobTitle: 'Concert & Wedding Photographer',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'San Francisco',
            addressRegion: 'CA',
            addressCountry: 'US',
          },
          description,
          knowsAbout: [
            'concert photography',
            'live music photography',
            'wedding photography',
            'portrait photography',
          ],
        })}
      </script>
    </Helmet>
  )
}
