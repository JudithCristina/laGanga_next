import React, { useState } from "react";

// import "./Menu.css";

import { Modal } from "react-bootstrap";
// import { useHistory, Link, Link } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../ActiveLink";

const MenuMobile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const router = useRouter();
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const [valueCategory, setValueCategory] = useState("");
  const [valueMarca, setValueMarca] = useState("");
  // let history = useHistory();

  const handleInputChangeCategory = (e) => {
    setValueCategory(e.target.value);
  };
  const handleInputChangeMarca = (e) => {
    setValueMarca(e.target.value);
  };

  const sendFilter = (e) => {
    history.push(`/category/${valueCategory} ${valueMarca}`);
    setValueCategory("");
    setValueMarca("");
    handleClose();
  };
  return (
    <>
      <nav className="navbar fixed-bottom navbar-light bg-light menu-mobile">
        <Link href="/" class="" exact={true} to="" activeClassName="homeOn">
          {/* <img src={category} alt="" className="menu-off" /> */}
          <div className="home"></div>
        </Link>
        <a className="" onClick={handleShow} activeClassName="categoryOn">
          {/* <img src={category} alt="" className="menu-off" /> */}
          <div className="category"></div>
        </a>

        <Link href="/" className=" " to="/interest" activeClassName="heartOn">
          {/* <img src={heart} alt="" className="menu-off" /> */}
          <div className="heart"></div>
        </Link>
        <Link
          href="/"
          className=""
          to="/en-construccion"
          activeClassName="fireOn"
          active
        >
          {/* <img src={fire} alt="" className="menu-off" /> */}
          <div className="fire"></div>
        </Link>
      </nav>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h5>CATEGORIAS</h5>
        </Modal.Header>
        <Modal.Body>
          <div className="box-filter">
            {/* <h5>CATEGORIAS</h5>
            <hr /> */}
            <div className="icon-category">
              <input
                type="radio"
                id="category_ropa"
                value="ropa"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label className="card-category ropa" htmlFor="category_ropa">
                {/* <figure className="" onClick={filterCategoryRopa}>
                                    <img src={categoryRopa} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_deporte"
                value="deporte"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category deporte"
                htmlFor="category_deporte"
              >
                {/* <figure className="" onClick={filterCategoryDeporte}>
                                    <img src={categoryDeportes} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_tecnologia"
                value="tecnologia"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category tecnologia"
                htmlFor="category_tecnologia"
              >
                {/* <figure className="" onClick={filterCategoryTecnologia}>
                                    <img src={categoryTecnologia} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_calzado"
                value="calzado"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category calzado"
                htmlFor="category_calzado"
              >
                {/* <figure className="" onClick={filterCategoryCalzado}>
                                    <img src={categoryCalzado} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_hogar"
                value="hogar"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label className="card-category hogar" htmlFor="category_hogar">
                {/* <figure className="" onClick={filterCategoryHogar}>
                                    <img src={categoryHogar} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_juguetes"
                value="juguete"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category juguetes"
                htmlFor="category_juguetes"
              >
                {/* <figure className="" onClick={filterCategoryJuguetes}>
                                    <img src={categoryJuguetes} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_electroHogar"
                value="electroHogar"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category electroHogar"
                htmlFor="category_electroHogar"
              >
                {/* <figure className="" onClick={filterCategoryElectroHogar}>
                                    <img src={categoryElectroHogar} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_belleza"
                value="belleza"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category belleza"
                htmlFor="category_belleza"
              >
                {/* <figure className="" onClick={filterCategoryBelleza}>
                                    <img src={categoryBelleza} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_nuevos"
                value="nuevo"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label className="card-category nuevos" htmlFor="category_nuevos">
                {/* <figure className="" onClick={filterCategoryNuevos}>
                                    <img src={categoryNuevos} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_oficina"
                value="escolarOficina"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category oficina"
                htmlFor="category_oficina"
              >
                {/* <figure className="" onClick={filterCategoryOficina}>
                                    <img src={categoryOficina} alt="banner" className="w-70" />
                                </figure> */}
              </label>
            </div>
          </div>
          <div className="box-filter">
            <h5>MARCAS</h5>
            <hr />
            {/* <div>
                            <form className="search-container">
                                <input
                                    className="search-bar"
                                    type="search"
                                    placeholder="Ingresa lo que estas buscando"
                                    aria-label="Search"
                                    autoComplete="off"
                                    maxLength="100"
                                />
                                <button
                                    className="btn  my-2 my-sm-0  search-icon"
                                    type="submit"
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </form>
                        </div> */}
            <div className="box-marcas">
              <input
                type="radio"
                name="marcas"
                value="adidas"
                id="adidas"
                onChange={handleInputChangeMarca}
              />
              <label htmlFor="adidas">Adidas</label>
              <input
                type="radio"
                name="marcas"
                value="fila"
                id="fila"
                onChange={handleInputChangeMarca}
              />
              <label htmlFor="fila">Fila</label>
              <input
                type="radio"
                name="marcas"
                value="puma"
                id="puma"
                onChange={handleInputChangeMarca}
              />
              <label htmlFor="puma">Puma</label>
              <input
                type="radio"
                name="marcas"
                value="casaideas"
                id="casaideas"
                onChange={handleInputChangeMarca}
              />
              <label htmlFor="casaideas">Casaideas</label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="send-filter"
            variant="primary"
            onClick={sendFilter}
          >
            CONTINUAR
          </button>
        </Modal.Footer>
      </Modal>
      <style jsx>
        {`
          :global(.menu-mobile) {
            display: none;
          }
          .heart {
            background-image: url("../../images/menu-icons/heart.svg");
            background-size: contain;
            width: 2rem;
            height: 1.9rem;
            background-repeat: no-repeat;
          }
          .heartOn .heart {
            background-image: url("../../images/menu-icons/heart-on.svg") !important;
            background-size: contain;
            width: 2.2rem;
            height: 2.2rem;
            background-repeat: no-repeat;
          }

          .category {
            background-image: url("../../images/menu-icons/category.svg");
            background-size: contain;
            width: 2rem;
            height: 1.9rem;
            background-repeat: no-repeat;
          }
          .categoryOn .category {
            background-image: url("../../images/menu-icons/category-on.svg") !important;
            background-size: contain;
            width: 2.2rem;
            height: 2.2rem;
            background-repeat: no-repeat;
          }

          .fire {
            background-image: url("../../images/menu-icons/fire.svg");
            background-size: contain;
            width: 2rem;
            height: 1.9rem;
            background-repeat: no-repeat;
          }
          .fireOn .fire {
            background-image: url("../../images/menu-icons/fire-on.svg") !important;
            background-size: contain;
            width: 2.2rem;
            height: 2.2rem;
            background-repeat: no-repeat;
          }

          .home {
            background-image: url("../../images/menu-icons/home-of.svg");
            background-size: contain;
            width: 2rem;
            height: 1.9rem;
            background-repeat: no-repeat;
          }
          .homeOn .home {
            background-image: url("../../public/images/menu-icons/home-on.svg") !important;
            background-size: contain;
            width: 2.2rem;
            height: 2.2rem;
            background-repeat: no-repeat;
          }
          @media (max-width: 769px) {
            :global(.menu-mobile) {
              display: flex;
              justify-content: space-around;
              align-items: center;
              padding: 1.1rem 0rem;
              position: fixed;
              z-index: 99;
              bottom: 0;
            }
          }
          .fixed-filter {
            position: fixed;
            z-index: 100;
            background-color: #f31454;
            top: 200px;
            padding: 1.5rem 0rem;
            cursor: pointer;
          }
          :global(.select-marca) {
            width: 100%;
          }
          .fixed-filter p {
            color: #ffffff;
            font-size: 1.2rem;
            writing-mode: vertical-lr;
            letter-spacing: 0.1rem;
            margin-bottom: 0rem;
            margin-block-start: 0.5em !important;
            margin-block-end: 0.5em !important;
            font-family: "made-tomy-sof-regular";
            font-weight: 600;
          }
          .modal-content {
            padding: 1rem;
          }
          .box-filter h5 {
            font-family: "made-tomy-sof-regular";
            text-align: center;
            color: #000;
          }
          .box-filter {
            margin-top: 1rem;
          }
          hr {
            margin-top: 0.5rem !important;
            border: 0;
            border-top: 1px solid #dedede;
          }
          .icon-category {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          /* .icon-category figure {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-category figure img:hover,
        .icon-category figure img:focus {
          cursor: pointer;
        } */

          .box-marcas {
            padding: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .send-filter {
            background-color: #f31454;
            color: #fff;
            cursor: pointer;
            font-weight: 500;
            padding: 0.5rem 1rem;
            width: 50%;
            outline: none;
            margin: auto;
          }
          .send-filter:hover {
            font-weight: 700;
          }
          .modal-footer {
            justify-content: center !important;
          }
          .w-70 {
            width: 70%;
          }

          .icon-category input {
            margin: 0;
            padding: 0;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
          .icon-category input:active + .card-category {
            opacity: 0.8;
          }
          .icon-category input:checked + .card-category {
            -webkit-filter: none;
            -moz-filter: none;
            filter: none;
            border: 4px solid #000;
            border-radius: 10px;
          }

          .box-marcas input[type="radio"] {
            display: none;
          }
          .box-marcas input[type="radio"]:checked + label {
            padding: 5px 15px;
            background: black;
            border-radius: 2px;
            color: #fff;
          }
          .box-marcas label {
            display: inline-block;
            cursor: pointer;
            color: black;
            position: relative;
            padding: 5px 15px 5px 51px;
            font-size: 1em;
            border-radius: 5px;
            margin: 1rem;
            -webkit-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .box-marcas label:hover {
            background: rgba(0, 0, 255, 0.1);
          }
          .box-marcas label:before {
            content: "";
            display: inline-block;
            width: 17px;
            height: 17px;
            position: absolute;
            left: 15px;
            top: 10px;
            border-radius: 50%;
            background: none;
            border: 2px solid black;
          }
          .box-marcas input[type="radio"]:checked + label:before {
            display: none;
          }
          .card-category {
            cursor: pointer;
            background-repeat: no-repeat;
            background-size: cover;
            height: 6rem;
            width: 6rem;
            margin: 1rem;
            -webkit-transition: all 100ms ease-in;
            -moz-transition: all 100ms ease-in;
            transition: all 100ms ease-in;
            /* -webkit-filter: opacity(0.8);
          -moz-filter: opacity(0.8);
          filter: opacity(0.8); */
          }
          .ropa {
            background-image: url("./../../images/categoria-ropa.png");
          }
          .deporte {
            background-image: url("./../../images/categoria-deportes.png");
          }
          .tecnologia {
            background-image: url("./../../images/categoria-tecnologia.png");
          }

          .calzado {
            background-image: url("./../../images/categoria-calzado.png");
          }
          .hogar {
            background-image: url("./../../images/categoria-hogar.png");
          }
          .juguetes {
            background-image: url("./../../images/categoria-juguetes.png");
          }
          .electroHogar {
            background-image: url("./../../images/categoria-electrohogar.png");
          }
          .belleza {
            background-image: url("./../../images/categoria-belleza.png");
          }
          .nuevos {
            background-image: url("./../../images/categoria-nuevos.png");
          }
          .oficina {
            background-image: url("./../../images/categoria-oficina.png");
          }
          @media (max-width: 769px) {
            .fixed-filter {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default MenuMobile;
