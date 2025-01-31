import { Html, Head, Main, NextScript } from "next/document";
import { projectPath } from "@/utils/path";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${projectPath}/images/logos/logo.png`} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
