import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Card from "./Card/Card";

const CardHolder = (props) => {
    return (
        <View style={styles.cardHolder}>
            <Text style={styles.legend}>{props.legend}</Text>
            <ScrollView
                horizontal
                style={styles.container}
                showsHorizontalScrollIndicator={false}
            >
                {props.data.map((item) => (
                    <Card
                        key={item.foodId}
                        imageUrl={item.imageUrl}
                        shopName={item.shopName}
                        category={item.category}
                        deliveryTime={item.deliveryTime}
                        rating={item.rating}
                        deliveryFee={item.deliveryFee}
                        other={item.other}
                        price={item.price}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    cardHolder: {
        paddingLeft: 20,
        marginVertical: 3,
        backgroundColor: "white",
    },
    legend: {
        fontSize: 28,
    },
    container: {
        marginVertical: 10,
    },
});

export default CardHolder;
