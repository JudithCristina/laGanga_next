import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PreloaderCards from "../Preloader/PreloaderBanner";
import Image from "next/image";
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
    }, 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>

      {isLoading && <PreloaderCards widthBanner={widthBanner}/>}
      {!isLoading && (
        <Carousel>
          {bannerImage.map((item) => (
            <Carousel.Item>
              {widthBanner < breakpoint ? (
                <Image
                  className="d-block w-100"
                  src={
                    item.imagen[0].typeImage === "BM"
                      ? item.imagen[0].url
                      : item.imagen[1].url
                  }
                  //  src="https://ibb.co/PZL3Tfd"
                  width={768}
                  height={500}
                  alt="First slide"
                />
              ) : (
                <Image
                  className="d-block w-100"
                  src={
                    item.imagen[0].typeImage === "BD"
                      ? item.imagen[0].url
                      : item.imagen[1].url
                  }
                  //  src="https://ibb.co/PZL3Tfd"
                  width={1800}
                  height={500}
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
