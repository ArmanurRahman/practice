import { SET_FOODS } from "../actions/food";

const initialState = {
    foods: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOODS:
            return { ...state, foods: action.foods };
        default:
            return state;
    }
};

export default reducer;
