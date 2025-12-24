import { IActionWithPayload } from "@vk/common-utils";
import { constants } from "./constants";
import { IAppState } from "./typings";

const initialState: IAppState = {
    productsInCart: []
};

const cartData = (state = initialState, action: IActionWithPayload) => {

    switch (action.type) {
        
        case constants.ADD_TO_CART:
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload]
            };

        case constants.REMOVE_FROM_CART:
            console.log('Item removed from cart!!');
            const cartItems = [...state.productsInCart];
            cartItems.pop();
            return {
                ...state,
                productsInCart: [...cartItems]
            };

        case constants.EMPTY_CART:
            console.log('Cart is empty now!');
            return {
                ...state,
                productsInCart: []
            };

        default:
            return state;
    }
};

export default cartData;