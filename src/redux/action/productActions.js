import { ActionType } from "../contants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products,
    };
};

export const seletctedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product
    };
};
