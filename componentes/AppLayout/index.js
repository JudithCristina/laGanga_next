import React, { useEffect, useState } from "react";
import Footer from "./../Footer";

import FilterCategory from "./../FilterCategory/FilterCategory";
import HeaderNuevo from "../Header/HeaderNuevo";
import MenuMobile from "../Header/MenuMobile";
import Sidedrawer from "../Header/MenuBurger/Sidedrawer";
import Backdrop from "../Header/MenuBurger/Backdrop";

const AppLayout = ({ children, promotionsData }) => {
  const [menuBurgerOpen, setmenuBurgerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setmenuBurgerOpen(true);
  };

  const pruebaclic = () => {
    setmenuBurgerOpen(true);
  };

  const ocultarMenuMobile = () => {
    console.log("cerraooo");
    setmenuBurgerOpen(false);
  };
  let backdrop;

  return (
    <>
      <div className="container-ganga">
        {/* <Header  promotionsData={ promotionsData } ></Header> */}
        <HeaderNuevo
          promotionsData={promotionsData}
          pruebaclic={pruebaclic}
          ocultarMenuMobile={ocultarMenuMobile}
        ></HeaderNuevo>
        <Sidedrawer
          menuBurgerOpen={menuBurgerOpen}
          ocultarMenuMobile={ocultarMenuMobile}
        ></Sidedrawer>
        <FilterCategory />
        <main className="margin-top-4">{children}</main>
        <MenuMobile />
        <Footer />
        {/* {width < breakpoint ? <MenuMobile /> : <Footer />} */}
      </div>
      <style jsx global>
        {`
          .margin-box {
            padding: 0rem 5rem !important;
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

          .box-otro {
            border-radius: 6%;
            padding: 0.3rem 0.5rem;
            font-weight: 800;
            font-size: 1rem;
            line-height: 1.05rem;
            text-align: center;
            color: red;
            width: 100%;
          }

          .box-otro-ropa {
            color: #ff8629;
            border: 2px solid #ff8629;
          }

          .box-otro-deporte {
            color: #ff003b;
            border: 2px solid #ff003b;
          }

          .box-otro-tecnologia {
            color: #a74fff;
            border: 2px solid #a74fff;
          }

          .box-otro-calzado {
            color: #a74fff;
            border: 2px solid #a74fff;
          }

          .box-otro-hogar {
            color: #2fc33a;
            border: 2px solid #2fc33a;
          }

          .box-otro-juguete {
            color: #ff3552;
            border: 2px solid #ff3552;
          }

          .box-otro-electroHogar {
            color: #3890e3;
            border: 2px solid #3890e3;
          }

          .box-otro-belleza {
            color: #ff8dd1;
            border: 2px solid #ff8dd1;
          }

          .box-otro-nuevo {
            color: #ffdb40;
            border: 2px solid #ffdb40;
          }

          .box-otro-escolarOficina {
            color: #7e4fff;
            border: 2px solid #7e4fff;
          }
        `}
      </style>
    </>
  );
};

export default AppLayout;
