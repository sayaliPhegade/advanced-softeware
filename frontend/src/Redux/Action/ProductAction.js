import axios from "axios";
import { CART_ADD_ITEM, CART_CLEAR_ITEM, CART_DELETE_ITEM, CART_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_RESET, ORDER_LIST_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REVIES_CREATE_FAIL, PRODUCT_REVIES_CREATE_REQUEST, PRODUCT_REVIES_CREATE_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATES_FAIL, USER_UPDATES_REQUEST, USER_UPDATES_SUCCESS } from "../Constants/ProductConstants";

const dummyData = {
    "products": [
        {
            "_id": "66214da094ef08e7061967bb",
            "name": "Fisrt Product",
            "image": "\thttps://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-400x400.jpg",
            "description": "DNK Blue Shoes",
            "rating": 5,
            "numReviews": 4,
            "price": 25.26,
            "countInStock": 3,
            "reviews": [],
            "__v": 0,
            "createdAt": "2024-04-18T16:43:12.722Z",
            "updatedAt": "2024-04-18T16:43:12.722Z"
        },
        {
            "_id": "66214da094ef08e7061967ba",
            "name": "Fisrt Product",
            "image": "\thttps://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-400x400.jpg",
            "description": "DNK Blue Shoes",
            "rating": 10,
            "numReviews": 1,
            "price": 25.26,
            "countInStock": 3,
            "reviews": [
                {
                    "name": "admin",
                    "rating": "1",
                    "comment": "This is good",
                    "user": "662125888d699bd30581f2b6",
                    "_id": "66217440215935ec9522af93",
                    "createdAt": "2024-04-18T19:28:00.929Z",
                    "updatedAt": "2024-04-18T19:28:00.929Z"
                }
            ],
            "__v": 1,
            "createdAt": "2024-04-18T16:43:12.721Z",
            "updatedAt": "2024-04-18T19:28:00.930Z"
        },
        {
            "_id": "66214da094ef08e7061967b9",
            "name": "Fisrt Product",
            "image": "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-400x400.jpg",
            "description": "DNK Blue Shoes",
            "rating": 5,
            "numReviews": 4,
            "price": 25.26,
            "countInStock": 3,
            "reviews": [],
            "__v": 0,
            "createdAt": "2024-04-18T16:43:12.721Z",
            "updatedAt": "2024-04-18T16:43:12.721Z"
        },
        {
            "_id": "66214da094ef08e7061967b8",
            "name": "Fisrt Product",
            "image": "\thttps://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag1-400x400.jpg",
            "description": "Basic Gray Jeans",
            "rating": 5,
            "numReviews": 4,
            "price": 25.26,
            "countInStock": 3,
            "reviews": [],
            "__v": 0,
            "createdAt": "2024-04-18T16:43:12.721Z",
            "updatedAt": "2024-04-18T16:43:12.721Z"
        },
        {
            "_id": "66214da094ef08e7061967b7",
            "name": "Fisrt Product",
            "image": "https://websitedemos.net/brandstore-02/wp-content/…ds/sites/150/2017/12/product-w-jeans2-400x400.jpg",
            "description": "Dark Denium Jeans",
            "rating": 5,
            "numReviews": 4,
            "price": 150.26,
            "countInStock": 3,
            "reviews": [],
            "__v": 0,
            "createdAt": "2024-04-18T16:43:12.721Z",
            "updatedAt": "2024-04-18T16:43:12.721Z"
        },
        {
            "_id": "66214da094ef08e7061967b6",
            "name": "Fisrt Product",
            "image": "\thttps://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag1-400x400.jpg",
            "description": "Dark Brown Jeans",
            "rating": 5,
            "numReviews": 4,
            "price": 25.26,
            "countInStock": 3,
            "reviews": [],
            "__v": 0,
            "createdAt": "2024-04-18T16:43:12.720Z",
            "updatedAt": "2024-04-18T16:43:12.720Z"
        },
    ],
    "page": 1,
    "pages": 4
}
//ALL PRODUCTS
export const listProduct = (keyword = " ", pageNumber = " ") => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: dummyData,
        });

    }
};
const dummyProductData = {
    "_id": "66214da094ef08e7061967bb",
    "name": "Fisrt Product",
    "image": "\thttps://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-400x400.jpg",
    "description": "DNK Blue Shoes",
    "rating": 5,
    "numReviews": 4,
    "price": 25.26,
    "countInStock": 3,
    "reviews": [],
    "__v": 0,
    "createdAt": "2024-04-18T16:43:12.722Z",
    "updatedAt": "2024-04-18T16:43:12.722Z"
};
//SINGLE PRODUCT
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: dummyProductData,
        });
        // dispatch({
        //     type: PRODUCT_DETAILS_FAIL,
        //     payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        // });
    }
};

