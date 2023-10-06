import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, heigth } = Dimensions.get("window");
const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: props.imageUrl }} style={styles.image} />
            </View>

            <View style={styles.detailContainer}>
                <View>
                    <Text style={styles.shopName}>{props.shopName}</Text>
                </View>
                <Text style={styles.category}>{props.category}</Text>

                <View style={styles.durationRating}>
                    <Text style={styles.duration}>
                        {props.deliveryTime} MIN
                    </Text>
                    <Text style={styles.ratingText}>{props.rating}</Text>
                </View>
                <Text style={styles.deliveryFee}>
                    Delivery fee ${props.deliveryFee}
                </Text>
                <Text style={styles.deliveryFee}>Price ${props.price}</Text>
                <Text>{props.other}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: width - 80,
        height: 350,
        marginRight: 20,
        borderRadius: 5,
        overflow: "hidden",
    },
    imageContainer: {
        width: "100%",
        height: "60%",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    detailContainer: {
        width: "80%",
        height: "40%",
    },
    shopName: {
        fontSize: 22,
    },
    durationRating: {
        flexDirection: "row",
    },
    duration: {
        fontSize: 16,
        backgroundColor: "#ededed",
        marginRight: 10,
    },
    category: {
        fontSize: 20,
    },
    ratingContainer: {},
    ratingText: {
        fontSize: 16,
        backgroundColor: "#ededed",
    },
    deliveryFee: {
        fontSize: 16,
    },
});

export default Card;
