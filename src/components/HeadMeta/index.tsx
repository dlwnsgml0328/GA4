import Head from "next/head";

interface HeadMeta {
  title: string;
  description: string;
  url: string;
  image: string;
}

const HeadMeta = ({ title, description, url, image }: HeadMeta) => {
  return (
    <Head>
      <title>{title || "junhee"}</title>
      <meta name="description" content={description || "junhee's site"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:title" content={title || "junhee"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://ga-4.vercel.app"} />
      <meta
        property="og:image"
        content={
          image || "https://avatars.githubusercontent.com/u/97420325?v=4"
        }
      />
      <meta property="og:article:author" content="junhee" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "original"} data-rh="true" />
      <meta
        name="twitter:description"
        content={description || "junhee's site"}
      />

      <meta
        name="twitter:image"
        content={
          image || "https://avatars.githubusercontent.com/u/97420325?v=4"
        }
      />
    </Head>
  );
};

export default HeadMeta;
