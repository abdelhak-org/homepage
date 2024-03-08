import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="keywords" content="Homepage to  controll your apps" />
      </Head>
        <body>
          <Main />
          <div id="modal-root" ></div>
          <NextScript />
        </body>

    </Html>
  );
}
