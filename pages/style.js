import css from 'styled-jsx/css'

export const globalStyles = css.global`
  @font-face {
    font-family: "made-tomy-sof-regular";
    src: url(fonts/made-tommy.otf);
  }
  html {
    font-family: "made-tomy-sof-regular";
  }

  body {
    font-family: "made-tomy-sof-regular";
  }
  .font-made-tomy-sof-regular {
    font-family: "made-tomy-sof-regular";
  }

  .container,
  .container-fluid,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    width: 100%;
    padding-right: 0px !important;
    padding-left: 0px !important;
  }

  .margin-box {
    padding: 0rem 5rem !important;
  }

  .carousel-control-next,
  .carousel-control-prev {
    width: 8% !important;
  }

  @media (min-width: 576px) {
    .container-ganga {
      max-width: 900px !important;
      margin: auto;
    }
  }
  @media (min-width: 900px) {
    .container-ganga {
      max-width: 992px !important;
      margin: auto;
    }
  }
  @media (min-width: 992px) {
    .container-ganga {
      max-width: 1200px !important;
      margin: auto;
    }
  }
  @media (min-width: 1200px) {
    .container-ganga {
      max-width: 1800px !important;
      margin: auto;
    }
  }

  @media (max-width: 769px) {
    html {
      font-size: 4.6vw;
    }
    .margin-box {
      padding: 0rem 1rem !important;
    }

    .title-ganga {
      font-size: 1.4rem;
    }

    .subtitle-ganga {
      font-size: 0.8rem;
    }
  }

  /* ANIMACIONES */
  .react-parallax-bgimage {
    position: fixed !important;
    height: !important;
    width: 100% !important;
  }

  .fade-in {
    -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .animated {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
`;
