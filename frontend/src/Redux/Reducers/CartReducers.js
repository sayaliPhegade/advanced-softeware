import { CART_ADD_ITEM, CART_CLEAR_ITEM, CART_DELETE_ITEM, CART_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_RESET, ORDER_LIST_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_RESET, ORDER_PAY_SUCCESS } from "../Constants/ProductConstants";
//CART PRODUCTS
export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        case CART_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }
        case CART_CLEAR_ITEM:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}

//CREATE ORDER
export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true };
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, order: action.payload };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return { }
        default:
            return state;
    }
}

// ORDER DETAILS
export const orderDetailsReducer = (state = {loading: true, orderItems: [], shippingAddress: {}}, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false,  order: action.payload };
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

// ORDER PAY
export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return {  loading: true };
        case ORDER_PAY_SUCCESS:
            return { loading: false,  success:true };
        case ORDER_PAY_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_PAY_RESET:
            return {}
        default:
            return state;
    }
}

// USER ORDER
export const orderListReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return {  loading: true };
        case ORDER_LIST_SUCCESS:
            return { loading: false,  orders: action.payload};
        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_LIST_RESET:
            return { orders: []}
        default:
            return state;
    }
}