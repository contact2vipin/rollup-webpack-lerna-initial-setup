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



export { addToCart, removeFromCart, emptyCart };