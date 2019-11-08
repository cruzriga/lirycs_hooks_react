import React from 'react'

function Liryc({letra}){
    if(letra.length > 0){
        return(<div className="col-md-6">
                    <h2> Letra Canción</h2>
                    <p className="letra">{letra}</p>
                </div>)
    }
    return (<div className="col-md-6"></div>);
}
export default Liryc;