import React, { useState } from 'react';
import '../styles/Nota.css';
function Nota({ nota, onDelete, onEdit }) {
    const [editando, setEditando] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(nota.texto);

    const handleGuardar = () => {
        onEdit(nota.id, nuevoTexto);
        setEditando(false);
    };

    return (
        <div>
            {editando ? (
                <div className='editar-nota'>
                    <textarea
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                    />
                    <button onClick={handleGuardar}>Guardar</button>
                </div>
            ) : (
                <div className='contenedor-nota'>
                    <p className='nota'>{nota.texto}</p>
                    <button className='boton' onClick={() => onDelete(nota.id)}>Eliminar</button>
                    <button className='boton' onClick={() => setEditando(true)}>Editar</button>
                </div>
            )}
        </div>
    );
}

export default Nota;