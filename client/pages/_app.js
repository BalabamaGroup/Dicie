import Head from "next/head";
import Theme from "../styles/Theme";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Theme>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Aspid</title>
        </Head>

        <Component {...pageProps} />
      </Theme>
    </div>
  );
}
