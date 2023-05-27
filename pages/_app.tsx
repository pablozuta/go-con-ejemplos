import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import Image from "next/image";
import go from "../public/go.svg";
import gopher from "../public/gopher.svg";

function MyApp({ Component, pageProps }: AppProps) {
  const widthLogo = "40px";
  const heightLogo = "40px";
  return (
    <div className="container">
      <Head>
        <title>Go by Example</title>
        <link rel="shortcut icon" href="https://www.svgrepo.com/show/445789/golang.svg" />
      </Head>
      <nav className="barra-navegacion">
        <div className="go-con-ejemplos">
          <Link href="/">
            <Image
              className="imagen-logo"
              src={go}
              alt="logo of go"
              width={widthLogo}
              height={heightLogo}
            ></Image>
          </Link>

          <h3 className="home blog-title">BY EXAMPLE </h3>
        </div>

        <div className="barra-navegacion-iconos">
          <Image
            className="imagen-logo"
            src={gopher}
            alt="icono de twitter"
            width={widthLogo}
            height={heightLogo}
          ></Image>
        </div>
      </nav>

      <Component {...pageProps} />
      <div className="links-card">
        <p>by</p>
      <Link href={"https://markmcgranaghan.com/"}> Mark McGranaghan</Link>
      <p>and</p>
      <Link href={"https://eli.thegreenplace.net/"}>Eli Bendersky</Link>
      </div>
      <Link href={"https://github.com/mmcgrana/gobyexample"}>Source  |</Link>
      <Link href={"https://github.com/mmcgrana/gobyexample#license"}> License</Link>
    </div>
  );
}

export default MyApp;
