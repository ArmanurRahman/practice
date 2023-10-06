import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

const Input = (props) => {
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                {...props}
                style={styles.input}
                value={""}
                onChangeText={() => {}}
                //onBlur={lostFocusHandler}
            ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    formControl: {
        width: "100%",
        padding: 20,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    label: {
        marginVertical: 8,
        fontSize: 20,
    },
});

export default Input;
