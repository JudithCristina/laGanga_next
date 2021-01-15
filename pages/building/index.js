import AppLayout from "../../componentes/AppLayout";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
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
  );
};

export default index;
