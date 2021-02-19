import React from 'react'
import ContentLoader from "react-content-loader";
const PreloaderCardEspecific = (props) => {
  return (
    <ContentLoader
      width={1800}
      height={500}
      viewBox="0 0 1800 500"
      style={{ width: "100%" }}
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect x="200" y="0" rx="3" ry="3" width="7" height="500" />
      <rect x="200" y="495" rx="3" ry="3" width="1400" height="7" />
      <rect x="1595" y="0" rx="3" ry="3" width="7" height="500" />
      <rect x="300" y="50" rx="16" ry="16" width="500" height="400" />
      <rect x="1000" y="120" rx="3" ry="3" width="400" height="15" />
      <rect x="1000" y="170" rx="3" ry="3" width="500" height="20" />
      <rect x="1000" y="200" rx="3" ry="3" width="500" height="15" />
      <rect x="1000" y="230" rx="3" ry="3" width="400" height="15" />
      <rect x="1000" y="260" rx="3" ry="3" width="500" height="15" />
      <rect x="200" y="0" rx="3" ry="3" width="1400" height="7" />
      <rect x="1000" y="350" rx="14" ry="14" width="100" height="50" />
      <rect x="1000" y="50" rx="3" ry="3" width="500" height="30" />
    </ContentLoader>
  );
}

export default PreloaderCardEspecific
