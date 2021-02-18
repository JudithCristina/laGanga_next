import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import CardPromotion from "../../componentes/Promotions/CardPromotion";
import PreloaderCards from "../Preloader/PreloaderCards";
const AllItems = ({
  products,
  addInterest,
  like,
  width,
  isLoading,
  deleteInterest,
}) => {
  return (
    <>
      <div className="mb-3 margin-box">
        <div className="box-gangaDelDia">
          <h1 className="title-ganga">Todos</h1>
          <h5 className="subtitle-ganga">
            Aprovecha las mejores marcas, con el descuento que tú deseas.
          </h5>
        </div>
        {isLoading && <PreloaderCards widthCard={width} />}
        {!isLoading && (
          <Row className="justify-content-md-center ">
            {products.map((product) => (
              <div
                className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  mb-4"
                key={product._id}
              >
                <CardPromotion
                  product={product}
                  products={products}
                  addInterest={addInterest}
                  deleteInterest={deleteInterest}
                  like={like}
                />
              </div>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default AllItems;
