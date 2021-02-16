import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import cerrar from "../../../public/images/menu-icons/cerrar-burger.svg";
// import inicio from "../../../public/images/menu-icons/home-burger.svg";
// import categoria from "../../../public/images/menu-icons/categoria-burger.svg";
// import favorito from "../../../public/images/menu-icons/favorito-burger.svg";
// import ganga from "../../../public/images/menu-icons/ganga-burger.svg";
// import iniciar from "../../../public/images/menu-icons/iniciar-burger.svg";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.menuBurgerOpen) {
    drawerClasses = "side-drawer open";
  }
  return (
    <>
      <nav className={drawerClasses}>
        <ul className="list-sidedraw">
          <div className="box-flecha" onClick={props.ocultarMenuMobile}>
            <Image
              src="/images/menu-icons/cerrar-burger.svg"
              alt="logo la ganga"
              width={20}
              height={20}
            ></Image>
          </div>

          <li className="li-menu-mobile">
            <a
              href="/"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile "
              exact={true}
            >
              <div className="mr-2">
                <Image
                  src="/images/menu-icons/home-burger.svg"
                  alt="logo la ganga"
                  width={20}
                  height={20}
                ></Image>
              </div>
              Inicio
            </a>
          </li>
          {/* <li>
            <NavLink
              href="/nosotros"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
            >
              <img src={categoria} className="w-15 mr-2" />
              Categorias
            </NavLink>
          </li> */}
          <li>
            <a
              href="/interest"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
              className="w-15 mr-2"
            >
              <Image
                src="/images/menu-icons/favorito-burger.svg"
                alt="logo la ganga"
                width={20}
                height={20}
              ></Image>
              Favoritos
            </a>
          </li>

          <li>
            <a
              href="/en-construccion"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
            >
              <Image
                src="/images/menu-icons/ganga-burger.svg"
                alt="logo la ganga"
                width={20}
                height={20}
              ></Image>
              La ganga de la ganga
            </a>
          </li>
          <li>
            <a
              href="/en-construccion"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
            >
              <Image
                src="/images/menu-icons/iniciar-burger.svg"
                alt="logo la ganga"
                width={20}
                height={20}
              ></Image>
              Iniciar sesión
            </a>
          </li>
          <div className="box-links-mobile">
            <hr className="linea-mobile" />
            <div className="mt-1">
              <a href="mailto:hola@mycupon.com">
                <FontAwesomeIcon icon={faEnvelope} className="" />
                hola@mycupon.com
              </a>
            </div>
            <div className="mt-1">
              <a href="tel:+51987654321">
                <FontAwesomeIcon icon={faPhone} className="" />
                +51 987-654-321
              </a>
            </div>
            <div className="mt-1">
              <a href="/">
                <FontAwesomeIcon icon={faFacebookF} className="" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} className="" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} className="" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faWhatsapp} className="" />
              </a>
            </div>
            <p className="mt-3">
              <a href="/">Términos y Condiciones</a>
            </p>
          </div>
        </ul>
      </nav>
      <style jsx>
        {`
          .side-drawer {
            font-family: "made-tomy-sof-regular";
            height: 100%;
            background: #fff;
            box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            left: 0;
            width: 90%;
            z-index: 9999;
            transition: transform 0.3s ease-out;
            transform: translateX(-105%);
          }
          .side-drawer.open {
            transform: translateX(0%);
          }

          .side-drawer ul {
            height: 100%;
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 5px !important;
          }

          .side-drawer li {
            margin: 0.5rem 1.8rem;
          }

          .side-drawer a {
            color: #000;
            text-decoration: none;
            font-size: 0.95rem;
          }
          .side-drawer a:hover,
          .side-drawer a:active {
            color: #ff3552;
          }
          .list-sidedraw {
            position: relative;
          }
          .list-sidedraw .box-flecha {
            position: absolute;
            right: 5%;
            top: 8%;
            border-radius: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .list-sidedraw .box-flecha figure {
            margin: 0;
            margin-left: 2rem;
          }

          .is-activeHomeMobile {
            color: #ff3552 !important;
          }

          .list-sidedraw a:hover {
            text-decoration: none;
            font-weight: 500;
            color: #ff3552;
          }
          .select-perfil {
            position: absolute;
            background: #fff;
            /* left: 25%; */
            top: 23rem;
            width: 100%;
          }
          .select-perfil li {
            line-height: 0.8rem !important;
            margin: 0.7rem 0.7rem;
          }

          .sub-Item {
            margin-left: 4rem;
            color: #7dc7c5 !important;
            font-size: 0.85rem !important;
          }
          .box-links-mobile {
            text-align: center;
            margin-top: 1rem;
            /* border-top: 1px solid #000; */
          }

          .box-links-mobile a svg {
            color: #7487fc;
            margin-right: 8px;
          }

          .linea-mobile {
            border-top: 1px solid #7487fc;
            margin-right: 15px;
            margin-left: 10px;
          }

          .li-menu-mobile{
            display:flex!important;

          }

          @media (min-width: 768px) {
            .side-drawer {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};
export default SideDrawer;
