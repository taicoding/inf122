import React from "react";
import Boton from "./Boton";
import "../styles/Login.css"
function Perfil(){
    const click = (x) => {
        console.log(x);
    };
    return(
        <div className="main">
        <div className="padre">
                        <label className="etiqueta">Nombre</label>
                        <input placeholder="Pepito"></input> 
                        <label className="etiqueta">Apellido</label>
                        <input placeholder="Perez" ></input>
                        <label className="etiqueta">Contraseña</label>
                        <input type="password"placeholder="******"></input>
                    <div className="buttons">
                        <Boton funClick={() => click("Editar")} text="Editar" />
                        
                    </div>
                </div>
            </div>
    );
}
export default Perfil;
