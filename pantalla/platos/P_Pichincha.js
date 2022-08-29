import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function P_Pichincha() {
    return (
        <View style={styles.contenedor}>
            <Text >lindo</Text>
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
