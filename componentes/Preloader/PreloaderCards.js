import React from "react";
import ContentLoader from "react-content-loader";

const PreloaderCards = props => {
  return (
    <ContentLoader viewBox="0 0 1500 350" height={350} width={1500} style={{ width: '100%' }} {...props}>
      <rect x="0" y="90" rx="0" ry="0" width="250" height="250" />
      <rect x="300" y="90" rx="0" ry="0" width="250" height="250" />
      <rect x="600" y="90" rx="0" ry="0" width="250" height="250" />
      <rect x="900" y="90" rx="0" ry="0" width="250" height="250" />
    </ContentLoader>
  )
};

// LinkedInStyle.metadata = {
//   name: 'Victoria Mei',
//   github: 'vm930',
//   description: 'LinkedIn Style',
//   filename: 'LinkedIn',
// }

export default PreloaderCards;
