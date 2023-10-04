import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import navBarStyle from "./navbar.module.css";
import menuStyle from "../Menu/menu.module.css";
import { calculateCart, removeCart } from "../../redux/features/cart/cartSlice";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Menu from "../Menu/Menu";

const Navbar = ({ color }) => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const openCart = (listProducts) => {
    if (
      document
        .querySelector(`.${listProducts}`)
        .classList.contains(navBarStyle.show)
    ) {
      document
        .querySelector(`.${listProducts}`)
        .classList.remove(navBarStyle.show);
    } else {
      document.querySelector(`.${listProducts}`).classList.add(navBarStyle.show);
    }
  };

  const removeProduct = (product) => {
    dispatch(removeCart(product));
    dispatch(calculateCart());
  };

  const openForm = (type) => {
    if (document.querySelector(type).classList.contains(navBarStyle.show)) {
      console.log("a");
      document.querySelector(type).classList.remove(navBarStyle.show);
    } else {
      console.log("b");
      document.querySelector(type).classList.add(navBarStyle.show);
    }
  };

  const openMenu = (menu) => {
    if (document.querySelector(`.${menu.Menu}`).classList.contains(menu.show)) {
      document.querySelector(`.${menu.Menu}`).classList.remove(menu.show);
    } else {
      document.querySelector(`.${menu.Menu}`).classList.add(menu.show);
    }
  };
  return (
    <div className={`${navBarStyle.Navbar} ${color != undefined ? color : ""}`}>
      <button
        className={navBarStyle.btnMenu}
        onClick={() => openMenu(menuStyle)}
      >
        <AiOutlineMenu />
      </button>
      <Menu openMenu={openMenu} openForm={openForm} />
      <div className={navBarStyle.logo}>
        <Link to="/">
          <h1>Ampersand NV</h1>
        </Link>
      </div>
      <div className={navBarStyle.menu}>
        <Link to="/" className={navBarStyle.menuItem}>
          Inicio
        </Link>
        <Link to="/nosotros" className={navBarStyle.menuItem}>
          Nosotros
        </Link>
        <Link to="/productos" className={navBarStyle.menuItem}>
          Productos
        </Link>
      </div>

      <div className={navBarStyle.menuUser}>
        {user.email === "" && user.fullname === "" && (
          <>
            <button
              type="button"
              className=""
              onClick={() => openForm(".formLogin")}
            >
              Ingresar
            </button>
            <Register openForm={openForm} />
            <button
              type="button"
              className=""
              onClick={() => openForm(".formRegister")}
            >
              Registrarse
            </button>
            <Login openForm={openForm} />
          </>
        )}
        {user.email !== "" && user.fullname !== "" && (
          <>
            <p>Hola {user.fullname}!</p>
          </>
        )}
        <div className={navBarStyle.cart}>
          <AiOutlineShoppingCart
            onClick={() => openCart(navBarStyle.listProducts)}
          />
          <p className={navBarStyle.counterItems}>{cart.length}</p>
          <div className={navBarStyle.listProducts}>
            <h2>Your Cart</h2>
            {cart.length === 0 && (
              <div className={navBarStyle.empty}>
                <p>Your Cart is empty :c</p>
              </div>
            )}
            {cart.map((product, index) => (
              <div key={index} className={navBarStyle.productCart}>
                <div className={navBarStyle.productDescription}>
                  <img src={product.image} height={50} />
                  <h3>{product.name}</h3>
                  <span>${product.price * product.cant}</span>
                </div>
                <div className={navBarStyle.productDetails}>
                  <span>
                    {product.cant} x ${product.price}
                  </span>
                  <button onClick={() => removeProduct(product)}>
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            ))}

            {cart.length !== 0 && (
              <div className={navBarStyle.cartDetail}>
                <div className={navBarStyle.total}>
                  <h4>Total:</h4>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
