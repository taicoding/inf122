import React from "react";
import Boton from "./Boton";
import "../styles/Login.css"
function Registro() {
    const click = (x) => {
        console.log(x);
    };
    return (
        <div className="main">
            <div className="padre">
                <label className="etiqueta">Usuario:</label>
                <input placeholder="Ingresar Usuario"></input>
                <label className="etiqueta">Apellido:</label>
                <input placeholder="Ingresar contraseña:"></input>
                <label className="etiqueta">Contraseña:</label>
                <input type="password" placeholder="Ingresar contraseña:"></input>
                <div className="buttons">
                    <Boton funClick={() => click("Registrar")} text="Registrar" />

                </div>
            </div>
        </div>
    );
}
export default Registro;
