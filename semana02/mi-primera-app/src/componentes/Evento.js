import React from "react";

function Evento() {
  return (
    <div className="card-container">
      <img className="card-image"
        src={require("../imagenes/evento1.jpeg")}
        alt="Foto del evento" />
      <div className="card-content">
        <h2 className="card-title">Título del evento</h2>
        <p className="card-date">Fecha del evento</p>
        <p className="card-description">Descripción del evento</p>
      </div>
    </div>
  );
}

export default Evento;