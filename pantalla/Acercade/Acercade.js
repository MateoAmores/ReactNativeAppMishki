import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function Acercade() {
    return (
        <View style={styles.contenedor}>
            <Text>que yo tengo en mividaquemeponederodillasdasfsdfadfsdgdfgdsgdfs</Text>
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
