import React from 'react';

function Movimiento({ descripcion, funcion }) {
    return (

        <button className="movimiento" onClick={funcion}>
            {descripcion}
        </button>

    );
}

export default Movimiento;