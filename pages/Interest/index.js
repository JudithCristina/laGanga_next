import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AppLayout from "../../componentes/AppLayout";
import CardPromotion from "../../componentes/Promotions/CardPromotion";
import Image from "next/image";
const Interest = ({ addInterest }) => {
  const [arrayMeInterest, setArrayMeInterest] = useState([]);

  useEffect(() => {
    setArrayMeInterest(JSON.parse(localStorage.getItem("arrayInterestLocal")));
  }, []);

  return (
    <>
      <AppLayout>
        <Container className="mb-3 margin-box container-ganga">
          {/* <Row className="justify-content-md-center "> */}
          {arrayMeInterest.length == 0 ? (
            <div className="box-mujer-interest">
              <div className="box-gangaDelDia">
                <h1 className="title-ganga pt-5">Aún no tienes ofertas favoritas</h1>
              </div>
              <div className="mujer-interest">
              <Image
                src="/images/mujer.png"
                alt="banner"
                // layout="fill"
                width={400}
                height={300}
                  // layout="responsive"
              />
              </div>
            </div>
          ) : (
            <>
              <div className="box-gangaDelDia">
                <h1 className="title-ganga">Promociones que te interesan</h1>
                <h5 className="subtitle-ganga">
                  Aprovecha las mejores marcas, con el descuento que tú deseas.
                </h5>
              </div>
              <Row className="justify-content-md-center ">
                {arrayMeInterest.map((product) => (
                  <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  mb-4">
                    <CardPromotion
                      product={product}
                      products={JSON.parse(
                        localStorage.getItem("arrayInterestLocal")
                      )}
                      key={product._id}
                      addInterest={addInterest}
                    />
                  </div>
                ))}
              </Row>
            </>
          )}
          {/* </Row> */}
        </Container>
      </AppLayout>
      <style jsx>
        {`
          .box-mujer-interest {
            height: 70vh;
            position: relative;
          }

          .mujer-interest {
            position: absolute;
            bottom: -3.5%;
            left: 50%;
            transform: translateX(-50%);
          }

          .subtitle-interest {
            color: #f31454;
            padding-top: 3rem;
          }

          @media (max-width: 769px) {
            .box-mujer-interest {
              height: 70vh;
            }

            .mujer-interest {
              width: 100%;
              bottom: 0%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Interest;
