import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import AppLayout from "../../../componentes/AppLayout";
import CardPromotion from "../../../componentes/Promotions/CardPromotion";
import { useRouter } from "next/router";
const CategoryAndMarca = () => {
  const [filterCategoriesMarca, setfilterCategoriesMarca] = useState([]);
  const { categoria } = useRouter().query;
  const { marca } = useRouter().query;
  console.log(categoria, "judith router");
  console.log(marca, "judith router");

  const getProductsDay = async () => {
      await clienteAxiosBusinessLocal.get(`/filterCategoryMarca/${categoria}&${marca}`)
      .then((res) => {
          if(res.data.MensajeRespuesta === "NO EXISTEN DATOS" ){
              setfilterCategoriesMarca([]);
          } else {
              setfilterCategoriesMarca(res.data.promocionesFilterCategoriaMarca);
      }
          // setLoading(false);
      })
      .catch((e) => {
          console.log(e, "error");
      });
  };

  useEffect(() => {
      getProductsDay();


  }, [categoria, marca]);
  return (
    <>
      <AppLayout>
        <p>Hola jojoo</p>
      </AppLayout>
    </>
  );
};

export default CategoryAndMarca;
