import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Footer(){
    return(
    <View style={estilos.ViewFooter}>
        <Text style={estilos.titulo}>Total Price</Text>
        <View style={estilos.viewPreco}>
            <Text style={estilos.textoPreco}>$100</Text>
            <Text style={estilos.titulo}>/Person</Text>
            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.textoBotao}>Get a Ticket</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
const estilos = StyleSheet.create({
    ViewFooter:{
        marginTop: 100,
        paddingHorizontal: 10,
    },
    titulo:{
        color: "#BBBCC1",
        fontSize: 16,
        lineHeight: 26,
        marginBottom: -20
    },
    viewPreco:{
        flexDirection:"row",
        alignItems: "center"
    },
    textoPreco:{
        marginBottom: -20,
        color:"#B3421F"
    },
    botao:{
        marginLeft: 100,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 20,
        backgroundColor: "#B3421F"
        
    },
    textoBotao:{
        color:"#fff"
    }
})
