/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import {
  TITLES,
  INDEX_KWS,
  DESCRIPTIONS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = ({ page_head_data }) => {
  const router = useRouter();

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = TITLES[0];
    robots = "index, follow";
    url = router.pathname;

    if (DESCRIPTIONS[0].length > 0) {
      desc = DESCRIPTIONS[0];
    } else {
      desc = DESCRIPTIONS[0];
    }

    kws = INDEX_KWS;
  }

  // 404 Page
  if (router.pathname == "/404") {
    title = "Elty's Premium Painting & Restoration | 404";
    robots = "no index, no follow";
    desc = null;
    kws = null;
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      {/**
      <meta
        name="google-site-verification"
        content="aPd101rbxmZ5gRWC4D6m_kW5i3UVNrrgnmA6CrJWz20"
      />
      */}
      {/**
        <meta
        name="google-site-verification"
        content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
      />
        */}

      <link rel="icon" type="image/x-icon" href={page_head_data.favicon} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={page_head_data.f16}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={page_head_data.f32}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href={page_head_data.f48}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href={page_head_data.f64}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={page_head_data.f96}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href={page_head_data.f128}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={page_head_data.f192}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href={page_head_data.f512}
      />
      <link rel="apple-touch-icon" sizes="57x57" href={page_head_data.ati57} />
      <link rel="apple-touch-icon" sizes="76x76" href={page_head_data.ati76} />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={page_head_data.ati120}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={page_head_data.ati152}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={page_head_data.ati180}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href={page_head_data.android72}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={page_head_data.android96}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href={page_head_data.android144}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={page_head_data.android192}
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={page_head_data.ms32} />
      <meta
        name="msapplication-square70x70logo"
        content={page_head_data.ms70}
      />
      <meta
        name="msapplication-square150x150logo"
        content={page_head_data.ms150}
      />
      <meta
        name="msapplication-wide310x150logo"
        content={page_head_data.ms310}
      />

      {/** PRELOADING IMAGES */}
    </Head>
  );
};
