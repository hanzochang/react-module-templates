import React from 'react'
import { BreadcrumbJsonLd, LogoJsonLd, NextSeo } from 'next-seo'

const Component: React.FC = () => {
  return (
    <>
      <NextSeo
        title="next.js template"
        description=""
        openGraph={{
          url: 'https://example.com/',
          title: '',
          description: '',
          images: [
            {
              url: 'https://example.com/ogp.png',
              width: 2400,
              height: 1254,
              alt: 'ogp',
            },
          ],
        }}
        twitter={{
          handle: '',
          site: '',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'theme-color',
            content: '#',
          },
        ]}
      />
      <LogoJsonLd
        logo="https://example.com/jsonld_logo_260x260.png"
        url="https:://example.com/"
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'example',
            item: 'https://example.com/',
          },
        ]}
      />
    </>
  )
}

export { Component as Seo }
