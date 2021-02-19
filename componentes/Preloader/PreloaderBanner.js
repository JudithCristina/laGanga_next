import React from "react";
import ContentLoader from "react-content-loader";
const PreloaderBanner = (props) => {
  // console.log(props.widthCard,"hola")
  const breakpoint = 768;
  return (
    <>
      {props.widthBanner > breakpoint ? (
        <ContentLoader
          viewBox="0 0 1800 500"
          height={500}
          width={1800}
          style={{ width: "100%" }}
          {...props}
        >
          <rect x="10" y="10" rx="20" ry="20" width="1780" height="500" />
        </ContentLoader>
      ) : (
        <ContentLoader
          viewBox={`0 0 ${props.widthBanner} ${props.widthBanner}`}
          height={500}
          width={768}
          style={{ width: "100%" }}
          {...props}
        >
          <rect x="4" y="4" rx="10" ry="10" width="760" height="500" />
        </ContentLoader>
      )}
    </>
  );
};

export default PreloaderBanner;
