import React, { useEffect } from "react";
import Header from "./../components/Header"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Action/ProductAction";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";

const Register = ({ location, history }) => {
    window.scrollTo(0, 0);

    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userRegister = useSelector((state) => state.userRegister)
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (a) => {
        a.preventDefault();
        dispatch(register(name, email, password))
    }

    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                {error && <Message variant="alert-danger"> {error}</Message>}
                {loading && <Loading />}

                <form action="" className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                    <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                    <button type="submit">Register</button>
                    <p>
                        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                            I have Account <strong>Login</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register;