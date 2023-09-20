import React, { useState } from 'react';
import Bienvenida from './Components/Bienvenida';
import Preguntas from './Components/Preguntas';
import Puntuacion from './Components/Puntuacion';

function App() {
  const [estado, setEstado] = useState('BIENVENIDA');
  const [categoria, setCategoria] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [puntuacion, setPuntuacion] = useState(0);
  const estilos = {
    fontFamily: 'Sans-serif',
    backgroundColor: '#74cbe7', // Sky blue como fondo
    color: '#d9480c', // Syracuse Red Orange para el texto
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iniciarTrivia = (cat, dif) => {
    setCategoria(cat);
    setDificultad(dif);
    setEstado('PREGUNTAS');
  };

  const finalizarTrivia = (punt) => {
    setPuntuacion(punt);
    setEstado('PUNTUACION');
  };

  return (
    <div style={estilos}>
      {estado === 'BIENVENIDA' && <Bienvenida onStart={iniciarTrivia} />}
      {estado === 'PREGUNTAS' && (
        <Preguntas categoria={categoria} dificultad={dificultad} onEnd={finalizarTrivia} />
      )}
      {estado === 'PUNTUACION' && <Puntuacion puntuacion={puntuacion} />}
    </div>
  );
}

export default App;
