import { constants } from "./constants";

const addToCart1 = (data: any) => {
    return {
        type: constants.ADD_TO_CART1,
        payload: data,
    };
}

export { addToCart1 };