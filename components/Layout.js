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
      </Head>
      <Header />
      <div className="container">{props.children}</div>
    </>
  );
};

export default Layout;
