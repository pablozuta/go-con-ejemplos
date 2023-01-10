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
        <title>Go Con Ejemplos</title>
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
          
            <h3 className="home blog-title">CON EJEMPLOS </h3>
          
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
    </div>
  );
}

export default MyApp;