// PRODUCT REVIWES
export const CreateproductReviews = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_REVIES_CREATE_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`http://localhost:5000/api/products/${productId}/review`, review, config);
        dispatch({ type: PRODUCT_REVIES_CREATE_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_REVIES_CREATE_FAIL,
            payload: message,
        });
    }
};

// ADD TO CART
const cartProduct = {
    "_id": "66214da094ef08e7061967bb",
    "name": "Fisrt Product",
    "image": "\thttps://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-400x400.jpg",
    "description": "DNK Blue Shoes",
    "rating": 5,
    "numReviews": 4,
    "price": 25.26,
    "countInStock": 3,
    "reviews": [],
    "__v": 0,
    "createdAt": "2024-04-18T16:43:12.722Z",
    "updatedAt": "2024-04-18T16:43:12.722Z"
}
export const addToCart = (id, qty) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);

        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty,
            }
        });
    } catch (error) {
        console.error('Error adding product to cart:', error);

        // If the API call fails, dispatch the dummy data
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: cartProduct._id,
                name: cartProduct.name,
                image: cartProduct.image,
                price: cartProduct.price,
                countInStock: cartProduct.countInStock,
                qty,
            }
        });
    }

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removefromcart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_DELETE_ITEM,
        payload: id,
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// SAVE SHIPPING ADDRESS
export const saveShippingAddress = (data) => async (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

// PAYMENT METHOD
export const savePaymentMethod = (data) => async (dispatch) => {
    dispatch({
        type: CART_PAYMENT_METHOD,
        payload: data,
    })
    localStorage.setItem("paymentMethod", JSON.stringify(data))
}

// LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(`http://localhost:5000/api/users/login`, { email, password }, config);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

// LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({
        type: USER_LOGOUT
    });
    dispatch({
        type: USER_DETAILS_RESET
    });
    dispatch({
        type: ORDER_LIST_RESET
    })
    document.location.href = "/login";
}

// REGISTER
export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(`http://localhost:5000/api/users`, { name, email, password }, config);
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

// DETAILS
export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST });
        const {
            userLogin: { userInfo }, } = getState()


        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`http://localhost:5000/api/users/${id}`, config);
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: message,
        });
    }
};

// //Update
export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATES_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`http://localhost:5000/api/users/profile`, user, config);
        dispatch({ type: USER_UPDATES_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: USER_UPDATES_FAIL,
            payload: message
        })
    }
};

// CREATE ORDER
export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`http://localhost:5000/api/orders/`, order, config);
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
        dispatch({ type: CART_CLEAR_ITEM, payload: data })

        localStorage.removeItem("cartItems")
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message
        })
    }
};

//CREATE ORDER DETAILS
export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`http://localhost:5000/api/orders/${id}`, config);
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message
        })
    }
};

//  ORDER PAY
export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_PAY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`http://localhost:5000/api/orders/${orderId}/pay`, paymentResult, config);
        dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: message
        })
    }
};

// USER ORDER LIST
export const listOrder = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`http://localhost:5000/api/orders/get`, config);
        dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: message
        })
    }
};