const lerFoto = async (callback)=>{
    const fotoHTTP = await fetch('http://10.0.2.2:3030/feed');
    const fotoJson = await fotoHTTP.json();

    callback(fotoJson);
  }

  export default lerFoto;