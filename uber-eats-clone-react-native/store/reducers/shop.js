import { SET_SHOP } from "../actions/shop";
const initialState = {
    shops: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOP:
            return { state, shops: action.shops };
        default:
            return state;
    }
};

export default reducer;
