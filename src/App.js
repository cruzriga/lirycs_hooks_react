import React,{useState,useEffect, Fragment} from 'react';
import Formulario from "./components/Formulario";
import Info from "./components/Info";
import Liryc from "./components/Liryc";
import axios from 'axios';
function App() {
  const [query, setQuery] = useState({artista: '', cancion:'', send:false});
  const [letra, saveLetra ] = useState('');
  const [info, saveInfo ] = useState({});
  const [error, setError] = useState(false);

  useEffect(()=>{
    if(query.send === true){
      consultarAPI()
          .then(data=>{
            saveLetra(data.liryc);
            saveInfo(data.info);
            console.log(data);
          })
          .catch(err => setError(true));
    }
  },[query]);
  
  async function consultarAPI() {
     setError(false);
     saveInfo({});
     saveLetra('');

    let urlliryc = `https://api.lyrics.ovh/v1/${query.artista}/${query.cancion}`;
    let urlInfo = `https://theaudiodb.com/api/v1/json/1/search.php?s=${query.artista}`;
    let rLiryc = await axios(urlliryc);
    let rinfo = await axios(urlInfo);
    return {liryc : rLiryc.data.lyrics , info : rinfo.data.artists[0] }
  }

  function RenderDataPanel() {
        return(
            <>
               <Info info={info}/>
               <Liryc letra={letra} />
            </>
            );
  }


  return (
    <Fragment>
      <Formulario setQuery={setQuery}/>
      <div className="container mt-5">
          <div className="row">
            { (!error)
                ? <RenderDataPanel/>
                : <p className="alert alert-danger">
                    NO SE PUDO ENCONTRAR INFORMACION SOBRE EL ARTISTA Y CANCION INDICADA
                </p>}
          </div>
      </div>
    </Fragment>
  );
}

export default App;
