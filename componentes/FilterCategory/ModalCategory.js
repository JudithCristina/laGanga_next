import React, { useState } from "react";

import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const ModalCategory = ({ modalShow, handleHideFilterCategory }) => {
  const router = useRouter();
  const [options1, setOptions1] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [show, setShow] = useState(true);
  const [valueCategory, setValueCategory] = useState("category=''");
  const [valueMarca, setValueMarca] = useState("marca=''");
  const handleClose = () => {
    handleHideFilterCategory();
    setSelectedOption(null);
  };

  console.log(modalShow, "popup");
  // const handleShowFilterCategory = () => {
  //   setShow(true);
  //   optionsMarca();
  // };

  const optionsMarca = async () => {
    let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/marca/get-all/user`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setOptions1([]);
        } else {
          const arrayOptions = [];
          data.forEach((items) => {
            console.log("items", items);
            arrayOptions.push({
              value: items.marca._id,
              label: items.marca.name,
              urlImage: items.imagen[0].url,
            });
          });
          setOptions1(arrayOptions);
        }
      })
      .catch((e) => {
        console.log(e, "error");
      });
  };
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setValueMarca(`marca=${selectedOption.label}`);
  };
  const handleInputChangeCategory = (e) => {
    setValueCategory(`category=${e.target.value}`);
  };
  const sendFilter = (e) => {
    e.preventDefault();
    router.push(`/CategoryAndMarca/${valueCategory}/${valueMarca}`);
    setValueCategory("category=''");
    setValueMarca("marca=''");
    handleClose();
  };
  // const handleInputChangeMarca = (e) => {
  //     setValueMarca(`marca=${e.target.value}`);
  // }
  return (
    <Container className="container-ganga">
      <Modal
        show={modalShow}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-category-marca"
      >
        <Modal.Body>
          <Modal.Header closeButton>
            
              <h5 className="">CATEGORIAS</h5>
          
          </Modal.Header>

          <div className="box-filter">
            <div className="icon-category">
              <input
                type="radio"
                id="category_ropa"
                value="ropa"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category ropa"
                htmlFor="category_ropa"
              ></label>
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
              ></label>
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
              ></label>
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
              ></label>
              <input
                type="radio"
                id="category_hogar"
                value="hogar"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category hogar"
                htmlFor="category_hogar"
              ></label>
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
              ></label>
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
              ></label>
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
              ></label>
              <input
                type="radio"
                id="category_nuevos"
                value="nuevo"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category nuevos"
                htmlFor="category_nuevos"
              ></label>
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
              ></label>
            </div>
          </div>
          <div className="box-filter">
            
            <h5>MARCAS</h5>
            <hr />
            <div className="box-marcas">
              <Select
                value={selectedOption}
                onChange={handleChange}
                name="marca"
                options={options1}
                className="select-marca"
                placeholder="Selecciona una marca"
                noOptionsMessage={() => "Cargando marcas"}
                required
              />
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
          }
        `}
      </style>
    </Container>
  );
};

export default ModalCategory;
