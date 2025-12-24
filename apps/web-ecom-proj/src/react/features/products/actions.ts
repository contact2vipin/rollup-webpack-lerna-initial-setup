import { constants } from "./constants";

const productList = (data?: any) => {
    return {
        type: constants.PRODUCT_LIST,
        payload: data,
    };
};

const setProductList = (data?: any) => {
     return {
        type: constants.SET_PRODUCT_LIST,
        payload: data,
    };
};

export { productList, setProductList };