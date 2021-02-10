import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PreloaderCards from "../Preloader/PreloaderBanner";
const CarouselBanner = ({ bannerImage }) => {
  const [isLoading, setLoading] = useState(true);
  const [widthBanner, setWidthBanner] = useState(0); // default width, detect on server.
  const handleResize = () => setWidthBanner(window.innerWidth);
  // const [bannerImage, setBannerImage] = useState([]);
  const breakpoint = 768;
  // let width
  // if(typeof window !== "undefined"){
  //  width =window.innerWidth
  // }
  // console.log(width)
  // useEffect(() => {
  //   // setWidth(window.innerWidth);
  //   getBanner();
  // }, []);


  useEffect(() => {
    // getBanner();

    setWidthBanner(window.innerWidth);
    setInterval(() => {
      // calculateTimeLeft(product.fechaFinOferta);
      setLoading(false);
    }, 7000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log(width,"holitasjuju")
  // const getBanner = async () => {
  //   console.log("soy yo")
  //   let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/banner/get-all/user`;
  //   await fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
  //         setBannerImage([]);
  //       } else {
  //         setBannerImage(data);
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e, "error:)");
  //     });
  // };

  return (
    <>

      {isLoading && <PreloaderCards widthBanner={widthBanner}/>}
      {!isLoading && (
        <Carousel>
          {bannerImage.map((item) => (
            <Carousel.Item>
              {widthBanner < breakpoint ? (
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
      )}
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

// export async function getServerSideProps(params) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const routerParams = params;
//   console.log(routerParams);
//   let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/banner/get-all/user`;
//   const res = await fetch(url);

//   const bannerImage = await res.json();
//   if (!bannerImage) {
//     return {
//       notFound: true,
//     };
//   }

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       bannerImage: bannerImage,
//     },
//   };
// }

export default CarouselBanner;
