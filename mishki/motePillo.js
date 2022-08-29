import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function motePillo() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/mote_pillo.jpg')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.descripcion}>
                    El mote pillo es un plato tradicional de la Sierra del Ecuador, suele servirse 
                    acompañado de queso o en ocasiones carne.{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Ingredientes
                    </Text>
                    <Text style={styles.ingredientes}>
                        · 454 gramos de mote cocinado{'\n'}
                        · 4 huevos{'\n'}
                        · 1 taza de cebolleta finamente picada{'\n'}
                        · 1/2 cucharadita de achiote{'\n'}
                        · 1 cucharada de culantro picado{'\n'}
                        · 1/4 taza de leche{'\n'}
                        · 2 cucharadas de Bonella{'\n'}
                        · 2 diente de ajo machacado{'\n'}
                        · Sal al gusto{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                    1. Poner al fuego una sartén con Bonella®, cuando esta se derrita agregar la cebolla blanca, ajo, achiote y sal. Calentar y freír por cinco minutos.{'\n'}
                    2. Después de ese tiempo agregar al sartén el mote y revolver todo por dos minutos más.{'\n'}
                    3. Verter la leche al sartén y mezclar hasta que el mote la haya absorbido toda. Esto puede demorar algunos minutos.{'\n'}
                    4. Mientras tanto batir los huevos y después de que se cumpla el paso anterior agregar al sartén sin dejar de revolver todo. Se cocina la mezcla por 5 minutos.{'\n'}
                    5. Antes de apagar el fuego agregar el culantro picado y mezclar. Servir caliente.{'\n'}
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
