import css from "styled-jsx/css";


export const styleFooter = css`
  .footer-desktop {
    display: block;
  }
  .box-footer {
    padding: 2rem 5rem;
    background: #000000;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-between;
    align-items: center;
    color: #ffff;
    font-family: "made-tomy-sof-regular";
    position: relative;
  }
  .icon {
    color: #ffff;
  }
  .style-none-list {
    list-style: none;
  }
  .box-footer div {
    max-width: 420px;
  }
  .social-networks {
    display: flex;
    flex-direction: row;
  }
  .icon-social {
    font-size: 1.5rem;
    margin: 0.7rem;
    color: #fff;
    cursor: pointer !important;
  }

  .icon-social:hover {
    color: #f31454;
    transform: rotate(10deg);
  }

  .decoration-none-ancla {
    text-decoration: none;
    color: #ffff;
    font-weight: 400;
    font-size: 0.9rem;
  }
  .padding-left {
    padding-left: 0.5rem;
  }
  .decoration-none-ancla:hover {
    text-decoration: none;
    color: #ffff;
    font-weight: 500;
  }
  .padding-top-bottom li {
    padding: 0.25rem 0rem;
  }

  .text-contact-footer {
    font-size: 0.9rem;
  }

  @media (max-width: 769px) {
    html {
      font-size: 4.6vw;
    }
    .footer-desktop {
      display: none;
    }
    .box-footer {
      display: none;
    }
  }
`;
