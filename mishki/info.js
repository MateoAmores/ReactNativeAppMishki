import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function info() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/ecuador.png')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.titulo}>
                    {'\n'}
                    ECUADOR
                    </Text>                    
                    <Text style={styles.subtitulo}>
                    Mishki
                    </Text>                    
                    <Text style={styles.descripcion}>
                    {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
                    La gastronomía ecuatoriana se caracteriza por una gran variedad de sabores y aromas los cuales 
                    se funden en un elemento esencial llamado calidad. El premio permitirá promocionar y posicionar 
                    la gastronomía ecuatoriana, convirtiendo a Ecuador en Potencia Turística.
                    </Text>                    
                </ScrollView>                        
            </ImageBackground>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        fontFamily: "sans-serif-light",
        textShadowColor: '#000',
        textShadowOffset: { 
            width: 1,
            height: 0,
        },
        textShadowRadius: 1,        
    },    
    titulo: {
        textAlign: "center",
        fontWeight: "bold",
        color: '#fff',
        fontSize: 50,
        fontFamily: "sans-serif-light",
        textShadowColor: '#000',
        textShadowOffset: { 
            width: 1,
            height: 0,
        },
        textShadowRadius: 1,
    },
    subtitulo: {
        textAlign: "center",
        fontWeight: "bold",
        color: '#fff',
        fontSize: 40,
        fontFamily: "sans-serif-light",
        textShadowColor: '#000',
        textShadowOffset: { 
            width: 1,
            height: 0,
        },
        textShadowRadius: 1,
    },
    descripcion: {
        alignContent: "flex-end",
        textAlign: "center",
        fontWeight: "bold",
        color: '#fff',
        fontSize: 20,
        fontFamily: "sans-serif-light",
        textShadowColor: '#000',
        textShadowOffset: { 
            width: 1,
            height: 0,
        },
        textShadowRadius: 1,
    },
    foto: {
        flex: 1,
        justifyContent: 'center',
    },
});
