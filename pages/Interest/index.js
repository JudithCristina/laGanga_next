import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AppLayout from "../../componentes/AppLayout";
import CardPromotion from "../../componentes/Promotions/CardPromotion";
const Interest = () => {
  return (
    <>
      <AppLayout>
        <p>hola estos prouductos me interesan</p>
      </AppLayout>
      <style jsx>
        {`.box-mujer-interest{
            height: 60vh;
            position: relative;
        }

        .mujer-interest{
            position: absolute ;
            bottom: -3.5%;
            left: 50%;
            transform: translateX(-50%);

        }

        .subtitle-interest{
            color: #f31454;
            padding-top: 3rem;
        }


        @media (max-width: 769px) {
            .box-mujer-interest{
                height: 70vh;
            }

            .mujer-interest{
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
