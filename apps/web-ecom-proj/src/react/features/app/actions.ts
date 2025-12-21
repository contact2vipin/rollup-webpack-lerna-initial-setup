import { constants } from "./constants";

const addToCart = (data?: any) => {
    return {
        type: constants.ADD_TO_CART,
        payload: data,
    };
};

const removeFromCart = (data?: any) => {
    return {
        type: constants.REMOVE_FROM_CART,
        payload: data,
    };
};

const emptyCart = (data?: any) => {
    return {
        type: constants.EMPTY_CART,
        payload: data,
    };
};

const productList = (data?: any) => {
    const data1 = 'product is here';
    console.log(data);
    console.log(data1);
    
    return {
        type: constants.GET_PRODUCT_LIST,
        payload: data1,
    };
};

export { addToCart, removeFromCart, emptyCart, productList };