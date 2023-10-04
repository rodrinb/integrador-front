import { useFormik } from "formik";
import { useState } from "react";
import { register } from "../../api/user";
import { FaTimes } from "react-icons/fa";
import registerStyle from "./register.module.css";
const Register = ({ openForm }) => {
  const [stateBtnRegister, setStateBtnRegister] = useState(true);
  const [values, setValues] = useState({});
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setStateBtnRegister(false);

      setTimeout(async () => {
        const registerState = await register(values);

        if (registerState.status === 200) {
          setStateBtnRegister(true);
          openForm(".formRegister");
        }
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
    <div className={`formRegister ${registerStyle.formRegister}`}>
      <div className={registerStyle.containerModal}>
        <button
          className={registerStyle.closeModal}
          onClick={() => openForm(".formRegister")}
        >
          <FaTimes />
        </button>
        <h1>Registrate!</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className={registerStyle.containerInput}>
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="fullname"
              onChange={formik.handleChange}
              value={values.fullname}
              required
            />
          </div>
          <div className={registerStyle.containerInput}>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              onChange={formik.handleChange}
              value={values.email}
              required
            />
          </div>
          <div className={registerStyle.containerInput}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              onChange={formik.handleChange}
              value={values.password}
              required
            />
          </div>
          {stateBtnRegister ? (
            <button type="submit">
              {stateBtnRegister ? (
                "Registrar"
              ) : (
                <div className={registerStyle.customLoader}></div>
              )}
            </button>
          ) : (
            <button disabled type="submit">
              {stateBtnRegister ? (
                "Registrar"
              ) : (
                <div className={registerStyle.customLoader}></div>
              )}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
