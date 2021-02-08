import React, { useEffect, useState } from "react";
import Footer from "./../Footer";

import FilterCategory from "./../FilterCategory/FilterCategory";
import HeaderNuevo from "../Header/HeaderNuevo";
import MenuMobile from "../Header/MenuMobile";

const AppLayout = ({ children, promotionsData }) => {
  const [menuBurgerOpen, setmenuBurgerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setmenuBurgerOpen(true);
  };

  const pruebaclic =()=>{
    alert("hice clic")

  }


  return (
    <div className="container-ganga">
      {/* <Header  promotionsData={ promotionsData } ></Header> */}
      <HeaderNuevo
        promotionsData={promotionsData}
       
        pruebaclic={pruebaclic}
      ></HeaderNuevo>
      <FilterCategory />
      <main className="margin-top-4">{children}</main>
      <MenuMobile />
      <Footer />
      {/* {width < breakpoint ? <MenuMobile /> : <Footer />} */}
      <style jsx global>
        {`
          @font-face {
            font-family: "made-tomy-sof-regular";
            src: url(fonts/made-tommy.otf);
          }
          .margin-top-4 {
            margin-top: 4rem;
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

          .box-free-shipping {
            width: auto;
            text-align: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: auto;
          }

          .letter-free,
          .box-letter-free {
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: 800;
          }

          .box-letter-free {
            color: #fff;
            padding: 0rem 0.3rem;
            border-radius: 6%;
          }

          .letter-free-cl-ropa {
            color: #ff8629;
          }

          .letter-free-cl-deporte {
            color: #ff003b;
          }

          .letter-free-cl-tecnologia {
            color: #a74fff;
          }

          .letter-free-cl-calzado {
            color: #a74fff;
          }

          .letter-free-cl-hogar {
            color: #2fc33a;
          }

          .letter-free-cl-juguete {
            color: #ff3552;
          }

          .letter-free-cl-electroHogar {
            color: #3890e3;
          }

          .letter-free-cl-belleza {
            color: #ff8dd1;
          }

          .letter-free-cl-nuevo {
            color: #ffdb40;
          }

          .letter-free-cl-escolarOficina {
            color: #7e4fff;
          }

          .box-letter-free-bg-ropa {
            background-color: #ff8629;
          }

          .box-letter-free-bg-deporte {
            background-color: #ff003b;
          }

          .box-letter-free-bg-tecnologia {
            background-color: #a74fff;
          }

          .box-letter-free-bg-calzado {
            background-color: #a74fff;
          }

          .box-letter-free-bg-hogar {
            background-color: #2fc33a;
          }

          .box-letter-free-bg-juguete {
            background-color: #ff3552;
          }

          .box-letter-free-bg-electroHogar {
            background-color: #3890e3;
          }

          .box-letter-free-bg-belleza {
            background-color: #ff8dd1;
          }

          .box-letter-free-bg-nuevo {
            background-color: #ffdb40;
          }

          .box-letter-free-bg-escolarOficina {
            background-color: #7e4fff;
          }
          .box-x {
            border-radius: 6%;
            padding: 0.3rem 0.5rem;
            font-weight: 800;
            font-size: 1rem;
            line-height: 1.05rem;
            text-align: center;
            color: red;
            width: 100%;
          }

          .box-x-ropa {
            color: #ff8629;
            border: 2px solid #ff8629;
          }

          .box-x-deporte {
            color: #ff003b;
            border: 2px solid #ff003b;
          }

          .box-x-tecnologia {
            color: #a74fff;
            border: 2px solid #a74fff;
          }

          .box-x-calzado {
            color: #a74fff;
            border: 2px solid #a74fff;
          }

          .box-x-hogar {
            color: #2fc33a;
            border: 2px solid #2fc33a;
          }

          .box-x-juguete {
            color: #ff3552;
            border: 2px solid #ff3552;
          }

          .box-x-electroHogar {
            color: #3890e3;
            border: 2px solid #3890e3;
          }

          .box-x-belleza {
            color: #ff8dd1;
            border: 2px solid #ff8dd1;
          }

          .box-x-nuevo {
            color: #ffdb40;
            border: 2px solid #ffdb40;
          }

          .box-x-escolarOficina {
            color: #7e4fff;
            border: 2px solid #7e4fff;
          }

          .box-porcent {
            font-weight: 800;
            font-size: 1.6rem;
            color: red;
          }

          .box-porcent-ropa {
            color: #ff8629;
          }

          .box-porcent-deporte {
            color: #ff003b;
          }

          .box-porcent-tecnologia {
            color: #a74fff;
          }

          .box-porcent-calzado {
            color: #a74fff;
          }

          .box-porcent-hogar {
            color: #2fc33a;
          }

          .box-porcent-juguete {
            color: #ff3552;
          }

          .box-porcent-electroHogar {
            color: #3890e3;
          }

          .box-porcent-belleza {
            color: #ff8dd1;
          }

          .box-porcent-nuevo {
            color: #ffdb40;
          }

          .box-porcent-escolarOficina {
            color: #7e4fff;
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
              max-width: 1500px !important;
              margin: auto;
            }
          }

          @media (max-width: 769px) {
            html {
              font-size: 4.6vw;
            }
            .margin-top-4 {
              margin-top: 0rem;
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
    </div>
  );
};

export default AppLayout;
