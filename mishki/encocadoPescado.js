import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function encocadoPescado() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/encocadoPescado.jpg')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.descripcion}>
                    El encocado de pescado es un plato típico de la costa ecuatoriana que consiste de pescado corvina cocinado en una deliciosa salsa de coco.{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Ingredientes
                    </Text>
                    <Text style={styles.ingredientes}>
                        · 2 kilos de filetes de corvina cortados en trozos medianos{'\n'}
                        · Jugo de 2 limones{'\n'}
                        · Jugo de 2 naranjas{'\n'}
                        · 4 dientes de ajo machacados{'\n'}
                        · 1 cucharadita de comino molido{'\n'}
                        · 1 cucharadita de achiote molido{'\n'}
                        · 1 cucharadita de pepitas de cilantro molido{'\n'}
                        · 2 cucharadas de aceite{'\n'}
                        · 1 cebolla blanca cortada en cubitos{'\n'}
                        · 2 pimientos cortados en cubitos{'\n'}
                        · 4 tomates pelados y cortados en cubitos{'\n'}
                        · 1 coco fresco licuado (el agua y la pulpa de coco){'\n'}
                        · 3 cucharadas de cilantro finamente cortado{'\n'}
                        · Coco rallado fresco{'\n'}
                        · Sal al gusto{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                        1. Colocar en un tazón el jugo de limón, el jugo de naranja, el ajo, el comino, el achiote, las pepitas de cilantro y sal. Mezclar bien para preparar un aliño. Agregar los trozos de pescado, cubrirlos bien con el aliño y dejarlo reposar en la refrigeradora durante 2 horas.{'\n'}
                        2. Calentar el aceite en una sartén y agregue la cebolla, los tomates, los pimientos y sal. Cocinar a fuego medio durante 5 minutos. Agregar el coco licuado, mezclar bien y cocinar durante 10 minutos.{'\n'}
                        3. Agregar los trozos de pescado, tapar parcialmente y dejar cocinar a fuego lento durante 20 minutos. Espolvorear con el coco rallado y el cilantro. Servir el encocado de pescado con arroz y plátanos maduros fritos.{'\n'}
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
