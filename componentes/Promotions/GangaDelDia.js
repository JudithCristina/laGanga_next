import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardPromotion from "../../componentes/Promotions/CardPromotion";
import PreloaderCards from "../Preloader/PreloaderCards";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 991 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 2,
  },

  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const GangaDelDia = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);


  //  useEffect(() => {
  //   // getBanner();
  //   setWidth(window.innerWidth)
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const getProductsWeek = async (props) => {
    let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion/new/user`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setProducts([]);
        } else {
          setProducts(data.nuevasPromociones);
        }

        setLoading(false);
      })
      .catch((e) => {
        console.log(e, "error");
      });
  };
  useEffect(() => {
    if (isLoading === false) {
      setLoading(true);
    }
    getProductsWeek();

  }, []);
  return (
    <>
      <div className="margin-box">
        <div className="box-gangaDelDia">
          <h1 className="title-ganga">Ofertas de la Semana</h1>
          <h5 className="subtitle-ganga">
            Aprovecha las mejores marcas, con el descuento que tú deseas.
          </h5>
        </div>
        {isLoading && <PreloaderCards widthCard={props.width} />}
        {!isLoading && (
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2800}
            deviceType={props.deviceType}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={false}
            draggable={false}
            showDots={false}
          >
            {products.map((product) => (
              <div className="item-carousel" key={product._id}>
                <div className="  mb-4">
                  <CardPromotion
                    product={product}
                    products={products}
                    addInterest={props.addInterest}
                    deleteInterest={props.deleteInterest}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <style jsx>
        {`
          .item-carousel {
            width: 90%;
          }
        `}
      </style>
    </>
  );
};

export default GangaDelDia;
