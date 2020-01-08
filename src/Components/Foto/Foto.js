import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import estilo from './estilo';


const Foto = (props) => {

    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(props.likes)


    const fotoLike = (curtiu) =>{
        let qtLikes = likes;
        !curtiu ? qtLikes++ : qtLikes--;
        setLikes(qtLikes);
    }

    return (
        <Fragment>
            <Image
                source={{ uri: props.foto }}
                style={estilo.imagem}
            />
            <Text>{props.desc}</Text>

            <View style={estilo.cotainerLikes}>
                <TouchableOpacity onPress={() => {setCurtiu(!curtiu); fotoLike(curtiu)}}>
                    {curtiu ? (

                        <Image
                            source={require('../../../res/img/s2-checked.png')}
                            style={estilo.like} />
                    ) : (
                            <Image
                                source={require('../../../res/img/s2.png')}
                                style={estilo.like} />
                    )}
                </TouchableOpacity>
                <Text>{likes}</Text>
            </View>
        </Fragment>
    )
};


export default Foto;
