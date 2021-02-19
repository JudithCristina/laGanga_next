import React, { useEffect, useState } from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const CardPromotion = ({ products, product, addInterest, deleteInterest, height, width }) => {
  const [timeDays, setTimeDays] = useState(0);
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [agotadoProduct, setAgotadoProduct] = useState("");
  const [timeSeconds, setTimeSeconds] = useState(0);
  const dateFuture = "2020/12/01";
  const MySwal = withReactContent(Swal);
  React.useEffect(() => {
    // let arrayMeInteresa = JSON.parse(
    //   localStorage.getItem("arrayInterestLocal")
    // );

    // for (let i = 0; i < arrayMeInteresa.length; i++) {
    //   if (product.promocion._id === arrayMeInteresa[i].promocion._id) {
    //     product.promocion.liked = true;
    //   }
    // }

    const fechaFinalInputISOString = new Date(
      product.promocion.fechaFinOferta
    ).toISOString();
    const fechaFinalInputInstancia = new Date(fechaFinalInputISOString);
    const fechaFinalOutput = new Date(
      fechaFinalInputInstancia.getTime() +
        fechaFinalInputInstancia.getTimezoneOffset() * 60000
    );
    const fechaInicioInputISOString = new Date(
      product.promocion.fechaInicioOferta
    ).toISOString();
    const fechaInicioInputInstancia = new Date(fechaInicioInputISOString);
    const fechaInicioOutput = new Date(
      fechaInicioInputInstancia.getTime() +
        fechaInicioInputInstancia.getTimezoneOffset() * 60000
    );

    if (fechaInicioOutput.getTime() > new Date()) {
      setAgotadoProduct("Promoción por empezar");
    }
    calculateTimeLeft(fechaFinalOutput);
    const timer = setInterval(() => {
      // calculateTimeLeft(product.fechaFinOferta);
      calculateTimeLeft(fechaFinalOutput);
    }, 1000);
    return () => clearTimeout(timer);
  }, [product]);

  const calculateTimeLeft = (dateFuture) => {
    // let year = new Date().getFullYear();
    const difference = +new Date(dateFuture) - +new Date();
    // console.log(difference, "narda")
    // console.log(new Date(dateFuture), "narda1")
    if (difference > 0) {
      setTimeDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setTimeHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setTimeMinutes(Math.floor((difference / 1000 / 60) % 60));
      setTimeSeconds(Math.floor((difference / 1000) % 60));
    } else {
      setAgotadoProduct("Promoción Agotada");
    }
  };
  const addAlertInterest = (products, product) => {
    MySwal.fire({
      title: "¿Quieres agregar esta promoción en tu lista de intereses?",
      // text: "Una vez eliminado, ¡no podrás recuperar esta promoción",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agregar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        addInterest(products, product);
        MySwal.fire("Agregado!", "Tu promoción ha sido guardada.", "success");
      } else {
        MySwal.fire("Tu promoción está a salvo!");
      }
    });
  };
  const deleteAlertInterest = (products, product) => {
    MySwal.fire({
      title: "¿Quieres eliminar esta promoción de tu lista de intereses?",
      icon: "success",
      // text: "Una vez eliminado, ¡no podrás recuperar esta promoción",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteInterest(products, product);
        MySwal.fire("Eliminado!", "Tu promoción ha sido eliminada.", "success");
      } else {
        MySwal.fire("Tu promoción está a salvo!");
      }
    });
  };

  return (
    <>
      {/* <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  mb-4"> */}
      <div className="card-promotion mb-4">
        <Card className={"border-" + product.promocion.categoria}>
          {/* <div className="tag-offer">
            -{product.descuento}%
          </div> */}

          {product.promocion.tipoDescuento === "freeShipping" ? (
            <div className="box-tag-offer">
              <div className="box-free-shipping">
                <div
                  className={
                    "letter-free" +
                    " " +
                    "letter-free-cl-" +
                    product.promocion.categoria
                  }
                >
                  free
                </div>
                <div
                  className={
                    "box-letter-free" +
                    " " +
                    "box-letter-free-bg-" +
                    product.promocion.categoria
                  }
                >
                  shipping
                </div>
              </div>
            </div>
          ) : product.promocion.tipoDescuento === "2x1" ? (
            <div className="box-tag-offer">
              <div
                className={
                  "box-x" + " " + "box-x-" + product.promocion.categoria
                }
              >
                2x1
              </div>
            </div>
          ) : product.promocion.tipoDescuento === "3x2" ? (
            <div className="box-tag-offer">
              <div
                className={
                  "box-x" + " " + "box-x-" + product.promocion.categoria
                }
              >
                3x2
              </div>
            </div>
          ) : product.promocion.tipoDescuento === "otros" ? (
            <div className="box-tag-offer">
              <div
                className={
                  "box-otro" + " " + "box-otro-" + product.promocion.categoria
                }
              >
                {product.promocion.descuentoOtros}
              </div>
            </div>
          ) : (
            <div className="box-tag-offer">
              <div
                className={
                  "box-porcent" +
                  " " +
                  "box-porcent-" +
                  product.promocion.categoria
                }
              >
                -{product.promocion.descuento}%
              </div>
            </div>
          )}

          <div className="group-btn-like">
            <a>
              <FontAwesomeIcon
                icon={faHeart}
                className={
                  product.promocion.liked ? "btn-like-active" : "btn-like"
                }
                // onClick={() => addInterest(products, product)}
                onClick={() => {
                  product.promocion.liked
                    ? deleteAlertInterest(products, product)
                    : addAlertInterest(products, product);
                }}
              />
            </a>
          </div>
          <div className="box-img-item">
            <Card.Img
              variant="top"
              src={
                product.imagenes[1].typeImage === "M"
                  ? product.imagenes[1].url
                  : product.imagenes[0].url
              }
            />
          </div>

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
            <a className="link body-card">
              <div className="group-time-item">
                <FontAwesomeIcon icon={faClock} />
                {agotadoProduct === "" ? (
                  <div className=" item-chronometer">
                    {timeDays}D {timeHours}H {timeMinutes}M
                  </div>
                ) : (
                  <div className=" item-chronometer">{agotadoProduct}</div>
                )}
              </div>
              <Card.Body>
                <div className="title-item">
                  {" "}
                  <Card.Title>{product.promocion.nombre}</Card.Title>
                </div>
                <div className="subtitle-item">
                  <Card.Text>
                    {`${product.promocion.descripcion.substr(0, 70)}...`}
                  </Card.Text>
                </div>
              </Card.Body>
            </a>
          </Link>
        </Card>
      </div>
      <style jsx>
        {`
          .item-carousel div {
            max-width: 100% !important;
          }

          .box-img-item {
            background: #f0f0f0;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          :global(.border-ropa) {
            border: 2px solid #ff8629 !important;
          }
          :global(.border-deporte) {
            border: 2px solid #ff003b !important;
          }
          :global(.border-tecnologia) {
            border: 2px solid #a74fff !important;
          }
          :global(.border-calzado) {
            border: 2px solid #a74fff !important;
          }
          :global(.border-hogar) {
            border: 2px solid #2fc33a !important;
          }
          :global(.border-juguete) {
            border: 2px solid #ff3552 !important;
          }
          :global(.border-electroHogar) {
            border: 2px solid #3890e3 !important;
          }
          :global(.border-belleza) {
            border: 2px solid #ff8dd1 !important;
          }
          :global(.border-nuevo) {
            border: 2px solid #ffdb40 !important;
          }
          :global(.border-escolarOficina) {
            border: 2px solid #7e4fff !important;
          }

          :global(.card) {
            max-height: 20rem !important;
            height: 19rem !important;
          }

          :global(.box-img-item img) {
            width: 30%;
            margin: auto;
            padding: 3.5rem 0rem 0rem 0rem;
            display: block;
          }

          .title-item {
            font-family: "made-tomy-sof-regular";
            font-size: 0.8rem!important;
            margin-bottom: 0.2rem !important;
            color: #000 !important;
          }
          .subtitle-item {
            font-family: "made-tomy-sof-regular";
            font-size: 0.7rem;
            color: #08131f !important;
          }

          /* .tag-offer {
            border: 1px solid red;
            position: absolute;
            left: 0.5rem;
            top: 0.5rem;
            color: red;
            border-radius: 5px;
            padding: 0.2rem 0.4rem;
            font-size: 0.7rem;
          } */

          .group-btn-like {
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            font-size: 1rem;
          }

          .btn-share {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }

          :global(.btn-like-active) {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            color: #f31454;
          }

          :global(.btn-like) {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            color: #8c8c8c;
          }

          .btn-like:hover,
          .btn-like:focus {
            color: #f31454;
            cursor: pointer;
          }

          .group-time-item {
            display: flex;
            align-items: center;
            margin-left: 1rem;
            font-size: 0.9rem;
            margin-top: 0.5rem;
          }

          .item-chronometer {
            color: #08131f;
            font-weight: 600;
            margin-left: 0.5rem;
          }
          .item-carousel div {
            max-width: 100% !important;
          }

          .box-tag-offer {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 8%;
            z-index:9
          }
          .box-free-shipping {
            width: auto;
            text-align: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: auto;
          }

          .letter-free,
          .box-letter-free {
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: 800;
          }

          .box-letter-free {
            color: #fff;
            padding: 0rem 0.3rem;
            border-radius: 6%;
          }

          .letter-free-cl-ropa {
            color: #ff8629;
          }

          .letter-free-cl-deporte {
            color: #ff003b;
          }

          .letter-free-cl-tecnologia {
            color: #a74fff;
          }

          .letter-free-cl-calzado {
            color: #a74fff;
          }

          .letter-free-cl-hogar {
            color: #2fc33a;
          }

          .letter-free-cl-juguete {
            color: #ff3552;
          }

          .letter-free-cl-electroHogar {
            color: #3890e3;
          }

          .letter-free-cl-belleza {
            color: #ff8dd1;
          }

          .letter-free-cl-nuevo {
            color: #ffdb40;
          }

          .letter-free-cl-escolarOficina {
            color: #7e4fff;
          }

          .box-letter-free-bg-ropa {
            background-color: #ff8629;
          }

          .box-letter-free-bg-deporte {
            background-color: #ff003b;
          }

          .box-letter-free-bg-tecnologia {
            background-color: #a74fff;
          }

          .box-letter-free-bg-calzado {
            background-color: #a74fff;
          }

          .box-letter-free-bg-hogar {
            background-color: #2fc33a;
          }

          .box-letter-free-bg-juguete {
            background-color: #ff3552;
          }

          .box-letter-free-bg-electroHogar {
            background-color: #3890e3;
          }

          .box-letter-free-bg-belleza {
            background-color: #ff8dd1;
          }

          .box-letter-free-bg-nuevo {
            background-color: #ffdb40;
          }

          .box-letter-free-bg-escolarOficina {
            background-color: #7e4fff;
          }

          .box-x {
            border-radius: 6%;
            padding: 0.3rem 0.5rem;
            font-weight: 800;
            font-size: 1rem;
            line-height: 1.05rem;
            text-align: center;
            color: red;
            width: 100%;
          }

          .box-x-ropa {
            color: #ff8629;
            border: 2px solid #ff8629;
          }

          .box-x-deporte {
            color: #ff003b;
            border: 2px solid #ff003b;
          }

          .box-x-tecnologia {
            color: #a74fff;
            border: 2px solid #a74fff;
          }

          .box-x-calzado {
            color: #a74fff;
            border: 2px solid #a74fff;
          }

          .box-x-hogar {
            color: #2fc33a;
            border: 2px solid #2fc33a;
          }

          .box-x-juguete {
            color: #ff3552;
            border: 2px solid #ff3552;
          }

          .box-x-electroHogar {
            color: #3890e3;
            border: 2px solid #3890e3;
          }

          .box-x-belleza {
            color: #ff8dd1;
            border: 2px solid #ff8dd1;
          }

          .box-x-nuevo {
            color: #ffdb40;
            border: 2px solid #ffdb40;
          }

          .box-x-escolarOficina {
            color: #7e4fff;
            border: 2px solid #7e4fff;
          }

          .box-otro{
            border-radius: 6%;
            padding: 0.3rem 0.5rem;
            font-weight: 800;
            font-size: 1rem;
            line-height: 1.05rem;
            text-align: center;
            color: red;
            width: 100%;
          }

          .box-otro-ropa {
            color: #ff8629;
            border: 2px solid #ff8629;
          }

          .box-otro-deporte {
            color: #ff003b;
            border: 2px solid #ff003b;
          }

          .box-otro-tecnologia {
            color: #a74fff;
            border: 2px solid #a74fff;
          }

          .box-otro-calzado {
            color: #a74fff;
            border: 2px solid #a74fff;
          }

          .box-otro-hogar {
            color: #2fc33a;
            border: 2px solid #2fc33a;
          }

          .box-otro-juguete {
            color: #ff3552;
            border: 2px solid #ff3552;
          }

          .box-otro-electroHogar {
            color: #3890e3;
            border: 2px solid #3890e3;
          }

          .box-otro-belleza {
            color: #ff8dd1;
            border: 2px solid #ff8dd1;
          }

          .box-otro-nuevo {
            color: #ffdb40;
            border: 2px solid #ffdb40;
          }

          .box-otro-escolarOficina {
            color: #7e4fff;
            border: 2px solid #7e4fff;
          }




          .box-porcent {
            font-weight: 800;
            font-size: 1.6rem;
            color: red;
          }

          .box-porcent-ropa {
            color: #ff8629;
          }

          .box-porcent-deporte {
            color: #ff003b;
          }

          .box-porcent-tecnologia {
            color: #a74fff;
          }

          .box-porcent-calzado {
            color: #a74fff;
          }

          .box-porcent-hogar {
            color: #2fc33a;
          }

          .box-porcent-juguete {
            color: #ff3552;
          }

          .box-porcent-electroHogar {
            color: #3890e3;
          }

          .box-porcent-belleza {
            color: #ff8dd1;
          }

          .box-porcent-nuevo {
            color: #ffdb40;
          }

          .box-porcent-escolarOficina {
            color: #7e4fff;
          }

          @media (max-width: 769px) {
            :global(.card) {
              flex-direction: row !important;
              height: 9rem !important;
              width: 100%;
            }

            .box-tag-offer {
              position: absolute;
              left: 8%;
              transform: translateX(-8%);
              top: 8%;
            }

            .box-free-shipping {
              width: 100%;
            }

            .box-porcent {
              position: relative;
              left: 15%;
            }

            .box-x {
              position: relative;
              left: 25%;
            }
            :global(.box-img-item img) {
              width: 40%;
              padding: 0rem;
              position: relative;
              top: 10%;
            }

            .box-img-item {
              width: 40%;
              height: 7.2rem;
            }

            .body-card {
              width: 60%;
              height: 55%;
            }

            .group-time-item {
              font-size: 0.6rem;
              position: absolute;
              bottom: 3%;
              left: 1%;
              margin-left: 0rem;
            }

            .item-chronometer {
              margin-left: 0.2rem;
            }

            :global(.card-title){
              font-size: 1rem !important;
            }

            .subtitle-item {
              font-size: 0.7rem;
            }
            :global(.card-body) {
              /* position: relative;
            top: 6%; */
              padding: 1.8rem 1rem 1rem 0.8rem !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default CardPromotion;
