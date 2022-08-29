import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export function B_Pichincha() {
    return (
        <View style={styles.contenedor}>
            <Text >Bandera Pichincha</Text>
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
