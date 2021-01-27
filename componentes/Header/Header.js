import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
// import clienteAxiosBusiness from "../config/axiosBusiness";
// import clienteAxiosBusinessLocal from "../config/axiosBusinessLocal";

const Header = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const filterForm = (e) => {
    e.preventDefault();
    const searchFilter = searchWord.toLowerCase();
    console.log(searchFilter, "buscador");
    const dataInput = products;
    console.log(dataInput, "dataiinput judith");
    if (searchFilter === "") {
      return router.push("/");
    } else {
      const newData = dataInput.filter((item) => {
        const matchName = item.promocion.nombre
          .toLowerCase()
          .includes(searchFilter);
        const matchCategory = item.promocion.categoria
          .toLowerCase()
          .includes(searchFilter);
        const matchDescription = item.promocion.descripcion
          .toLowerCase()
          .includes(searchFilter);
        return matchName || matchCategory || matchDescription;
      });
      localStorage.setItem("searchFilterLocalStorage", JSON.stringify(newData));
      //  functionFilterSearch(newData);
      router.push("/buscar/" + searchFilter);
    }
  };

  const goToRoute = (e) => {
    e.preventDefault();
    return history.push("/interest");
  };

  const getProducts = async () => {
    let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion-all/user`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setProducts([]);
        } else {
          setProducts(data);
        }
      })
      .catch((e) => {
        console.log(e, "error:)");
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  // const width = window.innerWidth;
  // const breakpoint = 768;

  return (
    <>
      <div className="container-ganga">
        <Navbar bg="light" expand="lg">
          <Link href="/" className="box-logo">
            <a className="logo-ganga">
              <Image
                src="/images/logo-ganga.svg"
                alt="logo la ganga"
                width={120}
                height={50}
                // layout="intrinsic"
              />
            </a>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={props.drawerClickHandler}
          >
            <div className="burger-menu">
              <Image
                src="/images/menu-icons/burger-menu.svg"
                alt="burger menu la ganga"
                width={40}
                height={40}
                // layout="intrinsic"
              />
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto w-100 navbar-desktop">
              <Form inline className="search-container " onSubmit={filterForm}>
                <FormControl
                  type="text"
                  type="search"
                  placeholder="Ingresa lo que estas buscando"
                  aria-label="Search"
                  onChange={(e) => setSearchWord(e.target.value)}
                  value={searchWord}
                  autoComplete="off"
                  autoCorrect="off"
                  maxLength="100"
                  className="input-search-menu"
                />
                <Button variant="outline-success btn-search-menu">
                  <div className="icon-searh-mobile">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </Button>
              </Form>
              <Link
                href="/interest"
                exact="true"
                className="mr-3 "
                activeClassName="is-active"
              >
                <a className="btn-like-menu">
                  <FontAwesomeIcon icon={faHeart} onClick={goToRoute} />
                </a>
              </Link>
              <Link href="/error" className="ml-3 " activeClassName="is-active">
                <a className="btn-like-user">
                  <FontAwesomeIcon icon={faUserCircle} />
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="box-search-mobile">
          <form className="search-container" onSubmit={filterForm}>
            <input
              className="search-bar search-bar-mobile"
              type="search"
              placeholder="Ingresa lo que estas buscando"
              aria-label="Search"
              onChange={(e) => setSearchWord(e.target.value)}
              value={searchWord}
              autoComplete="off"
              autoCorrect="off"
              maxLength="100"
            />
            <button
              className="btn  my-2 my-sm-0  search-icon search-icon-mobile"
              type="submit"
            >
              <FontAwesomeIcon icon={faSearch} className="icon-searh-mobile" />
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          a.box-logo.navbar-brand {
            width: rem !important;
          }

          a.box-logo.navbar-brand img {
            width: 100%;
          }
          .logo-ganga {
            width: 9rem;
          }

          .navbar {
            padding: 1rem 3rem !important;
          }

          /* Buscador */
          .search-container {
            width: 35rem;
            display: flex;
            margin: 0 auto;
          }
          input.search-bar {
            margin: 0 auto;
            width: 100%;
            height: 45px;
            padding: 0 20px;
            font-size: 1rem;
            border: 1px solid #d0cfce;
            outline: none;
            border-radius: 0.25rem 0rem 0rem 0.25rem !important;
            display: block;
          }

          input.search-bar:focus {
            border: 1px solid #c6c6c6;
            transition: 0.4s ease;
            color: #0f0e0e;
          }

          input.search-bar:focus::-webkit-input-placeholder {
            transition: opacity 0.45s ease;
            opacity: 0;
          }

          .form-inline .form-control {
            width: 80% !important;
          }

          /* Firefox < 19 */
          input.search-bar:focus:-moz-placeholder {
            transition: opacity 0.45s ease;
            opacity: 0;
          }

          /* Firefox > 19 */
          input.search-bar:focus::-moz-placeholder {
            transition: opacity 0.45s ease;
            opacity: 0;
          }

          /* Internet Explorer 10 */
          input.search-bar:focus:-ms-input-placeholder {
            transition: opacity 0.45s ease;
            opacity: 0;
          }

          .search-icon {
            color: #f31454 !important;
            background-color: #e9e9e9 !important;
            border: 1px solid #c6c6c6 !important;
            line-height: 1.5;
            border-radius: 0rem 0.25rem 0.25rem 0rem !important;
            transition: color 0.15s;
            float: right !important;
            width: 45px !important;
            height: 45px !important;
            display: block;
          }

          .search-icon:hover {
            color: #e9e9e9 !important;
            background-color: #f31454 !important;
            border: 1px solid #f31454 !important;
          }

          .is-active .btn-like-menu {
            animation: animateHeart 0.3s linear forwards;
            color: #f31454;
          }
          .btn-like-menu {
            /* margin-left: 0.6rem;
          margin-right: 0.8rem;
          font-size: 1.4rem;
           */
            cursor: pointer;
            font-size: 1.4rem;
            transition: all 0.3s;
            transform-origin: center;
            color: #8c8c8c;
          }

          .btn-like-user {
            /* font-size: 1.4rem; */
            cursor: pointer;
            font-size: 1.4rem;
            transition: all 0.3s;
            transform-origin: center;
            color: #8c8c8c;
          }

          .is-active .btn-like-user {
            animation: animateHeart 0.3s linear forwards;
            color: #f31454;
          }
          .btn-like-menu:hover,
          .btn-like-menu:focus {
            /* color: #f31454;
          cursor: pointer; */
            transform: scale(1.2);
          }

          /* ...... */
          @keyframes animateHeart {
            0% {
              transform: scale(0.2);
            }
            40% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }

          .btn-like-user:hover,
          .btn-like-user:focus {
            /* color: #f31454;
          cursor: pointer; */
            transform: scale(1.2);
          }

          .navbar-brand {
            margin-right: 0rem !important;
          }

          .foo img:last-child {
            display: none;
          }

          .foo:hover img:first-child {
            display: none;
          }

          .foo:hover img:last-child {
            display: inline-block;
          }

          .navbar a .heart {
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

          .navbar a .category {
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

          .navbar a .fire {
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

          .navbar a .home {
            background-image: url("../../images/menu-icons/home-of.svg");
            background-size: contain;
            width: 2rem;
            height: 1.9rem;
            background-repeat: no-repeat;
          }
          .homeOn .home {
            background-image: url("../../images/menu-icons/home-on.svg") !important;
            background-size: contain;
            width: 2.2rem;
            height: 2.2rem;
            background-repeat: no-repeat;
          }

          .input-search-menu {
            border-top-right-radius: 0% !important;
            border-bottom-right-radius: 0% !important;
          }

          .input-search-menu:focus {
            border-color: #f31454 !important;
            box-shadow: 0 0 0 0.2rem rgb(241 195 211 / 25%) !important;
          }

          .btn-search-menu {
            border-top-left-radius: 0% !important;
            border-bottom-left-radius: 0% !important;
          }

          .btn-search-menu:hover {
            background-color: #ebe2e2 !important;
          }

          .navbar a {
            color: #a0a0a0;
            /* width: 1.8rem!important; */
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar .menu-on {
            color: #f31454 !important ;
            /* background-color: #f31454; */
          }

          input.search-bar-mobile {
            display: none;
          }

          .search-icon-mobile {
            display: none;
          }

          .navbar-desktop {
            display: block;
          }

          .navbar-mobile {
            display: none;
          }

          .box-search-mobile {
            display: none;
          }

          .btn-outline-success {
            color: #f31454 !important;
            border-color: #f31454 !important;
          }

          @media (max-width: 769px) {
            .navbar {
              padding: 1rem 2rem !important;
            }

            .btn-like-menu {
              display: none;
            }

            .logo-ganga {
              width: 7rem;
            }

            .card-category {
              width: 4rem !important;
              height: 4rem !important;
              margin: 0.5rem !important;
            }
            .box-filter h5 {
              text-align: start !important;
            }
            .box-marcas {
              justify-content: start !important;
              padding: 0rem !important;
            }
            .box-marcas label {
              margin: 0rem !important;
            }

            .search-container {
              width: 100%;
            }
            .box-search-mobile {
              display: block;
              width: auto;
              background-color: red;
              padding: 0.2rem 0rem;
            }
            .box-search-mobile form {
              width: 90%;
              margin: auto;
            }

            input.search-bar-mobile {
              position: relative;
              display: block;
              height: 2rem;
              margin: auto;
              padding: 0 20px;
              font-size: 0.9rem;
              border: 1px solid #d0cfce;
              outline: none;
              border-radius: 0.85rem 0rem 0rem 0.85rem !important;
            }

            .search-icon-mobile {
              border-radius: 0rem 0.85rem 0.85rem 0rem !important;
              height: 2rem !important;
              position: relative;
            }

            .search-icon-mobile {
              display: block;
            }

            .icon-searh-mobile {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .icon-searh-mobile {
              display: block;
            }

            svg.svg-inline--fa.fa-search.fa-w-16.icon-searh-mobile {
              position: relative;
              left: -0.5rem;
            }

            .burger-menu {
              width: 2rem;
            }

            .navbar-desktop {
              display: none !important;
            }
            .navbar-mobile {
              display: block !important;
            }
          }

          @media (max-width: 420px) {
            svg.svg-inline--fa.fa-search.fa-w-16.icon-searh-mobile {
              position: relative;
              left: -0.1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
