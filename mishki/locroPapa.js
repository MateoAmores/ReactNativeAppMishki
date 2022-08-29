import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function locroPapa() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/locroPapa.jpg')}
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
                        · 2 Cucharaditas Aceite de achiote{'\n'}
                        · 2 Cucharaditas Cebolla Perla picada finamente{'\n'}
                        · 2 1/2 Tazas Papas Peladas y picadas en cubos{'\n'}
                        · 1 1/2 Litro Agua{'\n'}
                        · 1/2 Taza Leche Entera{'\n'}
                        · 1 Taza Queso Fresco desmenuzado{'\n'}
                        · 1 Sobre Caldo Criollita{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                        1. En una cacerola a fuego medio, calienta aceite y dora cebolla junto con las papas. Una vez que tengan color añade el agua.{'\n'}
                        2. Cuando las papas estén casi suaves, incorpora Criollita y aplasta ligeramente un poco de las papas y sigue cocinandolas. Deja que hierva hasta que tome consistencia, sazona con sal si fuera necesario.{'\n'}
                        3. Para finalizar añade Leche LA LECHERA® y queso rallado. Si deseas puedes espolvorear perejil y servir con aguacate.{'\n'}
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
