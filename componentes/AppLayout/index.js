import React, { useEffect, useState } from "react";
import Footer from "./../Footer";

import FilterCategory from "./../FilterCategory/FilterCategory";
import HeaderNuevo from "../Header/HeaderNuevo";
import MenuMobile from "../Header/MenuMobile";
import Sidedrawer from "../Header/MenuBurger/Sidedrawer";
import Backdrop from "../Header/MenuBurger/Backdrop";
import style,{globalStyles} from './style'
// import fondo2 from "../../public/images/bg-ganga.svg"
import { Parallax, Background } from "react-parallax";

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
        <Parallax
          blur={0}
          bgImage="../../images/bg-ganga.svg"
          bgImageAlt="the cat"
          strength={100}
        ></Parallax>
        <main className="margin-top-4">{children}</main>
        <MenuMobile />
        <Footer />
        {/* {width < breakpoint ? <MenuMobile /> : <Footer />} */}
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default AppLayout;
