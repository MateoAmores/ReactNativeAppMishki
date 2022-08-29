import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar } from "react-native";

export default function bolonVerde() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/bolonVerde.jpg')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.descripcion}>
                    El bolón de verde es un platillo típico de la costa ecuatoriana, por lo general se lo
                    considera un plato ideal para el desayuno, pero también se puede servir como entrada o acompañante.{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Ingredientes
                    </Text>
                    <Text style={styles.ingredientes}>
                        · 4 plátanos verdes pelados y cortados en trozos medianos{'\n'}
                        · 4-5 cucharadas de mantequilla o manteca de chancho{'\n'}
                        · 2 cucharadas de aceite de canola o de girasol{'\n'}
                        · 1 cucharada de ají picante o chile molido{'\n'}
                        · 1 cucharada de comino molido{'\n'}
                        · 1 taza de queso desmenuzado o rallado o 1 taza de chorizo cocido o chicharrones
                        y/o maní o cacahuates molidos{'\n'}
                        · Sal al gusto{'\n'}
                    </Text>
                    <Text style={styles.subtitulo}>
                        Proceso
                    </Text>
                    <Text style={styles.proceso}>
                    1. Agregue los trozos de plátano y cocine a temperatura media baja durante unos 30-40 minutos o hasta que estén muy suaves, volteándolos cada 10 minutos. Deben quedar ligeramente dorados, pero no crujientes.{'\n'}
                    2. Espolvoree los trozos de plátanos cocidos con aji en polvo o chile molido, el comino, y sal al gusto.{'\n'}
                    3. Ponga los pedazos de plátanos calientes en un tazón grande.{'\n'}
                    4. Machaque los plátanos hasta obtener una masa gruesa.{'\n'}
                    5. Forma bolas pequeñas con la masa, el tamaño debe ser un poco más pequeño que una pelota de tenis.{'\n'}
                    6. Haga un agujero en el centro de cada bola y rellénelo con el queso (o chorizo o chicharrones). Presione con suavidad el relleno, cúbralo y fórmelo nuevamente en forma de bola.{'\n'}
                    7. El bolon de verde se puede servir de esta manera directamente. Si lo prefiere con un exterior un poco crujiente y bien caliente, puede seguir los pasos restantes.{'\n'}
                    8. Caliente el aceite a fuego alto, agregue las bolas de plátano rellenas y fríalas hasta que estén doradas y crujientes por ambos lados.{'\n'}
                    9. Ponga los bolones fritos en un plato cubierto con papel absorbente para escurrir la grasa y sirva inmediatamente acompañado de café y huevo frito.{'\n'}
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
