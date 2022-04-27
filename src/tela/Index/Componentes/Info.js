import React from "react";
import {StyleSheet, Image, Text, View, TouchableOpacity} from "react-native";
import pin from "../../../../assets/pin.png";
import fig from "../../../../assets/fig.png";
export default function Info(){
    return(
        <View style={estilos.ViewInfo}>
                <Text style={estilos.Titulo}>
                    Festival Chinatown
                </Text>
            <View style={estilos.viewSubTitulo}>
                <Image source={pin}/>
                <Text style={estilos.textoLugar}>
                    Pontianak, Indonesia
                </Text>
                <TouchableOpacity style={estilos.preco}>
                    <Text style={estilos.textoPreco}>
                        $100
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={estilos.viewSubTitulo}>
                <Image source={fig} />
                <Text style={estilos.textoInfo}>
                    250K
                </Text>
                <Text style={estilos.texto}>
                    People are Joined
                </Text>
            </View>
        </View>
        
    )
}
const estilos = StyleSheet.create({
    ViewInfo:{
        paddingHorizontal: 10
    },
    Titulo:{
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 46
    },
    viewSubTitulo:{
        flexDirection: "row",
        alignItems:"center"
    },
    textoLugar:{
        color:"#BBBCC1",
        fontSize: 16
    },
    preco:{
        marginTop: -30,
        marginLeft: 100,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: "#FDF3F1",
        borderRadius: 10
    },
    textoPreco:{
        color:"#F4C0B9"
    },
    textoInfo:{
        marginLeft: 10,
        color: "#B3421F",
        fontSize: 16
    },
    texto:{
        marginLeft: 5,
        fontSize: 16,
        color: "#BBBCC1"
    }
})