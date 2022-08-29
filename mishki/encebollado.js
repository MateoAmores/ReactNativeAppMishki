import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function encebollado() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/encebollado.jpg')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.descripcion}>
                    El encebollado es un caldo de pescado que contiene albacora, yuca, tomate, cebolla colorada, cilantro, ají en polvo, comino y otras especias.{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Ingredientes
                    </Text>
                    <Text style={styles.ingredientes}>
                        · 1 Cucharada Aceite Vegetal{'\n'}
                        · 1 1/2 Taza Cebolla Morada picada en tiras finas{'\n'}
                        · 3 Tomates riñón maduros y picados en cuartos{'\n'}
                        · 1/2 Cucharada Comino Molido{'\n'}
                        · 2 Cucharaditas Ají para seco{'\n'}
                        · 1 1/2 Litro Agua{'\n'}
                        · 4 Cucharadas Cilantro fresco picado finamente{'\n'}
                        · 1 libra de albacora fresca, en lomos{'\n'}
                        · 2 Tazas Yuca cortada en cubos{'\n'}
                        · 2 Sobre Base para sopa Vegetales De La Huerta{'\n'}
                        · 2/3 Taza Pimiento Rojo picado en pedazos grandes{'\n'}
                        · 2/3 Taza Pimiento Verde Picado en pedazos grandes{'\n'}{'\n'}
                        · 1/2 Taza Apio picado en pedazos grandes{'\n'}
                        · 2 Dientes de ajo{'\n'}
                        · 4 Unidades Limón cortado en cuartos{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                        1. Coloca en una olla a hervir el agua, añade 2 tomates y media cebolla paiteña picados, añade el apio los trozos de pimiento, 2 cucharadas de cilantro, ajos, comino, sal, pimienta y aji para seco.{'\n'}
                        2. En otra olla aparte cocina la yuca picada previamente con bastante agua hasta que este suave.{'\n'}
                        3. Por aparte realiza el encurtido de cebolla con el resto de cebolla paiteña picada finamente, lavada, escurrida y sazonada con sal, limon y cilantro restante picado. Deja reposar hasta que se curta.{'\n'}
                        4. Añade en el caldo del paso 1 los lomos de albacora, cocinala completamente y retira de la olla.{'\n'}
                        5. Luego de reservada la albacora cocida, retira los vegetales del caldo y colocalos en una licuadora, añade un poco de yuca cocida y un poco de liquido de cocción de la yuca. Cierne el liquido procesado sobre el caldo y añade el agua de cocción de las yucas. Disuelve el sobre de Base para Sopa de Vegetales MAGGI® De La Huerta. Llevamos a ebullición durante 5 minutos a fuego medio. Regresamos la albacora a la preparación.{'\n'}
                        6. Rectificamos los sabores con sal y pimienta. Coloca un poco de sopa con pedazos de yuca y albacora en el plato y sirve acompañado con un poco del curtido de cebolla que preparaste anteriormente.{'\n'}
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
