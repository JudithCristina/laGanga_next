import Link from "next/link";
import { Container } from "react-bootstrap";
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
import { styleFooter} from './styleFooter'
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
      <style jsx>{ styleFooter }</style>
    </div>
  );
};

export default Footer;
