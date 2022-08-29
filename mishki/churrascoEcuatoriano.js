import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function churrasco() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/churrasco.jpg')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.descripcion}>
                    El churrasco es uno de los platos más populares en Ecuador. Consiste en una chuleta de carne de vacuno cocinada a la plancha o a la brasa.{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Ingredientes
                    </Text>
                    <Text style={styles.ingredientes}>
                        · 4-6 churrascos{'\n'}
                        · 2 Cdas. de ajo molido (4-6 dientes de ajo){'\n'}
                        · 2 Cdas. de aceite de oliva{'\n'}
                        · 2 Cda. de vinagre blanco o vinagre de vino{'\n'}
                        · 1/4 cdta. de orégano seco{'\n'}
                        · 1 Cda. de pimienta molida{'\n'}
                        · 2 cdtas. de sal{'\n'}
                        · 1 pimiento morrón verde cortado en tiras{'\n'}
                        · 1-2 cebollas cortadas en rodajas{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                        1. Preparar y adobar los churrascos{'\n'}
                        2. Limpia y seca los churrascos con un paño.{'\n'}
                        3. En un pilón o recipiente hondo, mezcla bien el ajo molido, la pimienta, la sal, al aceite de oliva, el vinagre y el orégano.{'\n'}
                        4. Coloca los churrascos en un molde y procede a sazonarlos con el adobo que acabas de preparar en el pilón. Asegúrate de que la carne quede completamente cubierta.{'\n'}
                        5. Si tienes tiempo, tapa el molde con papel aluminio o plástico y deja reposar en la nevera durante la noche, o al menos una hora para que la carne se sazone completamente y absorba los sabores de los ingredientes.{'\n'}
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
