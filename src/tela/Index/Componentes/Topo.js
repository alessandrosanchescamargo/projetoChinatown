import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import voltar from "../../../../assets/voltar.png";
import detail from "../../../../assets/detail.png";

const Width = Dimensions.get("screen").width
export default function Topo(){
    return(
        <View style={estilos.viewDetail}>
            <TouchableOpacity>
                <Image source={voltar} style={estilos.imagem}/>
            </TouchableOpacity>
            <Text style={estilos.texto}>Detail</Text>
            <TouchableOpacity>
                <Image source={detail}/>
            </TouchableOpacity>
        </View>
    )
}
const estilos = StyleSheet.create({
    viewDetail:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center"
    },
    texto:{
        paddingHorizontal: 120,
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 26
    }
    
})