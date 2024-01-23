import React from "react";
function Boton({funClick, text}){

    return(
        <button className="boton" onClick={funClick}>
            {text}
        </button>

    );
}
export default Boton;