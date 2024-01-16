import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const [show, setShow] = useState(true);
  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("click");
  }
  const clickMas3 = () => {
    setNumClicks(nroClicks + 3);

  }
  const clickMenos3 = () => {
    setNumClicks(nroClicks - 3);

  }
  const clickMenos = () => {
    setNumClicks(nroClicks - 1);

  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log('reiniciar');
  }
  const mostrar = () => {
    setShow(!show);
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} mostrar={show} />
        <div className='contendedor-botones'>
          <div className='contendedor-botones-numeros'>
            <Boton texto="-3" esBotonClick={true}
              funcionClick={clickMenos3} />
            <Boton texto="+3" esBotonClick={true}
              funcionClick={clickMas3} />
            <Boton texto="-1" esBotonClick={true}
              funcionClick={clickMenos} />
            <Boton texto="+1" esBotonClick={true}
              funcionClick={click} />
          </div>

          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
          <Boton texto="Mostrar/Ocultar" esBotonClick={false} funcionClick={mostrar} />
        </div>
      </div>
    </div>
  );
}

export default App;
