import React from "react";
import ContentLoader from "react-content-loader";

const PreloaderCards = props => {
  // console.log(props.widthCard,"hola")
  const breakpoint = 768;
console.log(props.widthCard,"JUDITH")
  return (
    <>
      {props.widthCard > breakpoint ? (
        <ContentLoader
          viewBox={`0 0 ${props.widthCard} ${props.widthCard / 4}`}
          height={props.widthCard / 4}
          width={props.widthCard}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{ width: "100%" }}
          {...props}
        >
          <rect
            x=""
            y={props.widthCard / 4.18 / 15}
            rx="0"
            ry="0"
            width={props.widthCard / 4.43}
            height={props.widthCard / 5 / 0.9}
          />
          <rect
            x={props.widthCard / 4}
            y={props.widthCard / 4.18 / 15}
            rx="0"
            ry="0"
            width={props.widthCard / 4.3}
            height={props.widthCard / 5 / 0.9}
          />
          <rect
            x={props.widthCard / 1.97}
            y={props.widthCard / 4.18 / 15}
            rx="0"
            ry="0"
            width={props.widthCard / 4.3}
            height={props.widthCard / 5 / 0.9}
          />

          <rect
            x={props.widthCard / 1.3}
            y={props.widthCard / 4.18 / 15}
            rx="0"
            ry="0"
            width={props.widthCard / 4.3}
            height={props.widthCard / 5 / 0.9}
          />
        </ContentLoader>
      ) : (
        <ContentLoader
          viewBox={`0 0 ${props.widthCard} ${props.widthCard / 2.56}`}
          height={props.widthCard / 2.56}
          width={props.widthCard}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{ width: "100%" }}
          {...props}
        >
          <rect
            x={props.widthCard / 38.4}
            y={props.widthCard / 38.4 / 2}
            rx="20"
            ry="20"
            width={props.widthCard / 2.56}
            height={props.widthCard / 2.56 / 1.03}
          />
          <rect
            x={props.widthCard / 2.127}
            y={props.widthCard / 2.127 / 36.2}
            rx="10"
            ry="10"
            width={props.widthCard / 1.82}
            height={props.widthCard / 1.82 / 14.06}
          />
          <rect
            x={props.widthCard / 2.127}
            y={props.widthCard / 2.127 / 7}
            rx="10"
            ry="10"
            width={props.widthCard / 2.43}
            height={props.widthCard / 2.43 / 10.53}
          />
          <rect
            x={props.widthCard / 2.127}
            y={props.widthCard / 2.127 / 3.62}
            rx="10"
            ry="10"
            width={props.widthCard / 3.4}
            height={props.widthCard / 3.4 / 11.3}
          />
          <rect
            x={props.widthCard / 2.127}
            y={props.widthCard / 2.127 / 2.41}
            rx="5"
            ry="5"
            width={props.widthCard / 3.94}
            height={props.widthCard / 3.94 / 15}
          />
          <rect
            x={props.widthCard / 2.127}
            y={props.widthCard / 2.127 / 1.81}
            rx="5"
            ry="5"
            width={props.widthCard / 3.94}
            height={props.widthCard / 3.94 / 15}
          />
          <rect
            x={props.widthCard / 2.127}
            y={props.widthCard / 2.127 / 1.39}
            rx="8"
            ry="8"
            width={props.widthCard / 5.9}
            height={props.widthCard / 5.9 / 3.71}
          />
        </ContentLoader>
      )}
    </>
  );
};

// LinkedInStyle.metadata = {
//   name: 'Victoria Mei',
//   github: 'vm930',
//   description: 'LinkedIn Style',
//   filename: 'LinkedIn',
// }

export default PreloaderCards;
