import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer, productReviewsReducer } from "./Reducers/ProductReducers.js";
import { cartReducer, orderCreateReducer, orderDetailsReducer, orderListReducer, orderPayReducer } from "./Reducers/CartReducers.js";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./Reducers/userReducer.js";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productReviews : productReviewsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay : orderPayReducer,
    orderList : orderListReducer
})

const cartitemsFromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []


// Login
const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

// ShippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {}

// PaymentResult
const paymentMethodFromLocalStorage = localStorage.getItem("paymentMethod") ? JSON.parse(localStorage.getItem("paymentMethod")) : {}


const initialState = {
    cart: {
        cartItems: cartitemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage,
        paymentMethod: paymentMethodFromLocalStorage
    },
    userLogin: {
        userInfo: userInfoFromLocalStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;