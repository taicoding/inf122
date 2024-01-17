import React from 'react';
import '../style/Tablero.css';
import CuadroB from './CuadroB';
import { useState } from 'react';


function TableroD() {
    function calcularGanador(cuadros) {
        const lineas = [
            [0, 1, 2], // primera fila
            [3, 4, 5], // segunda fila
            [6, 7, 8], // tercera fila
            [0, 3, 6], // primera columna
            [1, 4, 7], // segunda columna
            [2, 5, 8], // tercera columna
            [0, 4, 8], // diagonal
            [2, 4, 6] // diagonal
        ];
        for (let i = 0; i < lineas.length; i++) {
            const [a, b, c] = lineas[i];
            if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
                return cuadros[a];
            }
        }
        return null;
    }
    function renderizarCuadro(i) {
        return (
            <CuadroB
                valor={cuadros[i]}
                funcion={() => click(i)}
            />
        );
    }
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        if (cuadrosTemp[i] === null) {
            cuadrosTemp[i] = jugador;
            setCuadros(cuadrosTemp);
            setJugador(jugador === "X" ? "O" : "X");
        }
        if (calcularGanador(cuadrosTemp) !== null) {
            alert("Ganador: " + calcularGanador(cuadrosTemp));
            setCuadros(Array(9).fill(null));
        }
    }


    return (
        <div className='juego'>
            <h1>Siguiente Jugador: {jugador}</h1>
            <div className="tablero">
                {renderizarCuadro(0)}
                {renderizarCuadro(1)}
                {renderizarCuadro(2)}
                {renderizarCuadro(3)}
                {renderizarCuadro(4)}
                {renderizarCuadro(5)}
                {renderizarCuadro(6)}
                {renderizarCuadro(7)}
                {renderizarCuadro(8)}
            </div>
        </div>
    );
}
export default TableroD;