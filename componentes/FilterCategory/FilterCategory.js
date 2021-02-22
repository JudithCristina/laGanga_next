import React, { useState } from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import ModalCategory from "./ModalCategory";

// import clienteAxiosBusinessLocal from "./../config/axiosBusinessLocal";

const FilterCategory = () => {
  // const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShowFilterCategory = () => {
    console.log("trueeeee");
    setShow(true);
  };

  return (
    <div>
      <Container className="container-ganga">
        <div
          className="fixed-filter"
          onClick={() => setModal(modal ? false : <ModalCategory />)}
        >
          <p>CATEGORIAS</p>
        </div>
        {modal}
      </Container>
      <style jsx>
        {`
          .fixed-filter {
            position: fixed;
            z-index: 100;
            background-color: #f31454;
            top: 200px;
            padding: 1.5rem 0rem;
            cursor: pointer;
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
        `}
      </style>
    </div>
  );
};

export default FilterCategory;
