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
  if (menuBurgerOpen) {
    return (backdrop = (
      <>
        <Backdrop ocultarMenuMobile={ocultarMenuMobile} />
        <Sidedrawer
          menuBurgerOpen={menuBurgerOpen}
          ocultarMenuMobile={ocultarMenuMobile}
        />
      </>
    ));
  } else {
    console.log("no hay nada amiga");
  }

  return (
    <div className="container-ganga">
      {/* <Header  promotionsData={ promotionsData } ></Header> */}
      <HeaderNuevo
        promotionsData={promotionsData}
        pruebaclic={pruebaclic}
        ocultarMenuMobile={ocultarMenuMobile}
      ></HeaderNuevo>

      <FilterCategory />
      <main className="margin-top-4">{children}</main>
      <MenuMobile />
      <Footer />
      {/* {width < breakpoint ? <MenuMobile /> : <Footer />} */}
    </div>
  );
};

export default AppLayout;
