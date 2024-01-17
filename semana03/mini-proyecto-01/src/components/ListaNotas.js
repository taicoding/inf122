import React, { useState } from 'react';
import Nota from './Nota';
import '../styles/ListaNotas.css';

function ListaNotas() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    const eliminarNota = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

    const editarNota = (id, nuevoTexto) => {
        setNotas((prevNotas) =>
            prevNotas.map((nota) => (nota.id === id ? { ...nota, texto: nuevoTexto } : nota))
        );
    };

    return (
        <div className='contenedor-principal'>
            <input
                className="input"
                type="text"
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <button className='boton' onClick={agregarNota}>Agregar Nota</button>
            {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                    onDelete={eliminarNota}
                    onEdit={editarNota}
                />
            ))}
        </div>
    );
}

export default ListaNotas;
