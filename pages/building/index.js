import AppLayout from "../../componentes/AppLayout";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>La Ganga - Página en construcción</title>
        {/* <link rel="icon" type="image/x-icon"  href="/yesmom-favicon.png" /> */}
        <meta name="description" content="La Ganga es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Ganga - Página en construcción" />
        <meta
          property="og:description"
          content="Página en construcción..."
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://scontent.flim16-2.fna.fbcdn.net/v/t1.0-9/126792131_106928704587510_2836457564050845211_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFSSfa6-XY6Gr86bM0YLSnbg75GzBA7YvSDvkbMEDti9CbHT_bhgekVd4r0lJtcFek&_nc_ohc=WbH5Z7RjRSEAX_W02AR&_nc_ht=scontent.flim16-2.fna&oh=c348092596513f52dfca119589ab6c0b&oe=602D60C9"
        />
        <meta property="og:site_name" content="La Ganga" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="La Ganga - Página en construcción" />
        <meta
          name="twitter:description"
        content="Página en construcción..."
         />
        <meta
          name="twitter:image"
          content="https://scontent.flim16-2.fna.fbcdn.net/v/t1.0-9/126792131_106928704587510_2836457564050845211_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFSSfa6-XY6Gr86bM0YLSnbg75GzBA7YvSDvkbMEDti9CbHT_bhgekVd4r0lJtcFek&_nc_ohc=WbH5Z7RjRSEAX_W02AR&_nc_ht=scontent.flim16-2.fna&oh=c348092596513f52dfca119589ab6c0b&oe=602D60C9"
        />
        <meta name="twitter:site" content="@JudithCristinaQ" />
        <meta name="twitter:creator" content="@JudithCristinaQ" />
      </Head>
      <AppLayout>
        <Container className="container-ganga fade-in animated">
          <div className="bg-mantenimiento">
            <div className="img-bg">
              <h1>Página en mantenimiento</h1>
              <div className="div-btn-mantenimiento">
                <Link href="/">
                  <a>Ir a la página de inicio</a>
                </Link>
              </div>
              <div className="mujer-mantenimiento">
                <Image src="/images/mujer.png" height="500" width="500" />
              </div>
            </div>
          </div>
        </Container>
        <style jsx>
          {`
            .bg-mantenimiento {
              position: relative;
              height: 100vh;
              width: auto;
            }

            .img-bg {
              background-image: url(../../images/pagina-mantenimiento.png);
              width: 100%;
              background-size: cover;
              height: 100%;
              position: relative;
              background-position: center center;
            }

            h1 {
              font-family: "made-tomy-sof-regular";
              text-transform: uppercase;
              color: #ffff;
              font-weight: bolder;
              font-size: 2.5rem;
              text-align: center;
              letter-spacing: 0.1rem;
              padding-top: 7rem;
            }

            .img-bg div {
              margin: auto;
              text-align: center;
            }
            .img-bg div a {
              font-family: "made-tomy-sof-regular";
              color: #ffff;
              background-color: #73bfb8;
              margin: 1rem auto;
              text-align: center;
              display: inline-flex;
              padding: 0.5rem 1rem;
              border-radius: 4%;
            }

            .mujer-mantenimiento {
              position: absolute;
              bottom: 0%;
              left: 50%;
              transform: translateX(-50%);
              width: 30%;
            }
          `}
        </style>
      </AppLayout>
      6
    </>
  );
};

export default index;
