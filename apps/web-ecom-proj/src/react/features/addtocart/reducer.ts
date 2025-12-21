import { IActionWithPayload } from "@vk/common-utils";
import { constants } from "./constants";

const initialState = {};

const cartData1 = (state = initialState, action: IActionWithPayload) => {
    switch (action.type) {

        case constants.ADD_TO_CART1:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export default cartData1;