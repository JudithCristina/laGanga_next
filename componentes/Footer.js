import Link from "next/link";
import { Container } from "react-bootstrap";
// import {
//   faEnvelope,
//   faPhone,
// // faMapMarkerAlt
//   //  faFacebookF,
//   //  faTwitter,
//   //  faInstagram,
//   //  faWhatsapp
// } from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer-desktop">
      <Container className="container-ganga">
        <footer className="box-footer">
          <div className="text-conctact-footer">
            <h4>Contacto</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              voluptatibus voluptatem perspiciatis quis accusamus facilis? Eum
              inventore nisi eveniet quam sunt aliquam, recusandae expedita,
              dolor doloribus incidunt et odit quas
            </p>
          </div>
          <div>
            <ul className="style-none-list padding-top-bottom">
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <Link href="mailto:hola@laganga.com">
                  <a className="decoration-none-ancla padding-left">
                    hola@laganga.com
                  </a>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <Link href="tel:+51987654321">
                  <a className="decoration-none-ancla padding-left">
                    +51 987-654-321
                  </a>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <Link href="/">
                  <a className="decoration-none-ancla padding-left">
                    123 Los Robles, Miraflores. Lima - Perú
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="style-none-list social-networks">
              <a className="icon-social" href="/">
                <li>
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
              </a>

              <a className="icon-social" href="/">
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
              </a>

              <a className="icon-social" href="/">
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
              </a>

              <a className="icon-social" href="/">
                <li>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </li>
              </a>
            </ul>
          </div>
        </footer>
      </Container>
      <style jsx>
        {`
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
            cursor: pointer!important;
          }

          .icon-social:hover{
            color: #f31454;
            transform:rotate(10deg);
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
        `}
      </style>
    </div>
  );
};

export default Footer;
