import { useFormik } from "formik";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/user";
import { setUser } from "../../redux/features/user/userSlice";

import loginStyle from "./login.module.css";
const Login = ({ openForm }) => {
  const dispatch = useDispatch();
  const [stateBtnLogin, setStateBtnLogin] = useState(true);
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "pepe",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setStateBtnLogin(false);

      setTimeout(async () => {
        const loginState = await login(values);

        if (loginState) {
          // Esto se hace si se valido en el backend
          // useDispatch(setUser(values));
          // navigate('/home')
        }
        console.log(loginState);
        dispatch(setUser(values));
        setStateBtnLogin(true);
        openForm(".formLogin");
      }, 2000);
    },
    onChange: (event) => {
      setValues((prevValues) => ({
        ...prevValues,
        [event.target.name]: event.target.value,
      }));
    },
  });
  return (
    <div className={`formLogin ${loginStyle.formLogin}`}>
      <div className={loginStyle.containerModal}>
        <button
          className={loginStyle.closeModal}
          onClick={() => openForm(".formLogin")}
        >
          <FaTimes />
        </button>
        <h1>Inicia Sesion!</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className={loginStyle.containerInput}>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              onChange={formik.handleChange}
              value={values.email}
            />
          </div>
          <div className={loginStyle.containerInput}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              onChange={formik.handleChange}
              value={values.password}
            />
          </div>
          {stateBtnLogin ? (
            <button type="submit">
              {stateBtnLogin ? (
                "Ingresar"
              ) : (
                <div className={loginStyle.customLoader}></div>
              )}
            </button>
          ) : (
            <button type="submit">
              {stateBtnLogin ? (
                "Ingresar"
              ) : (
                <div className={loginStyle.customLoader}></div>
              )}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
