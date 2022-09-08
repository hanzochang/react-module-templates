import React from 'react'

const Component: React.FC = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      {/* PWA primary color */}
      <meta name="theme-color" content={'#999999'} />
      <meta name="msapplication-TileColor" content={'#999999'} />
      <link
        href="/assets/favicon/favicon_16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="/assets/favicon/favicon_32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/assets/favicon/favicon_48x48.png"
        rel="icon"
        sizes="48x48"
        type="image/png"
      />
      <link
        href="/assets/favicon/favicon_96x96.png"
        rel="icon"
        sizes="96x96"
        type="image/png"
      />
      <link
        href="/assets/favicon/favicon_152x152.png"
        rel="icon"
        sizes="152x152"
        type="image/png"
      />
      <link
        href="/assets/favicon/favicon_260x260.png"
        rel="icon"
        sizes="260x260"
        type="image/png"
      />
      <link
        href="/assets/appletouchicon/appletouchicon_180x180.png"
        rel="'apple-touch-icon"
        sizes="180x180"
      />
      <link href="/site.webmanifest" rel="manifest" />
    </>
  )
}

export { Component as Meta }
