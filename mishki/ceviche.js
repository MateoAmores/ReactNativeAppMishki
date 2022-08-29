import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function ceviche() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/ceviche.jpg')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.descripcion}>
                        El ceviche es un plato tradicional Suramericano tan popular que muchos países como 
                        Ecuador tienen restaurantes llamados Cevicherias, especialistas en este plato. 
                        El Ceviche se origino durante la época colonial. Hoy en día el Ceviche se sirve como 
                        un elegante aperitivo o como plato principal, ligero y saludable.{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Ingredientes
                    </Text>
                    <Text style={styles.ingredientes}>
                        · 2 Unidades Cebolla Morada Picadas en tiras finas{'\n'}
                        · 1 Taza Jugo De Limón{'\n'}
                        · 4 Cucharadas Salsa De Tomate{'\n'}
                        · 1/4 Taza Néctar De Naranja{'\n'}
                        · 1 Unidad Tomate Cherry{'\n'}
                        · 2 Unidades Tomate sin pepas y picado{'\n'}
                        · 1 Cucharada Mostaza{'\n'}
                        · 3 Tazas Camarones Pelados y cocidos{'\n'}
                        · 1 Pizca Sal Al gusto{'\n'}
                        · 1 Pizca Pimienta Negra Al gusto{'\n'}
                        · 1 Cucharadita Cilantro Al gusto{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                        1. Curtir la cebolla{'\n'}
                        Lava la cebolla y cúrtela con un poco de sal. Reserva.{'\n'}
                        2. Para el líquido del ceviche{'\n'}
                        En una tazón mezcla jugo de limón, Salsa de Tomate, tomate licuado, tomate picado, cebollas, Néctar Naranja y Mostaza.{'\n'}
                        3. Usa los camarones{'\n'}
                        Añade los camarones y cilantro. Para terminar sazona con sal y pimienta negra al gusto.{'\n'}
                        SUGERENCIA: Acompañe con plátano verde en forma de chifles o patacones y limón.{'\n'}
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
