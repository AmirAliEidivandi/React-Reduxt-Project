import { ActionType } from "../contants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "amirali",
            category: "programmer",
        },
    ],
};

export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};
