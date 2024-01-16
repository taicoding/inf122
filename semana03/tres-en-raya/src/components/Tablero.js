import React from 'react';
import '../style/Tablero.css';
import Cuadro from './Cuadro';
function Tablero() {

    return (
        <div className="tablero">
            <Cuadro valor={0} />
            <Cuadro valor={1} />
            <Cuadro valor={2} />
            <Cuadro valor={3} />
            <Cuadro valor={4} />
            <Cuadro valor={5} />
            <Cuadro valor={6} />
            <Cuadro valor={7} />
            <Cuadro valor={8} />
        </div>

    );
}

export default Tablero;
