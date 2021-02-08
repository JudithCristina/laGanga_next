import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AppLayout from "../../componentes/AppLayout";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import Head from "next/head";


const PromotionSpecific = ({ product }) => {
  const [interest, setInterest] = useState(false);
  const [btnShare, setBtnShare] = useState(false);
  const router = useRouter();
  console.log(router, "hola soy la ruta");
  const functionShare = () => {
    setBtnShare(!btnShare);
  };
  return (
    <>
      <AppLayout>
        {/* <Head>
          <title>{product.promocion.nombre}</title>
          <meta
            name="description"
            content={product.promocion.descripcion}
          ></meta>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={product.promocion.nombre} />
          <meta
            property="og:description"
            content={product.promocion.descripcion}
          />
          <meta
            property="og:image"
            content={
              product.imagenes[1].typeImage === "O"
                ? product.imagenes[1].url
                : product.imagenes[0].url
            }
          />
           <meta property="og:site_name" content="La Ganga" />
        </Head> */}

        <Container className="pt-4 box-home container-ganga fade-in animated">
          <h4 className="title-ganga title-especific">Ver mas detalles:</h4>
          <div className="box-details margin-box">
            <figure className="figure-product-especific">
              <img
                src={
                  product.imagenes[1].typeImage === "O"
                    ? product.imagenes[1].url
                    : product.imagenes[0].url
                }
                alt=""
                className="w-100"
              />
              <div className="grup-btn-especific">
                <div className="btn-cirle-especific" onClick={functionShare}>
                  <FontAwesomeIcon
                    icon={faShareAlt}
                    className="btn-share-especific"
                  />
                </div>
                {btnShare === false ? (
                  ""
                ) : (
                  <div className="socialGallery">
                    <div class="socialToolBox">
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2FPromotion%2Ft28%3Fid%3D5fea41b90e52d344743bf74f&amp;src=sdkpreparse"
                        className="btn-cirle-especific"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="btn-share-especific"
                        />
                      </a>
                      <a className="btn-cirle-especific">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="btn-share-especific"
                        />
                      </a>
                    </div>
                  </div>
                )}
                <div className="btn-cirle-especific">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={
                      interest
                        ? "btn-like-especific-active"
                        : "btn-like-especific"
                    }
                    // onClick={addInterestEspecific}
                  />
                </div>
              </div>
              {product.promocion.tipoDescuento === "freeShipping" ? (
                <div className="box-tag-offer-especific">
                  <div className="box-free-shipping">
                    <div
                      className={
                        "letter-free" +
                        " " +
                        "letter-free-cl-" +
                        product.promocion.categoria
                      }
                    >
                      free
                    </div>
                    <div
                      className={
                        "box-letter-free" +
                        " " +
                        "box-letter-free-bg-" +
                        product.promocion.categoria
                      }
                    >
                      shipping
                    </div>
                  </div>
                </div>
              ) : product.promocion.tipoDescuento === "2x1" ? (
                <div className="box-tag-offer-especific">
                  <div
                    className={
                      "box-x" + " " + "box-x-" + product.promocion.categoria
                    }
                  >
                    2x1
                  </div>
                </div>
              ) : product.promocion.tipoDescuento === "3x2" ? (
                <div className="box-tag-offer-especific">
                  <div
                    className={
                      "box-x" + " " + "box-x-" + product.promocion.categoria
                    }
                  >
                    3x2
                  </div>
                </div>
              ) : product.promocion.descuentoOtros === "otros" ? (
                <div className="box-tag-offer-especific">
                  <div
                    className={
                      "box-x" + " " + "box-x-" + product.promocion.categoria
                    }
                  >
                    {product.promocion.descuentoOtros}
                  </div>
                </div>
              ) : (
                <div className="box-tag-offer-especific">
                  <div
                    className={
                      "box-porcent" +
                      " " +
                      "box-porcent-" +
                      product.promocion.categoria
                    }
                  >
                    -{product.promocion.descuento}%
                  </div>
                </div>
              )}
              <img
                src={
                  product.imagenes[1].typeImage === "M"
                    ? product.imagenes[1].url
                    : product.imagenes[0].url
                }
                alt=""
                className="marca-especific"
              />
            </figure>
            <div></div>
            <div className="box-details-especific">
              <h3 className="title-ganga subtitle-especific">
                {product.promocion.nombre}
              </h3>
              <div className="group-time">
                <FontAwesomeIcon icon={faClock} className="img-clock" />
                <div className="ml-2">5D 4h 1M</div>
              </div>
              <div className="description-especific">
                {product.promocion.descripcion}
                {product.promocion.categoria}
              </div>
              <Button className="btn-ir-web">Ir a la web</Button>
            </div>
          </div>
          <div>
            <div className="box-gangaDelDia margin-box">
              <h1 className="title-producto-similar">Productos similares</h1>
              {/* <PromoSimilar addInterest={addInterest} products={products} category={product.promocion.categoria} /> */}
            </div>
            <Row className="justify-content-md-center ">
              {/*<Item />
             <Item />
             <Item />
             <Item />*/}
            </Row>
          </div>
          <figure className="m-0 w-100">
            <Image
              src="/images/banner/banner-bottom.png"
              alt="banner"
              // layout="fill"
              width={1500}
              height={400}
              //   layout="responsive"
            />
          </figure>
        </Container>
      </AppLayout>
      <style jsx>
        {`
          .socialGallery {
            left: 40%;
            margin: 0 auto 0;
            position: absolute;
            top: -35px;
            transform: translate(-50%, 0);
            width: 150px;
          }
          .socialGallery a {
            cursor: pointer;
          }
          .socialToolBox {
            display: flex;
            justify-content: center;
          }
          .title-especific {
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 1rem;
          }
          .subtitle-especific {
            text-transform: capitalize;
            text-align: left;
          }

          .box-details {
            display: flex;
            justify-content: center;
          }

          .box-details-especific {
            width: 50%;
            padding: 1rem;
          }
          .group-time {
            display: flex;
            align-items: center;
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }

          .img-clock {
            color: #f31454;
          }
          .description-especific {
            padding: 0.4rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 1.2rem;
            font-family: "made-tomy-sof-regular";
          }

          .figure-product-especific {
            width: 50%;
            padding: 1rem;
            position: relative;
          }

          .grup-btn-especific {
            position: absolute;
            bottom: -0.5rem;
            right: 1.5rem;
            display: flex;
          }

          .btn-cirle-especific {
            background-color: #f5f5f5;
            padding: 0.7rem 0.9rem;
            border-radius: 50%;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }

          .btn-share-especific,
          .btn-like-especific {
            font-size: 1.5rem;
            color: #bfbfbf;
          }

          .btn-like-especific-active {
            font-size: 1.5rem;
            color: #f31454;
          }
          .btn-share-especific:hover,
          .btn-like-especific:hover,
          .btn-share-especific:focus,
          .btn-like-especific:focus {
            color: #f31454;
            cursor: pointer;
          }

          .btn-ir-web {
            font-family: "made-tomy-sof-regular";
            background-color: #7487fc !important ;
            font-weight: 800 !important;
            letter-spacing: 0.05rem;
            padding: 0.5rem 2.2rem !important;
          }
          .btn-ir-web:hover,
          .btn-ir-web:focus {
            cursor: pointer;
            background-color: #5a68c7 !important;
          }

          .title-producto-similar {
            margin-bottom: 40px;
          }
          .box-tag-offer-especific {
            position: absolute;
            top: 10%;
            left: 5%;
            padding: 0.4rem 0.5rem;
          }

          .marca-especific {
            position: absolute;
            top: 10%;
            right: 5%;
            width: 20%;
            /* background-color: #fff; */
          }

          @media (max-width: 769px) {
            .box-details {
              flex-direction: column;
            }
            .figure-product-especific {
              width: 100%;
              padding: 0.5rem;
            }
            .box-details-especific {
              width: 100%;
              padding: 0.5rem;
            }

            .margin-box {
              padding: 0rem;
            }

            .description-especific {
              font-size: 1rem;
            }

            .group-time {
              font-size: 1rem;
            }

            .title-producto-similar {
              font-size: 1.5rem;
            }
            .title-especific {
              font-size: 1.3rem !important;
            }
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps(params) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const routerParams = params;
  let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion/${routerParams.query.id}`;
  const res = await fetch(url);

  const product = await res.json();
  if (!product) {
    return {
      notFound: true,
    };
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      product: product[0],
    },
  };
}

export default PromotionSpecific;
