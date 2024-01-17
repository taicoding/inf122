import React from 'react';
import TableroE from './TableroE';
import { useState } from 'react';

function Juego() {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const [ganador, setGanador] = useState(null);
    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        if (cuadrosTemp[i] === null) {
            cuadrosTemp[i] = jugador;
            setCuadros(cuadrosTemp);
            setJugador(jugador === "X" ? "O" : "X");
        }
        if (calcularGanador(cuadrosTemp) !== null) {
            setGanador(calcularGanador(cuadrosTemp));
        }
    }
    return (
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ganador ? `Ganador: ${ganador}` : `Próximo jugador: ${jugador}`}</h2>
                <TableroE cuadros={cuadros} onClick={(i) => click(i)} />
            </div>

        </div>
    );
}
export default Juego;

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