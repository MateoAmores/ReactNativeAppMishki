import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export function P_Carchi() {
    return (
        <View style={styles.contenedor}>
            <Text >Platos Típicos Carchi</Text>
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
