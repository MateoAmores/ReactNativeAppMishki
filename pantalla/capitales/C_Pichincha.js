import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export function C_Pichincha() {
    return (
        <View style={styles.contenedor}>
            <Text >Capital Pichincha</Text>
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
