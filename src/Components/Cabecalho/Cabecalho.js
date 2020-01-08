import React, { Fragment } from 'react';
import {
    Text,
    Image,
    View
} from "react-native";
import estilo from "./estilo"

const Cabecalho = (props) => {
    return (
        <View style={estilo.cabecalho}>
            <Image
                source={{uri : props.fotoUsuario}}
                style={estilo.fotoUsuario}
            />
            <Text>{props.nomeUsuario}</Text>
        </View>
    );
}

export default Cabecalho;