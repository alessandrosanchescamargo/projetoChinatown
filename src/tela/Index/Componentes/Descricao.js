import React from "react";
import { StyleSheet,Text, View, TouchableOpacity } from "react-native";

export default function Descricao(){
    return(
        <View style={estilos.viewDescricao}>
            <Text style={estilos.titulo}>
                Description
            </Text>
            <View style={estilos.viewSubtitulo}>
                <Text style={estilos.textoSubtitulo}>
                A Chinatown is an ethnic 
                enclave of Chinese people located outside mainland China,Hong Kong, Macau,Singapore,
                <Text style={estilos.textoBotao}>
                        Read More...
                    </Text>
                </Text>
                
            </View>

        </View>
    )
}
const estilos = StyleSheet.create({
    viewDescricao:{
        marginTop:10,
        paddingHorizontal: 10,
    },
    titulo:{
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26
    },
    viewSubtitulo:{
        flexDirection:"row"
    },
    textoSubtitulo:{
        alignItems:"center",
        color:"#BBBCC1"
    },
    textoBotao:{
        marginTop: 1,
        color:"#F7D3CE"
    }
})