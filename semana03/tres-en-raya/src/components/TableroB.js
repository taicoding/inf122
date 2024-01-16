import React from 'react';
import '../style/Tablero.css';
import CuadroB from './CuadroB';

function TableroB() {
    const click = () => {
        console.log('click');
    }
    return (
        <div className="tablero">
            <CuadroB valor={0} funcion={click} />
            <CuadroB valor={1} funcion={click} />
            <CuadroB valor={2} funcion={click} />
            <CuadroB valor={3} funcion={click} />
            <CuadroB valor={4} funcion={click} />
            <CuadroB valor={5} funcion={click} />
            <CuadroB valor={6} funcion={click} />
            <CuadroB valor={7} funcion={click} />
            <CuadroB valor={8} funcion={click} />
        </div>

    );
}
export default TableroB;