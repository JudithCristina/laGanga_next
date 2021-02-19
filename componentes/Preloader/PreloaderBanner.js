import React from "react";
import ContentLoader from "react-content-loader";
const PreloaderBanner = (props) => {
  // console.log(props.widthCard,"hola")
  const breakpoint = 768;
  return (
    <>
      {props.widthBanner > breakpoint ? (
        <ContentLoader
          viewBox={`0 0 ${props.widthBanner} ${props.widthBanner / 3.6}`}
          height={props.widthBanner / 3.6}
          width={props.widthBanner}
          style={{ width: "100%" }}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect
            x={props.widthBanner / 180}
            y={props.widthBanner / 180}
            rx="20"
            ry="20"
            width={props.widthBanner / 1.011}
            height={props.widthBanner / 1.011 / 3.56}
          />
        </ContentLoader>
      ) : (
        <ContentLoader
          viewBox={`0 0 ${props.widthBanner} ${props.widthBanner / 1.536}`}
          height={props.widthBanner / 1.536}
          width={props.widthBanner}
          style={{ width: "100%" }}
           backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect
            x={props.widthBanner / 192}
            y={props.widthBanner / 192}
            rx="10"
            ry="10"
            width={props.widthBanner / 1.0105}
            height={props.widthBanner / 1.0105 / 1.52}
          />
        </ContentLoader>
      )}
    </>
  );
};

export default PreloaderBanner;
