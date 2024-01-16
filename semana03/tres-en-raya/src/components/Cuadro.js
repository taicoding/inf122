import React from 'react';
import '../style/Cuadro.css';

function Cuadro({ valor }) {
    return (
        <button className="cuadro">
            {valor}
        </button>
    );
}

export default Cuadro;