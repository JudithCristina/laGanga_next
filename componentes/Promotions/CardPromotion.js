import React, { useEffect, useState } from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { styleCardPromotion } from "./style";
import ActiveLink from "../ActiveLink";
const CardPromotion = ({
  products,
  product,
  addInterest,
  deleteInterest,
  height,
  width,
}) => {
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
            	product.promocion.nombre.charAt(product.promocion.nombre.length - 1) === "?"
					? `/promotion/${product.promocion.nombre.replace("?", "")}-?id=${product.promocion._id}`
					: `/promotion/${product.promocion.nombre}?id=${product.promocion._id}`
            }

			// href={{
			// 	pathname: `/promotion/[title]/${product.promocion._id}`,
			// 	query: { title: `${product.promocion.nombre}` },
			// }}
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
      <style jsx>{styleCardPromotion}</style>
    </>
  );
};

export default CardPromotion;
