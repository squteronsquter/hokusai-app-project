import Head from "next/head";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Hokusai App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Paintings of Japanese painter Hokusai."
        />
        <meta name="keywords" content="Hokusai, art, painting, Japanese art" />
        <meta name="author" content="DMS" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <div className="container">{props.children}</div>
    </>
  );
};

export default Layout;
