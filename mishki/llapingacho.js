import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function llapingacho() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/llapingacho.jpg')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.descripcion}>
                    Los llapingachos son un plato típico ecuatoriano que consiste de tortillas de puré de papa rellenas con queso. Se sirven para el desayuno, como entrada o como acompañantes para muchos otros platos ecuatorianos. Los llapingachos se preparan con la papa chola, que es una variedad de papa con mucho almidón, para lograr la textura necesaria para que los llapingachos queden esponjosos.{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Ingredientes
                    </Text>
                    <Text style={styles.ingredientes}>
                        · 6 papas grandes peladas y cortadas en trozos medianos{'\n'}
                        · 2 cucharadas de aceite{'\n'}
                        · ½ taza de cebolla blanca picada finamente{'\n'}
                        · 2 cucharaditas de achiote molido{'\n'}
                        · 1 taza de rallado o desmenuzado{'\n'}
                        · Sal al gusto{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                        1. Hervir las papas con agua y sal hasta que estén suaves. Hacer un puré con las papas.{'\n'}
                        2. Calentar el aceite a temperatura media y sofreír la cebolla y el achiote. Agregar el refrito de cebolla y sal al gusto al puré de papas y mezclar bien. Cubrir la mezcla y dejar reposar a temperatura ambiente durante una hora.{'\n'}
                        3. Formar bolas pequeñas con la mezcla de papas, hacer un agujero en la mitad de cada bola y rellenarlas con el queso. Aplastar las bolas hasta que tengan forma de tortillas gruesas y dejarlas reposar en la refrigeradora durante 30 minutos o hasta que la hora de cocinarlas.{'\n'}
                        4. Cocinar las tortillas en una parrilla plana o una sartén caliente hasta que estén doradas por ambos lados. Servir los llapingachos con huevo frito o salsa de maní o de aguacate o chorizo o ají criollo.{'\n'}
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
    subtitulo: {
        textAlign: "center",
        fontWeight: "bold",
        color: '#fff',
        fontSize: 28,
        fontFamily: "sans-serif-light",
        textShadowColor: '#000',
        textShadowOffset: { 
            width: 1,
            height: 0,
        },
        textShadowRadius: 1,
    },
    descripcion: {
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
    ingredientes: {
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
    proceso: {
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
