import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function cuyAsado() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/cuyAsado.jpg')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.descripcion}>
                    El cuy asado es un plato típico con mucha tradición en la capital azuaya. Es un término kichwa que significa mamífero roedor y esta animal es originario de la cordillera de Los Andes. En el Ecuador el mayor consumo de cuy está en Cuenca.{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Ingredientes
                    </Text>
                    <Text style={styles.ingredientes}>
                        · 1 cuy pelado{'\n'}
                        · 8 dientes de ajo machacados{'\n'}
                        · 1 cucharada de comino{'\n'}
                        · ½ cucharadita de achiote{'\n'}
                        · 1 kilo de papas peladas{'\n'}
                        · 8 cucharadas de aceite{'\n'}
                        · 2 ramitas de cebolletas finamente cortadas{'\n'}
                        · 1 cebolla colorada finamente picada{'\n'}
                        · 1 pizca de orégano{'\n'}
                        · 1 pizca de pimienta molida{'\n'}
                        · 1 cucharada de cilantro{'\n'}
                        · Sal a gusto{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                        1. Aliñar el cuy con 5 dientes de ajo, el comino y sal. Dejarlo reposar hasta el día siguiente.{'\n'}
                        2. Calentar en una sartén 6 cucharadas de aceite con el achiote. Barnizar el cuy con el aceite de achiote.{'\n'}
                        3. Asar el cuy en carbón, pinchándolo para que vaya cocinándose homogéneamente.{'\n'}
                        4. Calentar en una sartén 2 cucharadas de aceite y añadir la cebolla, los 3 dientes de ajo restantes, las cebolletas, el cilantro, el orégano, la pimienta y sal. Cocinar durante 5 minutos.{'\n'}
                        5. Agregar las papas y suficiente agua hasta cubrirlas. Esperar hasta que el agua hierva, reducir la temperatura y cocinar a fuego lento hasta que las papas estén blandas.{'\n'}
                        6. Servir el cuy sobre las papas cocidas acompañado de hojas de lechuga, tomate y curtido de cebolla.{'\n'}
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
