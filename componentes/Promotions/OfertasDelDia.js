import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardPromotion from "../../componentes/Promotions/CardPromotion";
import PreloaderCards from "../Preloader/PreloaderCards"
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
const OfertasDelDia = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getProductsDay = async () => {
    let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion/day/user`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setProducts([]);
        } else {
          setProducts(data.promocionesDelDia);
        }
        setLoading(false);
        // setLoading(false);
      })
      .catch((e) => {
        console.log(e, "error");
      });
  };
  useEffect(() => {
    getProductsDay();
     if (isLoading === false) {
      setLoading(true);
    }


  }, []);

  return (
    <>
      <div className="margin-box">
        <div className="box-gangaDelDia">
          <h1 className="title-ganga">Ofertas del día</h1>
        </div>
        {isLoading && <PreloaderCards widthCard={props.width} />}
         {!isLoading && (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={2500}
          deviceType={props.deviceType}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          swipeable={true}
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
              />
               </div>

            </div>
          ))}
        </Carousel>
         )}
      </div>
      <style jsx>
        {`

        .item-carousel  {
            width:90%;
          }

        `}
      </style>
    </>
  );
};

export default OfertasDelDia;
