import Head from "next/head";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  fullTitle?: string;
  description?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  fullTitle,
  description,
}) => {
  let siteTitle = fullTitle
    ? fullTitle
    : title
    ? `9to5 Networks - ${title}`
    : "9to5 Networks";
  let siteDesc = description
    ? description
    : "9to5 Networks is an award-winning design studio specializing in branding and digital design. Based in Guatemala and working worldwide.";
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#ffffff" />

        <title>{siteTitle}</title>

        <meta name="description" content={siteDesc} />

        <meta property="og:url" content="https://antara.studio/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="9to5 Networks" />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:site_name" content="9to5 Networks" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/hevn7efc/production/0f5c8f359eaeea41877a3be0d27dffc12c235103-1200x625.jpg"
        />
        <meta property="og:image:secure_url" content="http://localhost:3000/" />
        <meta property="og:image:alt" content="9to5 Networks" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="http://localhost:3000/" />
        <meta name="twitter:title" content="9to5 Networks" />
        <meta name="twitter:description" content={siteDesc} />
        <meta
          name="twitter:image"
          content="https://cdn.sanity.io/images/hevn7efc/production/0f5c8f359eaeea41877a3be0d27dffc12c235103-1200x625.jpg"
        />
        <meta name="twitter:image:alt" content="9to5 Networks" />

        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/favicon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
