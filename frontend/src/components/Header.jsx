import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../Redux/Action/ProductAction";
import logo from "./logo.jpg";

const Header = () => {
    const dispatch = useDispatch()

    const [keyword, setKeyword] = useState()
    const cart = useSelector((state) => state.cart);

    let history = useHistory()
    const { cartItems } = cart;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const logoutHandler =() =>{
        dispatch(logout())
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        }
        else{
            history.push("/")
        }
    }
    return (
        <>
            <div className="Announcement">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center display-none">
                            <p>+1234567890</p>
                            <p>dummy@example.com</p>
                        </div>
                        <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
                            <Link to="">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-github"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="mobile-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <Link to="/advanced-softeware" className="navbar-brand">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                    {
                                        userInfo ? (
                                            <div className="btn-group">
                                                <button type="button" className="name-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-user">
                                                    </i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/profile">Profile</Link>

                                                    <Link className="dropdown-item" to="#" onClick={logoutHandler}>Logout</Link>
                                                </div>

                                            </div>
                                        )
                                            :
                                            (
                                                <div className="btn-group">
                                                    <button type="button" className="name-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fas fa-user">
                                                        </i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" to="/login">Login</Link>

                                                        <Link className="dropdown-item" to="/register">Register</Link>
                                                    </div>

                                                </div>
                                            )
                                    }


                                    <Link className="cart-mobile-icon" to="/cart">
                                        <i className="fas fa-shopping-bag"></i>
                                        <span className="badge">{cartItems.length}</span>
                                    </Link>
                                </div>
                                <div className="col-12 d-flex align-items-center">
                                    <form action="" className="input-group" onSubmit={submitHandler}>
                                        <input type="search" className="form-control rounded search" placeholder="Search..."  onChange={(e) => setKeyword(e.target.value)}/>

                                        <button type="submit" className="search-button">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pc-header">
                        <div className="row">
                            <div className="col-md-3 col-4 d-flex align-items-center">
                                <Link className="navbar-brand" to="/advanced-softeware">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="col-md-6 col-8 d-flex align-items-center">
                                <form action="" className="input-group" onSubmit={submitHandler}>
                                    <input type="search" className="form-control rounded search" placeholder="Search..." onChange={(e) => setKeyword(e.target.value)} />
                                    <button type="submit" className="search-button">Search</button>
                                </form>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                                {
                                    userInfo ? (
                                        <div className="btn-group">
                                            <button className="name-button dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> Hi, {userInfo.name}

                                            </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/profile">Profile</Link>

                                                <Link className="dropdown-item" to="#" onClick={logoutHandler}>Logout</Link>
                                            </div>
                                        </div>
                                    )
                                        :
                                        (
                                            <>
                                                <Link  to="/register">Register</Link>
                                                <Link  to="/login">Login</Link>

                                            </>
                                        )
                                }

                                <Link className="cart-mobile-icon" to="/cart">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="badge">{cartItems.length}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;