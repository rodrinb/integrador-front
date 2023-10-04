import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import menuStyle from "./menu.module.css";
const Menu = ({ openMenu, openForm }) => {
  return (
    <div className={` ${menuStyle.Menu}`}>
      <div className={`containerMenu ${menuStyle.containerMenu}`}>
        <button
          className={menuStyle.closeModal}
          onClick={() => openMenu(menuStyle)}
        >
          <FaTimes />
        </button>
        <div className={menuStyle.menuNav}>
          <Link to="/" className={menuStyle.menuItem}>
            Inicio
          </Link>
          <Link to="/nosotros" className={menuStyle.menuItem}>
            Nosotros
          </Link>
          <Link to="/productos" className={menuStyle.menuItem}>
            Productos
          </Link>
          <div className={menuStyle.separator}></div>
          <button
            type="button"
            className=""
            onClick={() => {
              openForm(".formLogin");
            }}
          >
            Ingresar
          </button>
          {/* <Register openForm={openForm} /> */}
          <button
            type="button"
            className=""
            onClick={() => {
              openForm(".formRegister");
            }}
          >
            Registrarse
          </button>
          {/* <Login openForm={openForm} /> */}
        </div>
      </div>
    </div>
  );
};
export default Menu;
