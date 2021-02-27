import React, { useState } from "react";

// import "./Menu.css";

import { Modal } from "react-bootstrap";
// import { useHistory, Link, Link } from "react-router-dom";
import { useRouter } from "next/router";
import ActiveLink from "./../ActiveLink";
import ModalCategory from "../FilterCategory/ModalCategory";
import { styleMenuMobile } from "./style";
const MenuMobile = () => {
  const [modal, setModal] = useState(false);

  const handleShowFilterCategory = () => {
    setModal(true);
  };
  const handleHideFilterCategory = () => {
    setModal(false);
  };



  return (
    <>
      <nav className="navbar fixed-bottom navbar-light bg-light menu-mobile">
        <ActiveLink href="/" activeClassName="homeOn">
          {/* <img src={category} alt="" className="menu-off" /> */}
          <a>
            <div className="home"></div>
          </a>
        </ActiveLink>
        <div onClick={handleShowFilterCategory} activeClassName="categoryOn">
          <div className="category"></div>
        </div>
        <ActiveLink href="/Interest" activeClassName="heartOn">
          {/* <img src={heart} alt="" className="menu-off" /> */}
          <a>
            <div className="heart"></div>
          </a>
        </ActiveLink>
        <ActiveLink href="/ganga-de-la-ganga" activeClassName="fireOn">
          {/* <img src={fire} alt="" className="menu-off" /> */}
          <a>
            <div className="fire"></div>
          </a>
        </ActiveLink>
      </nav>
      {modal ? (
        <ModalCategory
          modalShow={modal}
          handleHideFilterCategory={handleHideFilterCategory}
        />
      ) : null}



      <style jsx>
        {styleMenuMobile}
      </style>
    </>
  );
};

export default MenuMobile;
