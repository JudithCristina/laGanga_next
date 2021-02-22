import React from 'react'
import ContentLoader from "react-content-loader";
const PreloaderCardEspecific = (props) => {
  console.log(props.widthCardSpecific, "holitas");
  return (
    <ContentLoader
      width={props.widthCardSpecific}
      height={props.widthCardSpecific / 3.6}
      viewBox={`0 0 ${props.widthCardSpecific} ${
        props.widthCardSpecific / 3.6
      }`}
      style={{ width: "100%" }}
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect
        x={props.widthCardSpecific / 9}
        y="0"
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 257.14}
        height={props.widthCardSpecific / 3.6}
      />
      <rect
        x={props.widthCardSpecific / 9}
        y={props.widthCardSpecific / 3.6 / 1.010}
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 1.2857}
        height={props.widthCardSpecific / 3.6 / 71.42}
      />
      <rect
        x={props.widthCardSpecific / 1.1285}
        y="0"
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 257.14}
        height={props.widthCardSpecific / 3.6}
      />
      <rect
        x={props.widthCardSpecific / 6}
        y={props.widthCardSpecific / 3.6 / 10}
        rx="16"
        ry="16"
        width={props.widthCardSpecific / 3.6}
        height={props.widthCardSpecific / 3.6 / 1.25}
      />
      <rect
        x={props.widthCardSpecific / 1.8}
        y={props.widthCardSpecific / 3.6 / 4.1666}
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 4.5}
        height={props.widthCardSpecific / 3.6 / 33.33}
      />
      <rect
        x={props.widthCardSpecific / 1.8}
        y={props.widthCardSpecific / 3.6 / 2.94}
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 3.6}
        height={props.widthCardSpecific / 3.6 / 25}
      />
      <rect
        x={props.widthCardSpecific / 1.8}
        y={props.widthCardSpecific / 3.6 / 2.5}
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 3.6}
        height={props.widthCardSpecific / 3.6 / 33.33}
      />
      <rect
        x={props.widthCardSpecific / 1.8}
        y={props.widthCardSpecific / 3.6 / 2.17}
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 4.5}
        height={props.widthCardSpecific / 3.6 / 33.33}
      />
      <rect
        x={props.widthCardSpecific / 1.8}
        y={props.widthCardSpecific / 3.6 / 1.923}
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 3.6}
        height={props.widthCardSpecific / 3.6 / 33.33}
      />
      <rect
        x={props.widthCardSpecific / 9}
        y="0"
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 1.2857}
        height={props.widthCardSpecific / 3.6 / 71.4}
      />
      <rect
        x={props.widthCardSpecific / 1.8}
        y={props.widthCardSpecific / 3.6 / 1.4285}
        rx="14"
        ry="14"
        width={props.widthCardSpecific / 18}
        height={props.widthCardSpecific / 3.6 / 10}
      />
      <rect
        x={props.widthCardSpecific / 1.8}
        y={props.widthCardSpecific / 3.6 / 10}
        rx="3"
        ry="3"
        width={props.widthCardSpecific / 3.6}
        height={props.widthCardSpecific / 3.6 / 16.66}
      />
    </ContentLoader>
  );
}

export default PreloaderCardEspecific
