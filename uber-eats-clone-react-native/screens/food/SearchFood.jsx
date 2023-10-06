import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import slideOptionData from "../../data/slide-option-data";
import SearchGridTile from "../../conponents/SearchGridTile";
import Input from "../../conponents/UI/Input";

const SearchFoodScreen = (props) => {
    const renderItem = (itemDate) => {
        return (
            <View style={styles.screen}>
                <SearchGridTile
                    title={itemDate.item.title}
                    imageURL={itemDate.item.imageURL}
                />
            </View>
        );
    };
    return (
        <View>
            <Input label='Search' />
            <FlatList
                data={slideOptionData}
                keyExtractor={(item, index) => item.title}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        //marginTop: 25,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export const ScreenOptions = (navData) => {
    return {
        headerTitle: "Search",
    };
};
export default SearchFoodScreen;
