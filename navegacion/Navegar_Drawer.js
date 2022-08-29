import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";

const Drawer = createDrawerNavigator();

import B_Carchi from "../pantalla/banderas/B_Carchi"
import C_Azuay from "../pantalla/capitales/C_Azuay"
import P_Pichincha from "../pantalla/platos/P_Pichincha"
import Acercade from "../pantalla/Acercade/Acercade"

const Navegar_Drawer = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name = "Banderas" component={B_Carchi}/>
                <Drawer.Screen name = "Capitales" component={C_Azuay}/>
                <Drawer.Screen name = "Platos" component={P_Pichincha}/>
                <Drawer.Screen name ="Acercade" component={Acercade}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navegar_Drawer