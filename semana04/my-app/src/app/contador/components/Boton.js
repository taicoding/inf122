import style from './Boton.module.css';

function Boton({ texto, esBotonClick, funcionClick }) {

    return (
        <button className={esBotonClick ? style["boton-click"] : style["boton-reinciar"]}
            onClick={funcionClick}>
            {texto}
        </button>
    )
}

export default Boton;
