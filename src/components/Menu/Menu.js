import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import menuStyle from "./menu.module.css";
import { useSelector } from "react-redux";
const Menu = ({ openMenu, openForm, desconectar }) => {
  const user = useSelector((state) => state.user);
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
          {(user.email === "" || user.fullname === "") && (
            <>
              <button
                type="button"
                className=""
                onClick={() => {
                  openForm(".formLogin");
                }}
              >
                Ingresar
              </button>
              <button
                type="button"
                className=""
                onClick={() => {
                  openForm(".formRegister");
                }}
              >
                Registrarse
              </button>
            </>
          )}
          {(user.email !== "" || user.fullname !== "") && (
            <>
              <p>Hola {user.fullname}!</p>
              <p
                className={menuStyle.disconnect}
                onClick={() => desconectar()}
              >
                Salir
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Menu;
