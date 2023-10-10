import { useEffect, useState } from "react";
import { getProducts } from "../../api/page";
import Navbar from "../../components/Navbar/Navbar";
import { addCart, calculateCart } from "../../redux/features/cart/cartSlice";
import productStyle from "./products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [productsAux, setProductsAux] = useState([]);
  const [filter, setFilter] = useState("");
  const [stateProducts, setStateProducts] = useState(true);

  const listProducts = async () => {
    const list = await getProducts();

    setProducts(list);
    setProductsAux(list);
    setStateProducts(false);
  };
  if (stateProducts) {
    listProducts();
  }

  const addProduct = (product) => {
    dispatch(addCart(product));
    dispatch(calculateCart());
  };

  const filterProduct = (e) => {
    if (e.target.checked) {
      setFilter(e.target.value);
    } else {
      setFilter("");
    }
  };

  const clearFilters = () => {
    let filterInputs = document.querySelectorAll(`.categories`);
    filterInputs.forEach((radio) => (radio.checked = false));
    setFilter("");
  };

  useEffect(() => {}, [products]);
  useEffect(() => {
    if (filter.length === 0) {
      setProducts(productsAux);
    } else {
      setProducts(productsAux.filter((product) => product.category === filter));
    }
  }, [filter]);
  return (
    <div className={productStyle.Products}>
      <Navbar color={"black"} />
      <div className={productStyle.containerFilters}>
        <div className={productStyle.filters}>
          <div className={productStyle.radio}>
            <input
              type="radio"
              id="category_a"
              className={`categories ${productStyle.categories}`}
              name="category"
              value={"A"}
              onChange={(e) => filterProduct(e)}
            />
            <label htmlFor="category_a">A</label>
          </div>
          <div className={productStyle.radio}>
            <input
              type="radio"
              id="category_b"
              className={`categories ${productStyle.categories}`}
              name="category"
              value={"B"}
              onChange={(e) => filterProduct(e)}
            />
            <label htmlFor="category_b">B</label>
          </div>
          <div className={productStyle.radio}>
            <input
              type="radio"
              id="category_c"
              className={`categories ${productStyle.categories}`}
              name="category"
              value={"C"}
              onChange={(e) => filterProduct(e)}
            />
            <label htmlFor="category_c">C</label>
          </div>
        </div>
        <button onClick={() => clearFilters()}>Clear</button>
      </div>
      <div className={productStyle.containerProducts}>
        {products.length == 0 && <div className={productStyle.loader}></div>}
        {products.length != 0 &&
          products.map((product, index) => (
            <div key={index} className={productStyle.product}>
              <img src={`data:image/jpeg;base64,${product.image}`} />
              <div className={productStyle.description}>
                <h3 className={productStyle.title}>{product.title}</h3>
                <p className={productStyle.textDescription}>
                  {product.description}
                </p>
                <div className={productStyle.details}>
                  <span className={productStyle.price}>${product.price}</span>
                  <button
                    className={productStyle.addCart}
                    onClick={() => addProduct(product)}
                  >
                    <BsCartPlus className={productStyle.icon} />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};
export default Products;
