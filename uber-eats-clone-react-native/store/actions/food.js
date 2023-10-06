export const FETCH_FOODS = "FETCH_FOODS";
export const SET_FOODS = "SET_FOODS";
import foodModel from "../../models/food";

export const fetchFoods = () => {
    return async (dispatch) => {
        try {
            response = await fetch(
                "https://uber-eats-clone-react-native.firebaseio.com/food.json"
            );
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const resData = await response.json();
            const foods = [];
            for (const key in resData) {
                foods.push(
                    new foodModel(
                        key,
                        resData[key].category,
                        resData[key].imageUrl,
                        resData[key].price,
                        resData[key].rating,
                        resData[key].description,
                        resData[key].title,
                        resData[key].shop,
                        resData[key].arriveDate
                    )
                );
            }
            dispatch({ type: SET_FOODS, foods: foods });
        } catch (err) {
            throw err;
        }
    };
};
