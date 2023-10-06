import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SlideOption = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.surface}>
                <Image style={styles.image} source={{ uri: props.imageURL }} />
                <View style={styles.title}>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    surface: {
        margin: 10,
        width: 60,
        height: 80,
        alignContent: "center",
        justifyContent: "center",
    },
    title: {},
    text: {
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: 60,
        borderRadius: 30,
    },
});

export default SlideOption;
