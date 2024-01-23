import React from "react";
import "../styles/Login.css";
import Boton from './Boton';

function Login() {
    const click = (x) => {
        console.log(x);
    };
    return (
        <div className="main">
            <div className="padre">
                
                        <label className="etiqueta">Usuario:</label>
                        <input className="input" placeholder="Ingresar Usuario"></input>
                    

                    
                        <label className="etiqueta">Contraseña:</label>
                        <input className="input" placeholder="Ingresar contraseña:"></input>
                    
                    <div className="buttons">
                        <Boton funClick={() => click("Login")} text="Login" />
                        <Boton funClick={() => click("Ingresar")} text="Ingresar" />
                    </div>
                
            </div>
        </div >

    );
}

export default Login;