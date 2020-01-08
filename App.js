import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
} from "react-native";
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';
import lerFoto from './src/api/feed';
import {Comentarios} from './src/Components/Comentarios'


const App = () => {

  const [foto, setFoto] = useState([]);

  useEffect(()=>{
     lerFoto(setFoto);
  },[]);
  return (
    <ScrollView>
      <FlatList
        data={foto}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} fotoUsuario={item.userURL}/>
            <Foto foto={item.url}
            desc={item.description}
            likes={item.likes}/>
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>}
      />
    </ScrollView>
  )
};
export default App;
