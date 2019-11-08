import React,{useState} from 'react';
function Formulario(props){
    const {setQuery} = props;
    let error = false;

    function handleChange(e){
        let name  = e.target.name;
        let value = e.target.value;
        setQuery(prevQuery => ({...prevQuery,[name] : value, send:false}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setQuery(prevQuery =>{
            if(prevQuery.artista !== '' && prevQuery.cancion !==''){
                error = false;
                return ({...prevQuery, send :true});
            }
            error = true;
            return  prevQuery;
        })
    }
    return(
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;