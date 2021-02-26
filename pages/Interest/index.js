import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AppLayout from "../../componentes/AppLayout";
import CardPromotion from "../../componentes/Promotions/CardPromotion";
import Image from "next/image";
const Interest = ({ addInterest, deleteInterest }) => {
  const [arrayMeInterest, setArrayMeInterest] = useState([]);

  useEffect(() => {
    setArrayMeInterest(JSON.parse(localStorage.getItem("arrayInterestLocal")));
  }, [deleteInterest]);

  return (
    <>
      <AppLayout>
        <Container className="mb-3 margin-box container-ganga">
          {/* <Row className="justify-content-md-center "> */}
          {arrayMeInterest.length == 0 ? (
            <div className="box-mujer-interest">
              <div className="box-gangaDelDia">
                <h1 className="title-ganga pt-5">
                  Aún no tienes ofertas favoritas
                </h1>
              </div>
              <div className="mujer-interest">
                <Image
                  src="/images/mujer.png"
                  alt="banner"
                  width={400}
                  height={300}
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
                      deleteInterest={deleteInterest}
                    />
                  </div>
                ))}
              </Row>
            </>
          )}
          {/* </Row> */}
        </Container>
      </AppLayout>

    </>
  );
};

export default Interest;
