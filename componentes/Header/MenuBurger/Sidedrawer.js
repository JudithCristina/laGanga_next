import Image from "next/image";
import Link from "next/link";
import ActiveLink from "./../../ActiveLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { styleSidedrawer} from "./style";


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

          <li className="">
            <ActiveLink
              href="/"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile "
              exact={true}
            >
              <a>
                {" "}
                <Image
                  src="/images/menu-icons/home-burger.svg"
                  alt="logo la ganga"
                  width={20}
                  height={20}
                ></Image>
                {` `}Inicio
              </a>
            </ActiveLink>
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
            <ActiveLink
              href="/Interest"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
              className="w-15 mr-2"
            >
              <a>
                <Image
                  src="/images/menu-icons/favorito-burger.svg"
                  alt="logo la ganga"
                  width={20}
                  height={20}
                ></Image>
                {` `}Favoritos
              </a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/building"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
            >
              <a>
                <Image
                  src="/images/menu-icons/ganga-burger.svg"
                  alt="logo la ganga"
                  width={20}
                  height={20}
                ></Image>
                {` `}La ganga de la ganga
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/building"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
            >
              <a>
                <Image
                  src="/images/menu-icons/iniciar-burger.svg"
                  alt="logo la ganga"
                  width={20}
                  height={20}
                ></Image>
                {` `} Iniciar sesión
              </a>
            </ActiveLink>
          </li>
          <div className="box-links-mobile">
            <hr className="linea-mobile" />
            <div className="mt-1">
              <a href="mailto:hola@mycupon.com">
                <FontAwesomeIcon icon={faEnvelope} className="" />
                {` `}hola@mycupon.com
              </a>
            </div>
            <div className="mt-1">
              <a href="tel:+51987654321">
                <FontAwesomeIcon icon={faPhone} className="" />
                {` `}+51 987-654-321
              </a>
            </div>
            <div className="mt-1">
              <a href="/">
                <FontAwesomeIcon icon={faFacebookF} className="m-1" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} className="m-1" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} className="m-1" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faWhatsapp} className="m-1" />
              </a>
            </div>
            <p className="mt-3">
              <a href="/">Términos y Condiciones</a>
            </p>
          </div>
        </ul>
      </nav>
      <style jsx>{styleSidedrawer}</style>
    </>
  );
};
export default SideDrawer;
