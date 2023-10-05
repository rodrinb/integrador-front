import axios from "axios";

const urlBase = "https://integrador-back-one.vercel.app/productos";

export const getProducts = async () => {
  //const url = urlBase + "/products";
  const url = urlBase + "/";

  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    return e;
  }
};
