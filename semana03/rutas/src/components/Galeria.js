import React from "react";
import "../styles/Galeria.css";
export default function Galeria(){
    return(
        <div className="galeria">
            <h1><img src={require(`../images/image1.png`)}/>Pepito</h1>
               <div className="contenedor-image">
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
                <img src={require(`../images/image1.png`)}/>
            </div>
        </div>
    )
}