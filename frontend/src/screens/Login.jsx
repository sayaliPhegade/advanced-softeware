import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { login } from "../Redux/Action/ProductAction";


const Login = ({ location, history }) => {
    window.scrollTo(0, 0);

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1] : "/";

   const userLogin = useSelector((state) => state.userLogin)
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (a) => {
        a.preventDefault();
        dispatch(login(email, password))
    }
    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                {error && <Message variant="alert-danger"> {error}</Message>}
                {loading && <Loading />}
                <form action="" className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                    <button type="submit">Login</button>
                    <p>
                        <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
                            create Account
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login;