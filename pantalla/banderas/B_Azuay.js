import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export function B_Azuay() {
    return (
        <View style={styles.contenedor}>
            <Text >Bandera Azuay</Text>
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
