import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REVIES_CREATE_FAIL, PRODUCT_REVIES_CREATE_REQUEST, PRODUCT_REVIES_CREATE_RESET, PRODUCT_REVIES_CREATE_SUCCESS } from "../Constants/ProductConstants";

// ALL PRODUCTS
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                pages: action.payload.pages,
                page: action.payload.page,
                products: action.payload.products
            };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

// SINGLE PRODUCTS
export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//  PRODUCTS REVIEWS
export const productReviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_REVIES_CREATE_REQUEST:
            return { loading: true };
        case PRODUCT_REVIES_CREATE_SUCCESS:
            return { loading: false, success: true };
        case PRODUCT_REVIES_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_REVIES_CREATE_RESET:
            return {}
        default:
            return state;
    }
}