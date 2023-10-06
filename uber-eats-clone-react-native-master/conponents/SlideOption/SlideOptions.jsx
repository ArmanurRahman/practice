import React from "react";
import SlideOptionData from "../../data/slide-option-data";
import SlideOption from "./SlideOption";

import { View, StyleSheet, ScrollView } from "react-native";

const SlideOptions = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {SlideOptionData.map((option) => (
                    <SlideOption
                        key={option.title}
                        title={option.title}
                        imageURL={option.imageURL}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginBottom: 10,
    },
});

export default SlideOptions;
