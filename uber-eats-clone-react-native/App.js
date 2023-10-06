import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MenuNavigator } from "./navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import shopReducer from "./store/reducers/shop";
import foodReaducer from "./store/reducers/food";

export default function App() {
    const rootReducer = combineReducers({
        shop: shopReducer,
        food: foodReaducer,
    });

    const store = createStore(rootReducer, applyMiddleware(Thunk));
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MenuNavigator />
            </NavigationContainer>
        </Provider>
    );
}
