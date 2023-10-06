import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Banner from "../../conponents/Banner/Baner";
import { dummyData } from "../../data/banner-data";
import SlideOptions from "../../conponents/SlideOption/SlideOptions";
import CardHolder from "../../conponents/CardHolder";
import cardData from "../../data/card-data";
import { useDispatch, useSelector } from "react-redux";
import * as shopActions from "../../store/actions/shop";
import * as foodActions from "../../store/actions/food";

const HomeScreen = (props) => {
    const dispatch = useDispatch();

    const allShops = useSelector((state) => state.shop.shops);
    const allFoods = useSelector((state) => state.food.foods);
    const userChosenCategory = ["Bangladeshi", "Indian"];
    let favFood = [];
    allFoods.forEach((item) => {
        if (item.category === "Bangladeshi") {
            const shopInfo = allShops.find(
                (shop) => shop.shopId === item.shopId
            );
            favFood.push({ ...item, ...shopInfo });
        }
    });

    let newFood = [];

    const newFoods = allFoods
        .sort(function (a, b) {
            return new Date(b.arriveDate) - new Date(a.arriveDate);
        })
        .slice(0, 5);
    newFoods.forEach((item) => {
        const shopInfo = allShops.find((shop) => shop.shopId === item.shopId);
        newFood.push({ ...item, ...shopInfo });
    });

    const topRatedFoods = [];
    const topFoods = allFoods
        .sort(function (a, b) {
            return b.rating - a.rating;
        })
        .slice(0, 5);
    topFoods.forEach((item) => {
        const shopInfo = allShops.find((shop) => shop.shopId === item.shopId);
        topRatedFoods.push({ ...item, ...shopInfo });
    });

    const cheapestFoods = [];
    const cheap = allFoods
        .sort(function (a, b) {
            return a.price - b.price;
        })
        .slice(0, 5);
    cheap.forEach((item) => {
        const shopInfo = allShops.find((shop) => shop.shopId === item.shopId);
        cheapestFoods.push({ ...item, ...shopInfo });
    });
    //console.log(allShops);
    console.log(newFoods);
    useEffect(() => {
        dispatch(shopActions.fetchShop());
        dispatch(foodActions.fetchFoods());
    }, []);
    return (
        <ScrollView style={styles.screen}>
            <Banner data={dummyData} />
            <View style={styles.container}>
                <SlideOptions />
                <CardHolder legend='Your Favorite' data={favFood} />
                <CardHolder legend='New Arrival' data={newFood} />
                <CardHolder legend='Top Rated' data={topRatedFoods} />
                <CardHolder legend='Cheapest' data={cheapestFoods} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#ededed",
        marginTop: 25,
    },
    container: {},
});

export const ScreenOptions = (navData) => {
    return {
        headerTitle: "Home",
    };
};
export default HomeScreen;
