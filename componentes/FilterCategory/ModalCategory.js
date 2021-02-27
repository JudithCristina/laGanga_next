import React, { useState } from "react";

import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import { Button, Modal } from "react-bootstrap";
import style, { globalStyles } from "./style";
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
            <h5 className="text-categorias">CATEGORIAS</h5>
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
      <style jsx>{style}</style>
    </Container>
  );
};

export default ModalCategory;
