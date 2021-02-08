import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const CarouselBanner = () => {
   const [width, setWidth] = useState(0);
  const [bannerImage, setBannerImage] = useState([]);
  const breakpoint = 768;
  useEffect(() => {
    setWidth(window.innerWidth);
    getBanner();
  }, []);
  console.log(width,"holitasjuju")
  const getBanner = async () => {
    let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/banner/get-all/user`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setBannerImage([]);
        } else {
          setBannerImage(data);
        }
      })
      .catch((e) => {
        console.log(e, "error:)");
      });
  };

  return (
    <>
      <Carousel>
        {bannerImage.map((item) => (
          <Carousel.Item>
            {width < breakpoint ? (
              <img
                className="d-block w-100"
                src={
                  item.imagen[0].typeImage === "BM"
                    ? item.imagen[0].url
                    : item.imagen[1].url
                }
                alt="First slide"
              />
            ) : (
              <img
                className="d-block w-100"
                src={
                  item.imagen[0].typeImage === "BD"
                    ? item.imagen[0].url
                    : item.imagen[1].url
                }
                alt="First slide"
              />
            )}
          </Carousel.Item>
        ))}
      </Carousel>
      <style jsx>
        {`
          .box-home {
            /* background-image: url("./../../images/background-ganga.png"); */
            background-size: contain;
            background-repeat: no-repeat;
            margin-bottom: 5rem;
          }
        `}
      </style>
    </>
  );
};

export default CarouselBanner;
