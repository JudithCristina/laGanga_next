import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "./../ActiveLink";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { styleHeaderNuevo } from "./style";

const HeaderNuevo = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const router = useRouter();

  const getSearchProducts = async (search) => {
    let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion/search/user?search=${search}`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setSearchProducts([]);
        } else {
          console.log(data);
          setSearchProducts(data);
        }
      })
      .catch((e) => {
        console.log(e, "error:)");
      });
  };

  console.log(searchProducts, "buscador");
  const filterForm = (e) => {
    e.preventDefault();
    const searchFilter = searchWord.toLowerCase();
    if (searchFilter !== "") {
      router.push("/buscar/" + searchFilter);
    }
  };

  const SearchWordFunction = (e) => {
    e.preventDefault();
    const searchFilter = e.target.value.toLowerCase();
    console.log(searchFilter, "ojitos");
    setSearchWord(e.target.value);
    if (searchFilter.length !== 0) {
      getSearchProducts(searchFilter);
      // router.push("/buscar/" + searchFilter);
    } else {
      setSearchProducts([]);
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

        <div className="burger-laganga" onClick={props.pruebaclic}>
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
              type="search"
              placeholder="Ingresa lo que estas buscando"
              aria-label="Search"
              onChange={SearchWordFunction}
              value={searchWord}
              autoComplete="off"
              autoCorrect="off"
              maxLength="100"
              className="form-control input-search-menu"
            />
            <button
              type="submit"
              className="btn btn-outline-success btn-search-menu"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {searchProducts.length !== 0 ? (
            <div className="box-search-filter">
              {searchProducts.map((product) => (
                <Link
                  // href={`/promotion/[title]`}
                  // as={`/promotion/${product.promocion._id}`}
                  href={`/promotion/[title]?id=${product.promocion._id}`}
                  as={
                    product.promocion.nombre.charAt(
                      product.promocion.nombre.length - 1
                    ) === "?"
                      ? `/promotion/${product.promocion.nombre.replace(
                          "?",
                          ""
                        )}-?id=${product.promocion._id}`
                      : `/promotion/${product.promocion.nombre}?id=${product.promocion._id}`
                  }
                >
                  <div>
                    <div className="img-search">
                      <a>
                        <img
                          src={
                            product.imagenes[1].typeImage === "M"
                              ? product.imagenes[1].url
                              : product.imagenes[0].url
                          }
                          alt=""
                          className="pr-1"
                        />
                      </a>
                    </div>
                    <div>{product.promocion.nombre}</div>
                    {/* <CardPromotion product={product} key={product._id} /> */}
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="box-search-container">
          <ActiveLink href="/Interest" activeClassName="is-active">
            <a className="btn-like-menu">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </ActiveLink>
          <ActiveLink href="/" activeClassName="is-active">
            <a className="btn-login-menu">
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
            onChange={SearchWordFunction}
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
        {searchProducts.length !== 0 ? (
          <div className="box-search-filter">
            {searchProducts.map((product) => (
              <Link
              // href={`/promotion/[title]`}
              // as={`/promotion/${product.promocion._id}`}
              href={`/promotion/[title]?id=${product.promocion._id}`}
              as={
                product.promocion.nombre.charAt(
                  product.promocion.nombre.length - 1
                ) === "?"
                  ? `/promotion/${product.promocion.nombre.replace(
                      "?",
                      ""
                    )}-?id=${product.promocion._id}`
                  : `/promotion/${product.promocion.nombre}?id=${product.promocion._id}`
              }
            >
              <div className="">
                <div className="img-search">
                  <img
                    src={
                      product.imagenes[1].typeImage === "M"
                        ? product.imagenes[1].url
                        : product.imagenes[0].url
                    }
                    alt=""
                    className="pr-1"
                  />
                </div>
                <div>{product.promocion.nombre}</div>
                {/* <CardPromotion product={product} key={product._id} /> */}
              </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      <style jsx>{styleHeaderNuevo}</style>
    </div>
  );
};

export default HeaderNuevo;
