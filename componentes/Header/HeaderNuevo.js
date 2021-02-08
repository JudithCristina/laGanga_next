import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../ActiveLink";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const HeaderNuevo = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const filterForm = (e) => {
    e.preventDefault();
    const searchFilter = searchWord.toLowerCase();
    if (searchFilter === "") {
      return router.push("/");
    } else {
      router.push("/buscar/" + searchFilter);
    }
  };

  const goToRoute = (e) => {
    e.preventDefault();
    return history.push("/interest");
  };
  return (
    <div className="container-ganga">
      <nav className="navbar-ganga">
        <Link href="/" prefetch>
          <a className="logo-ganga">
            <Image
              src="/images/logo-ganga.svg"
              alt="logo la ganga"
              width={120}
              height={50}
            />
          </a>
        </Link>

        <div className="burger-laganga" onClick={props.pruebaclic} >
          <Image
            src="/images/menu-icons/burger-menu.svg"
            alt="burger la ganga"
            width={35}
            height={35}
          />
        </div>
        <div className="box-search-desktop">
          <form className="search-container " onSubmit={filterForm}>
            <input
              type="text"
              type="search"
              placeholder="Ingresa lo que estas buscando"
              aria-label="Search"
              onChange={(e) => setSearchWord(e.target.value)}
              value={searchWord}
              autoComplete="off"
              autoCorrect="off"
              maxLength="100"
              className="form-control input-search-menu"
            />
            <button
              type="button"
              className="btn btn-outline-success btn-search-menu"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>

        <div className="box-search-container">
          <ActiveLink href="/Interest" activeClassName="is-active">
            <a className="btn-like-menu">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </ActiveLink>
          <ActiveLink href="/" activeClassName="is-active">
            <a className="btn-like-menu">
              <FontAwesomeIcon icon={faUserCircle} />
            </a>
          </ActiveLink>
        </div>
      </nav>
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
      <style jsx>
        {`
          .navbar-ganga {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 0.7rem 2rem;
            background: #fff;
            position: fixed;
            z-index: 9999;
            width: 100%;
            max-width: inherit;
            box-shadow: 0px 1px 10px #999;
            justify-content: space-between;
            top: 0;
          }
          .is-active .btn-like-menu {
            animation: animateHeart 0.3s linear forwards;
            color: #f31454;
          }
          .btn-like-menu {
            cursor: pointer;
            transition: all 0.3s;
            transform-origin: center;
            color: #8c8c8c;
            display: block;
            font-size: 1.4rem;
            margin: 0rem 0.5rem;
          }
          .btn-like-menu:hover,
          .btn-like-menu:focus {
            transform: scale(1.2);
          }
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

          .logo-ganga {
              display: flex;
              justify-content:center
            }

          /* Buscador */
          .search-container {
            width: 20rem;
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

          .input-search-menu {
            border-top-right-radius: 0% !important;
            border-bottom-right-radius: 0% !important;
          }

          .form-control .input-search-menu:focus {
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
          .btn-outline-success:hover {
            color: #fff;
            background-color: #28a745 !important;
            border-color: #28a745;
          }

          .box-search-container {
            display: flex;
            justify-content: space-between;
          }

          .box-search-mobile {
            display: none;
          }
          .box-desktop-form {
            display: block;
          }
          .burger-laganga {
            display: none;
          }

          @media (max-width: 769px) {
            .navbar-ganga {
              position: relative;
              padding: 0.5rem 2rem;
            }
            .btn-like-menu {
              display: none;
            }

            .logo-ganga {
              width: 7rem;
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

            .burger-laganga {
              display: block;
            }
            .box-search-desktop {
              display: none;
            }
            .box-search-container{
              display:none
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeaderNuevo;
