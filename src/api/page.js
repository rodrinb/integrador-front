import axios from "axios";

const urlBase = "http://localhost:8801/api";

export const getProducts = async () => {
    //const url = urlBase + "/products";
    const url = "https://fakestoreapi.com/products"

    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data
        }
    } catch (e) {
        return e;
    }


}