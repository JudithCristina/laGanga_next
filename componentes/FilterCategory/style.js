import css from "styled-jsx/css";

export default css `
  :global(.select-marca) {
    width: 100%;
  }
  :global(.modal-category-marca) {
    padding-top: 3rem !important;
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
  :global(.close) {
    position: absolute;
    right: 5%;
    top: 5%;
  }
  .text-categorias {
    margin: auto;
  }
  @media (max-width: 769px) {
    .fixed-filter {
      display: none;
    }
    .card-category {
      height: 3.2rem;
      width: 3.2rem;
      margin: 0.3rem;
    }
    .box-filter h5 {
      font-size: 0.9rem;
    }
    .send-filter {
      font-size: 0.7rem !important;
    }
    :global(.select-marca) {
      font-size: 0.8rem !important;
    }
    :global(.modal-body) {
      padding: 0.6rem !important;
    }
    :global(.modal-category-marca) {
      padding-top: 1rem !important;
    }
    .text-categorias {
      font-size: 0.9rem;
    }
  }
`;
