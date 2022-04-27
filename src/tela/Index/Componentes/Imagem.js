import React from "react";
import { StyleSheet, View, Image } from "react-native";
import img from "../../../../assets/china.png"

export default function Imagem(){
    return(
        <View style={estilo.viewImagem}>
            <Image source={img} />
        </View>
    )
}
const estilo = StyleSheet.create({
    viewImagem:{
        paddingHorizontal: 10,
        paddingVertical: 20
        
    }
})