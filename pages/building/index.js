import AppLayout from "../../componentes/AppLayout";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Link from "next/link";

const index =()=>{
    return(
        <AppLayout>
          <Container className="container-ganga fade-in animated">
              <div className="bg-mantenimiento">
                  <div className="img-bg">
                      <h5 className="title-mantenimiento">Página en mantenimiento</h5>
                      <div className='div-btn-mantenimiento'>
                          <Link href="/">
                            <a
                                className="btn-mantenimiento"
                            >Ir a la página de inicio</a>
                          </Link>
                      </div>
                      <Image
                        src="/images/mujer.png"
                        className="mujer-mantenimiento"
                      />
                  </div>
              </div>
          </Container>
          <style jsx>
              {`
                .bg-mantenimiento{
                        position: relative;
                        height:100vh;
                        width: auto;
                    }

                .img-bg{
                        background-image: url(../../images/pagina-mantenimiento.png);
                        width: 100%;
                        background-size: cover;
                        height: 100%;
                        position: relative;
                        background-position: center center;
                    }

                .title-mantenimento{
                        font-family: "made-tomy-sof-regular";
                        text-transform: uppercase;
                        color: #ffff;
                        font-weight: bolder;
                        font-size: 2.5rem;
                        text-align: center;
                        letter-spacing: .1rem;
                        padding-top: 7rem;
                    }


                .div-btn-mantenimiento{
                        margin: auto;
                        text-align: center;
                    }
                .btn-matenimiento{
                        font-family: "made-tomy-sof-regular";
                        color: #ffff;
                        background-color: #73BFB8;
                        margin: 1rem auto;
                        text-align: center;
                        display: inline-flex;
                        padding: .5rem 1rem;
                        border-radius: 4%;
                    }

                .mujer-mantenimiento{
                        position: absolute;
                        bottom: 0%;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 30%;
                    }
              `}
          </style>
        </AppLayout>
    )
};

export default index;