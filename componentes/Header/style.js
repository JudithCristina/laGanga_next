import css from "styled-jsx/css";

export const styleHeaderNuevo = css`
  .navbar-ganga {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.7rem 2rem;
    background: #fff;
    position: relative;
    z-index: 9999;
    width: 100%;
    max-width: inherit;
    box-shadow: 0px 1px 10px #999;
    justify-content: space-between;
    top: 0;
  }
  .box-search-container .is-active {
    animation: animateHeart 0.3s linear forwards !important;
    color: #f31454 !important;
  }

  .box-search-container a {
    cursor: pointer;
    transition: all 0.3s;
    transform-origin: center;
    color: #8c8c8c;
    display: block;
    font-size: 1.4rem;
    margin: 0rem 0.5rem;
  }
  .box-search-container a:hover,
  .box-search-container a:focus {
    transform: scale(1.2);
    color: #f31454;
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
    justify-content: center;
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

  .img-search {
    width: 2rem;
    height: 2rem;
  }
  .img-search img {
    width: 100%;
    height: auto;
  }
  .box-search-filter {
    border: 1px solid #cecece;
    padding: 8px 5px;
    width: 20rem;
    box-shadow: none;
    position: absolute;
    z-index: 10;
    background-color: #fff;
    /* max-height: 20rem; */
    overflow-y: auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    height: auto;
    max-height: 10rem;
  }
  .box-search-filter div {
    display: inline-flex;
    cursor: pointer;
    text-align: left;
  }

  .box-search-filter::-webkit-scrollbar {
    width: 8px; /* Tamaño del scroll en vertical */
    height: 8px; /* Tamaño del scroll en horizontal */
    /* display: none; Ocultar scroll */
  }
  /* Ponemos un color de fondo y redondeamos las esquinas del thumb */
  .box-search-filter::-webkit-scrollbar-thumb {
    background: #28a745;
    border-radius: 4px;
  }
  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  .box-search-filter::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  /* Cambiamos el fondo cuando esté en active */
  .box-search-filter::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }
  /* Ponemos un color de fondo y redondeamos las esquinas del track */
  .box-search-filter::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
  }
  /* Cambiamos el fondo cuando esté en active o hover */
  .box-search-filter::-webkit-scrollbar-track:hover,
  .box-search-filter::-webkit-scrollbar-track:active {
    background: #d4d4d4;
  }

  @media (max-width: 768px) {
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
    .box-search-container {
      display: none;
    }
    .box-search-filter {
      width: 100%;
      max-width: 100%;
      max-height: 15rem;
    }
  }
`;
export const styleMenuMobile = css`
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
  .category:hover {
    background-image: url("../../images/menu-icons/category-on.svg") !important;
    background-size: contain;
    width: 2.2rem;
    height: 2.2rem;
    background-repeat: no-repeat;
  }
  .category:active {
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
    background-image: url("../../images/menu-icons/home-on.svg") !important;
    background-size: contain;
    width: 2.2rem;
    height: 2.2rem;
    background-repeat: no-repeat;
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
  @media only screen and (min-width: 320px) and (max-width: 736px) and (orientation: landscape) {
    .menu-mobile {
      display: none;
    }
  }
`;
