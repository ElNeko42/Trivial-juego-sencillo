import React, { useState, useEffect } from 'react';

function Preguntas({ categoria, dificultad, onEnd }) {
  const [preguntas, setPreguntas] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const obtenerPreguntas = async () => {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${categoria}&difficulty=${dificultad}&type=multiple`
      );
      const data = await res.json();
      setPreguntas(data.results);
    };

    obtenerPreguntas();
  }, [categoria, dificultad]);

  const responder = (respuesta) => {
    if (respuesta === preguntas[indiceActual].correct_answer) {
      setPuntuacion(puntuacion + 1);
    }
    const siguienteIndice = indiceActual + 1;
    if (siguienteIndice < preguntas.length) {
      setIndiceActual(siguienteIndice);
    } else {
      onEnd(puntuacion);
    }
  };

  const estilos = {
    contenedor: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#74cbe7',
      color: '#d9480c',
      padding: '20px',
      borderRadius: '15px',
    },
    tarjetaPregunta: {
      backgroundColor: '#eed1b0',
      padding: '20px',
      borderRadius: '15px',
      marginBottom: '55px',
      textAlign: 'center',
    },
    contenedorRespuestas: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
    },
    botonRespuesta: {
      backgroundColor: '#a29d53',
      border: 'none',
      borderRadius: '5px',
      padding: '25px',
      fontSize: '1.5em',
      color: 'black',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={estilos.contenedor}>
      <div style={estilos.tarjetaPregunta}>
        <h2 dangerouslySetInnerHTML={{ __html: preguntas[indiceActual]?.question }}></h2>
      </div>
      <div style={estilos.contenedorRespuestas}>
        {preguntas[indiceActual]?.incorrect_answers.concat(preguntas[indiceActual]?.correct_answer).map((respuesta, index) => (
          <button 
            key={index} 
            style={{
              ...estilos.botonRespuesta, 
              backgroundColor: hoverIndex === index ? '#d9480c' : '#a29d53'
            }} 
            onMouseOver={() => setHoverIndex(index)} 
            onMouseOut={() => setHoverIndex(null)} 
            onClick={() => responder(respuesta)}
          >
            {respuesta}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Preguntas;
