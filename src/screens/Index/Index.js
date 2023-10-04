// import { useSelector, useDispatch } from "react-redux"
// import { decrement, increment } from "../../redux/features/counter/counterSlice"
import { login } from "../../api/user"
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../redux/features/user/userSlice";

const Index = () => {
    // const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [values, setValues] = useState({})
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            fullname: 'pepe',
            email: '',
            password: ''
        },
        onSubmit: async values => {
            const loginState = await login(values)

            if (loginState) {
                // Esto se hace si se valido en el backend

                // useDispatch(setUser(values));
                // navigate('/home')
            }
            console.log(loginState);
            dispatch(setUser(values));
            navigate('/home')
        },
        onChange: event => {
            setValues(prevValues => ({
                ...prevValues,
                [event.target.name]: event.target.value
            }));
        }
    })
    return <div className="Index">
        <h1>Inicia Sesion!</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className="container-input">
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" className="email" onChange={formik.handleChange} value={values.email} />
            </div>
            <div className="container-input">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="password" onChange={formik.handleChange} value={values.password} />
            </div>
            <button type="submit">Ingresar</button>
        </form>
        <p>¿No tenes cuenta? Registrate <Link to='/register'>aqui</Link></p>
    </div>
}

export default Index;