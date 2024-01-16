import React from 'react';
import '../style/Tablero.css';
import CuadroB from './CuadroB';
import { useState } from 'react';


function TableroC() {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("O");
    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        if (jugador === "X") {
            setJugador("O");
        } else {
            setJugador("X");
        }
    }

    return (
        <div className='juego'>
            <h1>Siguiente Jugador: {jugador}</h1>
            <div className="tablero">
                <CuadroB valor={cuadros[0]} funcion={() => click(0)} />
                <CuadroB valor={cuadros[1]} funcion={() => click(1)} />
                <CuadroB valor={cuadros[2]} funcion={() => click(2)} />
                <CuadroB valor={cuadros[3]} funcion={() => click(3)} />
                <CuadroB valor={cuadros[4]} funcion={() => click(4)} />
                <CuadroB valor={cuadros[5]} funcion={() => click(5)} />
                <CuadroB valor={cuadros[6]} funcion={() => click(6)} />
                <CuadroB valor={cuadros[7]} funcion={() => click(7)} />
                <CuadroB valor={cuadros[8]} funcion={() => click(8)} />
            </div>
        </div>
    );
}
export default TableroC;