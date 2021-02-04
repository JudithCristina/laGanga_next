// import App from 'next/app'
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  const [filterSearch, setFilterSearch] = useState([]);
  const [products, setProducts] = useState([]);
  const [menuBurgerOpen, setmenuBurgerOpen] = React.useState(false);
  const [arrayInterest, setArrayInterest] = useState([]);

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
    for (let i = 0; i < products.length; i++) {
      if (products[i].promocion._id === product.promocion._id) {
        registerInterest = product;
        registerInterest.promocion.liked = true;
        product.promocion.liked = true;
      }
    }
    console.log(arrayInterest, "janira3");
    for (let i = 0; i < arrayInterest.length; i++) {
      if (arrayInterest[i].promocion._id === registerInterest.promocion._id) {
        registerInterest.promocion.liked = false;
        arrayInterest[i].promocion.liked = false;
        product.promocion.liked = false;
        return setArrayInterest(
          arrayInterest.filter(
            (product) =>
              product.promocion._id !== registerInterest.promocion._id
          )
        );
      }
    }
    console.log( [...arrayInterest, registerInterest], "judita")
    localStorage.setItem("arrayInterestLocal", JSON.stringify([...arrayInterest, registerInterest]));
  };

  useEffect(() => {
    if (window.localStorage.getItem("arrayInterestLocal") == null) {
      setArrayInterest(
        localStorage.setItem(
          "arrayInterestLocal",
          JSON.stringify(arrayInterest)
        )
      );
    } else {
      setArrayInterest(
        JSON.parse(window.localStorage.getItem("arrayInterestLocal"))
      );
    }

     getProductsDay();
  }, []);

  return (
    <>
      <Component {...pageProps} products={products} addInterest={addInterest} />
      <style jsx global>
        {`
          @font-face {
            font-family: "made-tomy-sof-regular";
            src: url(fonts/made-tommy.otf);
          }

          .font-made-tomy-sof-regular {
            font-family: "made-tomy-sof-regular";
          }

          .title-ganga {
            font-family: "made-tomy-sof-regular";
            font-size: 1.8rem;
            font-weight: 700;
          }

          .subtitle-ganga {
            font-family: "made-tomy-sof-regular";
            font-size: 1rem;
            font-weight: 600;
          }

          .link {
            text-decoration: none !important;
          }

          /* Estilos Judith  :D */

          .container,
          .container-fluid,
          .container-lg,
          .container-md,
          .container-sm,
          .container-xl {
            width: 100%;
            padding-right: 0px !important;
            padding-left: 0px !important;
          }

          .margin-box {
            padding: 0rem 5rem !important;
          }
          /* @media (min-width: 576px){
        .container, .container-lg, .container-md, .container-sm, .container-xl {
          max-width: 900px!important;
      }
      }
      @media (min-width: 900px){
        .container, .container-lg, .container-md, .container-sm, .container-xl {
          max-width: 992px!important;
      }
      }
      @media (min-width: 992px){
        .container, .container-lg, .container-md, .container-sm, .container-xl {
          max-width: 1200px!important;
      }
      }
      @media (min-width: 1200px){
        .container, .container-lg, .container-md, .container-sm, .container-xl {
          max-width: 1500px!important;
      }
      } */
          .carousel-control-next,
          .carousel-control-prev {
            width: 8% !important;
          }

          @media (min-width: 576px) {
            .container-ganga {
              max-width: 900px !important;
              margin: auto;
            }
          }
          @media (min-width: 900px) {
            .container-ganga {
              max-width: 992px !important;
              margin: auto;
            }
          }
          @media (min-width: 992px) {
            .container-ganga {
              max-width: 1200px !important;
              margin: auto;
            }
          }
          @media (min-width: 1200px) {
            .container-ganga {
              max-width: 1800px !important;
              margin: auto;
            }
          }

          @media (max-width: 769px) {
            html {
              font-size: 4.6vw;
            }
            .margin-box {
              padding: 0rem 1rem !important;
            }

            .title-ganga {
              font-size: 1.4rem;
            }

            .subtitle-ganga {
              font-size: 0.8rem;
            }
          }

          /* ANIMACIONES */
          .react-parallax-bgimage {
            position: fixed !important;
            height: 100% !important;
            width: auto !important;
          }

          .fade-in {
            -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
              both;
            animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
          }
          @-webkit-keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .animated {
            -webkit-animation-duration: 3s;
            animation-duration: 3s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
          }
        `}
      </style>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
