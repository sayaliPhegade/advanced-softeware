import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Action/ProductAction";
import Header from "./../components/Header";

const PaymentScreen = ({history}) => {
    window.scrollTo(0, 0);

    const cart = useSelector((state) => state.cart)
    const {shippingAddress} = cart

    if (!shippingAddress) {
        history.push("/shipping")
    }

    const [ paymentMethod, setPaymentMethod] = useState("PayPal");

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        history.push("/placeorder")
    };
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-info">
                <form action="" className="Login2 col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                    <h6>SELECT PAYMENT METHOD</h6>
                    <div className="payment-container">
                        <div className="radio-container">
                            <input type="radio" value={paymentMethod} className="form-check-input" onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <label htmlFor="" className="form-check-label">Paypal or credit card</label>
                        </div>
                    </div>
                    <button type="submit">
                        Continue
                    </button>
                </form>
            </div>
        </>
    );
};

export default PaymentScreen;