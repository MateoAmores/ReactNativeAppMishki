import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

import info from "../mishki/info"
import bolonVerde from "../mishki/bolonVerde"
import motePillo from "../mishki/motePillo"
import maitoTilapia from "../mishki/maitoTilapia"
import ceviche from "../mishki/ceviche"
import churrasco from "../mishki/churrascoEcuatoriano"
import cuyAsado from "../mishki/cuyAsado";
import encebollado from "../mishki/encebollado";
import encocadoPescado from "../mishki/encocadoPescado";
import llapingacho from "../mishki/llapingacho";
import locroPapa from "../mishki/locroPapa";

const Navegar_Mishki = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name = "Información" component={info}/>
                <Drawer.Screen name = "Churrasco" component={churrasco}/>
                <Drawer.Screen name = "Llapingacho" component={llapingacho}/>
                <Drawer.Screen name = "Bolón de Verde" component={bolonVerde}/>
                <Drawer.Screen name = "Ceviche" component={ceviche}/>
                <Drawer.Screen name = "Maito de Tilapia" component={maitoTilapia}/>
                <Drawer.Screen name = "Encocado de Pescado" component={encocadoPescado}/>
                <Drawer.Screen name = "Encebollado" component={encebollado}/>
                <Drawer.Screen name = "Mote Pillo" component={motePillo}/>
                <Drawer.Screen name = "Locro de Papa" component={locroPapa}/>
                <Drawer.Screen name = "Cuy Asado" component={cuyAsado}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navegar_Mishki