import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function maitoTilapia() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/maitoTilapia.jpg')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.descripcion}>
                    El Maito es un plato típico de la región amazónica, se trata de un envuelto 
                    generalmente en hoja de bijao y para su relleno se utilizan ingredientes que 
                    se dan en la región, como es el palmito, pero su ingrediente principal el 
                    pescado llamado tilapia.{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Ingredientes
                    </Text>
                    <Text style={styles.ingredientes}>
                        · 2 tilapia lavadas y limpias{'\n'}
                        · 1 cebolla colorada{'\n'}
                        · 2 pimientos verdes{'\n'}
                        · 2 zanahorias{'\n'}
                        · 6 dientes de ajo{'\n'}
                        · 3 ramas de culantro{'\n'}
                        · Aceite{'\n'}
                        · Hojas de bijao u hojas de plátano{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                        1. Como primer paso vamos a prepara un aliño para la tilapia, en un mortero trituramos los dientes de ajo, el culantro y ponemos un poco de aceite para crear una pasta.{'\n'}
                        2. Con esta pasta procedemos a sazonar las tilapias muy bien por dentro y por fuera.{'\n'}
                        3. Picamos la cebolla colorada en forma de plumas, de igual manera las zanahorias y los pimientos en forma de tiras.{'\n'}
                        4. Poniendo como base 2 o 3 hojas de bijao ponemos las tilapias, las rellenamos con los vegetales que picamos y agregamos un poco mas de aderezo, envolvemos los pescados y amarramos con un alambre u hojas de paja toquilla.{'\n'}
                        5. Finalmente, las ponemos a la brasa y las dejamos azar por unos 30 minutos siempre dando vueltas, los sacamos, desenvolvemos y están listas para ser servidas.{'\n'}
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
