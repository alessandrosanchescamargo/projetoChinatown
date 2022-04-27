import React from "react";
import Topo from "./Componentes/Topo";
import Imagem from "./Componentes/Imagem";
import Info from "./Componentes/Info";
import Descricao from "./Componentes/Descricao";
import Footer from "./Componentes/Footer";
export default function Index(){
    return(
        <>
            <Topo />
            <Imagem />
            <Info />
            <Descricao />
            <Footer />
        </>
    )
}