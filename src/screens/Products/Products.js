import { useEffect, useState } from "react";
import { getProducts } from "../../api/page";
import Navbar from "../../components/Navbar/Navbar";
import { addCart, calculateCart } from "../../redux/features/cart/cartSlice";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [stateProducts, setStateProducts] = useState(true);
  const listProducts = async () => {
    //const list = await getProducts();
    const list = [
      {
        id: 1,
        title: "NeuLens 1",
        image: "https://agutierrez.site/imagenes/lente1.jpeg",
        description:
          "El funcionamiento es un fascinante proceso que combina la poderosa capacidad de procesamiento del cerebro humano con sofisticados chips electrónicos.",
        price: 300,
      },
      {
        id: 2,
        title: "NeuLens 2",
        image: "https://agutierrez.site/imagenes/lente2.jpeg",
        description:
          "El funcionamiento es un fascinante proceso que combina la poderosa capacidad de procesamiento del cerebro humano con sofisticados chips electrónicos.",
        price: 150,
      },
      {
        id: 3,
        title: "NeuLens 3",
        image: "https://agutierrez.site/imagenes/lente3.jpeg",
        description:
          "El funcionamiento es un fascinante proceso que combina la poderosa capacidad de procesamiento del cerebro humano con sofisticados chips electrónicos.",
        price: 500,
      },
    ];
    setProducts(list);
    setStateProducts(false);
  };
  if (stateProducts) {
    listProducts();
  }

  useEffect(() => {}, [products]);
  const addProduct = (product) => {
    dispatch(addCart(product));
    dispatch(calculateCart());
  };
  return (
    <div className="Products">
      <Navbar color={"black"} />
      <div className="container-products">
        {products.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} />
            <div className="description">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="details">
                <span className="price">${product.price}</span>
                <button
                  className="add-cart"
                  onClick={() => addProduct(product)}
                >
                  <BsCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
