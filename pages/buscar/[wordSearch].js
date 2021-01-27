import React from "react";
import { Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import AppLayout from "../../componentes/AppLayout";
import CardPromotion from "../../componentes/Promotions/CardPromotion"

const wordSearch = () => {
  const router = useRouter();
  // console.log(localStorage.getItem("searchFilterLocalStorage"));
  // console.log(router, "pruebita");

  return (
    <AppLayout>
      <Container className="container-ganga margin-box">
        <div className="box-search">
          <h4>Resultados de búsqueda: {router.query.wordSearch}</h4>
        </div>
        {JSON.parse(localStorage.getItem("searchFilterLocalStorage")).length !==
        0 ? (
          <Row className="justify-content-md-center ">
            {JSON.parse(localStorage.getItem("searchFilterLocalStorage")).map(
              (product) => (
                <CardPromotion product={product} key={product._id} />
              )
            )}
          </Row>
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </Container>
      <style jsx>
        {`
          .box-search {
            margin: 3rem 0rem;
          }
        `}
      </style>
    </AppLayout>
  );
};

export default wordSearch;
