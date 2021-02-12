import React from "react";
import ContentLoader from "react-content-loader";

const PreloaderCards = props => {
  // console.log(props.widthCard,"hola")
  const breakpoint = 768;
console.log(props.widthCard,"JUDITH")
  return (
  <>
   {
     props.widthCard > breakpoint ?
    <ContentLoader viewBox="0 0 1800 450" height={450} width={1800} style={{ width: '100%' }} {...props}>
      <rect x="0" y="90" rx="0" ry="0" width="360" height="400" />
      <rect x="430" y="90" rx="0" ry="0" width="360" height="400" />
      <rect x="860" y="90" rx="0" ry="0" width="360" height="400" />
      <rect x="1290" y="90" rx="0" ry="0" width="360" height="400" />
    </ContentLoader> :

    <ContentLoader viewBox="0 0 768 500" height={500} width={768}  style={{ width: '100%' }} {...props}>
      <rect x="20" y="15" rx="20" ry="20" width="300" height="320" />
      <rect x="361" y="17" rx="10" ry="10" width="420" height="33" />
      <rect x="361" y="71" rx="10" ry="10" width="315" height="33" />
      <rect x="361" y="125" rx="10" ry="10" width="233" height="20" />
      <rect x="361" y="216" rx="5" ry="5" width="195" height="13" />
      <rect x="361" y="251" rx="5" ry="5" width="195" height="13" />
      <rect x="367" y="311" rx="8" ry="8" width="130" height="38" />

    </ContentLoader>
   }
  </>
  )
};

// LinkedInStyle.metadata = {
//   name: 'Victoria Mei',
//   github: 'vm930',
//   description: 'LinkedIn Style',
//   filename: 'LinkedIn',
// }

export default PreloaderCards;
