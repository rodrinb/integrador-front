import axios from "axios";

const urlBase = "https://integrador-back-one.vercel.app/usuarios";

export const register = async (dataUser) => {
  const url = urlBase + "/registrar";
  try {
    const response = await axios.post(url, dataUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    return e;
  }
};

export const login = async (dataUser) => {
  const url = urlBase + "/login";

  try {
    const response = await axios.post(url, dataUser);

    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    return e;
  }
};
