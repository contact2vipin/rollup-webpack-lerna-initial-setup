import { IActionWithPayload } from "@vk/common-utils";
import { IAppState } from "./typings";
import { constants } from "./constants";

const initialState: IAppState = {
    products: []
};

const productReducer = (state: IAppState = initialState, action: IActionWithPayload) => {
    switch (action.type) {

        case constants.SET_PRODUCT_LIST:
            return {...state, products: [...action.payload]};
        
        default:
            return state;
    }
};

export default productReducer;