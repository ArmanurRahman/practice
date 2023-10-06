import React from "react";
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Image,
    Text,
    Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
const SearchGridTile = (props) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent style={{ flex: 1 }} onPress={() => {}}>
                <View style={styles.container}>
                    <Image
                        source={{ uri: props.imageURL }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        margin: 10,
        //height: width / 2 - 10,
    },
    container: {
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    title: {
        fontSize: 20,
        textAlign: "right",
        padding: 10,
    },
    image: {
        width: width / 2 - 10,
        height: width / 2 - 10,
    },
});

export default SearchGridTile;
