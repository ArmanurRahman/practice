import React, { useState, useEffect, useRef } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    FlatList,
    Text,
    Animated,
} from "react-native";
import BannerItem from "./BannerItem";

const { width, height } = Dimensions.get("window");

function infiniteScroll(dataList, slide) {
    const numberOfData = dataList.length;
    let scrolledValue = 0;
    let scrolled = 0;

    setInterval(() => {
        scrolled++;
        if (scrolled < numberOfData) {
            scrolledValue = scrolledValue + width;
        } else {
            scrolledValue = 0;
            scrolled = 0;
        }
        if (slide) {
            slide.current.scrollToOffset({
                animated: true,
                offset: scrolledValue,
            });
        }
    }, 3000);
}

const Banner = ({ data }) => {
    const slide = useRef();

    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);

    infiniteScroll(data, slide);
    if (data && data.length) {
        return (
            <View>
                <FlatList
                    data={data}
                    ref={slide}
                    keyExtractor={(item, index) => "key" + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment='center'
                    scrollEventThrottle={15}
                    decelerationRate='fast'
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => {
                        return <BannerItem item={item} />;
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp",
                        });

                        return (
                            <Animated.View
                                key={i}
                                style={{
                                    opacity,
                                    height: 10,
                                    width: 10,
                                    backgroundColor: "#595959",
                                    margin: 8,
                                    borderRadius: 5,
                                }}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    dotView: {
        top: -40,
        flexDirection: "row",
        justifyContent: "center",
    },
});
export default Banner;
