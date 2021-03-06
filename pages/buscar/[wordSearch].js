import React, { useEffect, useState, useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import AppLayout from "../../componentes/AppLayout";
import CardPromotion from "../../componentes/Promotions/CardPromotion";
import Image from "next/image";

const wordSearch = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion/search/user?search=${router.query.wordSearch}`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setProducts([]);
        } else {
          setProducts(data);
        }
      })
      .catch((e) => {
        console.log(e, "error:)");
      });
  };

  useEffect(() => {
    getProducts();
  }, [router.query.wordSearch]);

  return (
    <AppLayout>
      <Container className="container-ganga margin-box">
        <div className="box-search">
          <h4>Resultados de búsqueda: {router.query.wordSearch}</h4>
        </div>
        {products.length !== 0 ? (
          <Row className="justify-content-md-center ">
            {products.map((product) => (
              <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  mb-4">
                <CardPromotion product={product} key={product._id} />
              </div>
            ))}
          </Row>
        ) : (
          <>
            <div className="box-mujer-interest">
              <div className="box-gangaDelDia">
                <h1 className="subtitle-ganga">
                  No encontramos promociones relacionados a tu búsqueda, intenta
                  con otro término.
                </h1>
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
          </>
        )}
      </Container>
      <style jsx>
        {`
          .box-search {
            margin: 1.5rem 0rem 1rem 0rem;
          }
        `}
      </style>
    </AppLayout>
  );
};

export default wordSearch;
