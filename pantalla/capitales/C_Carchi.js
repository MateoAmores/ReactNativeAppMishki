import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export function C_Carchi() {
    return (
        <View style={styles.contenedor}>
            <Text >Capital Carchi</Text>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
