// import App from 'next/app'
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style, { globalStyles } from "./style";

function MyApp({ Component, pageProps }) {
  const [filterSearch, setFilterSearch] = useState([]);
  const [products, setProducts] = useState([]);
  const [menuBurgerOpen, setmenuBurgerOpen] = React.useState(false);
  const [arrayInterest, setArrayInterest] = useState([]);
  const [widthBanner, setWidthBanner] = useState(0);
  const [heightBanner, setHeightBanner] = useState(0); // default width, detect on server.
  const [isLoading, setLoading] = useState(true);
  const handleResize = () => {
    setWidthBanner(window.innerWidth)
    setHeightBanner(window.innerHeight);
  };
  const getProductsDay = async () => {
    let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion-all/user`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setProducts([]);
          // setTotalPromotions(0)
        } else {
          // setProducts(res.data.promocionesGeneral);
          // setProducts(res.data.promociones);
          setProducts(data);

          setLoading(false);
          // setTotalPromotions(res.data.totalDePromociones)
        }
        // setLoading(false);
      })
      .catch((e) => {
        console.log(e, "error:)");
      });
  };
  const addInterest = (products, product) => {
    let registerInterest;
    console.log(products, "productos:) 0");
    console.log(product, "productos:) 1");
    for (let i = 0; i < products.length; i++) {
      if (products[i].promocion._id === product.promocion._id) {
        registerInterest = product;
        registerInterest.promocion.liked = true;
        product.promocion.liked = true;
        products[i].promocion.liked = true
      }
    }
    if (arrayInterest.length === 0) {
      console.log("hola primer clic");
      setArrayInterest([...arrayInterest, registerInterest]);
      localStorage.setItem(
        "arrayInterestLocal",
        JSON.stringify([...arrayInterest, registerInterest])
      );
    } else if (arrayInterest.length >= 1) {
      console.log("Mi segundo me gusta");
      for (let i = 0; i < arrayInterest.length; i++) {
        if (arrayInterest[i].promocion._id !== registerInterest.promocion._id) {
          setArrayInterest([...arrayInterest, registerInterest]);
          localStorage.setItem(
            "arrayInterestLocal",
            JSON.stringify([...arrayInterest, registerInterest])
          );
        }
      }
    }
  };

  const deleteInterest = (products, product) => {
    let registerInterest;
    console.log(products, "productos:) 0");
    console.log(product, "productos:) 1");
    for (let i = 0; i < products.length; i++) {
      if (products[i].promocion._id === product.promocion._id) {
        registerInterest = product;
        registerInterest.promocion.liked = false;
        product.promocion.liked = false;
        products[i].promocion.liked = false;
      }
    }
    console.log(registerInterest, "nueva promocion");
    console.log(arrayInterest.length, "nuevoRegistro");
    console.log(arrayInterest, "judita-1");
    if (arrayInterest.length >= 1) {
      console.log("Mi segundo me gusta");
      for (let i = 0; i < arrayInterest.length; i++) {
        if (arrayInterest[i].promocion._id === registerInterest.promocion._id) {
          console.log("eliminar");
          registerInterest.promocion.liked = false;
          arrayInterest[i].promocion.liked = false;
          product.promocion.liked = false;
          setArrayInterest(
            arrayInterest.filter(
              (productFilter) =>
                productFilter.promocion._id !== registerInterest.promocion._id
            )
          );

          localStorage.setItem(
            "arrayInterestLocal",
            JSON.stringify(
              arrayInterest.filter(
                (productFilter) =>
                  productFilter.promocion._id !== registerInterest.promocion._id
              )
            )
          );
        }
      }
    }
  };

  useEffect(() => {
    getProductsDay();
    console.log(window.localStorage.getItem("arrayInterestLocal"), "ojitos");
    if (!window.localStorage.getItem("arrayInterestLocal")) {
      localStorage.setItem("arrayInterestLocal", JSON.stringify(arrayInterest));
    } else {
      setArrayInterest(JSON.parse(localStorage.getItem("arrayInterestLocal")));
    }
    setWidthBanner(window.innerWidth);
    setHeightBanner(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(heightBanner,"height");

  return (
    <>
      <Component
        {...pageProps}
        products={products}
        addInterest={addInterest}
        deleteInterest={deleteInterest}
        width={widthBanner}
        height={heightBanner}
        isLoading={isLoading}
      />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}

export async function getServerSideProps() {
  let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion-all/user`;
  const res = await fetch(url);
  const products = await res.json();
  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
  };
}


export default MyApp;
