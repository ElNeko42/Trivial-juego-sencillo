import React, { useState, useEffect } from 'react';

function Preguntas({ categoria, dificultad, onEnd }) {
  const [preguntas, setPreguntas] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const estilos = {
    pregunta: {
      fontSize: '1.5em',
      marginBottom: '20px',
    },
    boton: {
      backgroundColor: '#dc5917', // Flame para los botones
      border: 'none',
      padding: '10px',
      margin: '5px',
      color: '#eed1b0', // Light orange para el texto de los botones
      cursor: 'pointer',
    },
  };

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

  return (
    <div>
      {preguntas.length > 0 ? (
        <div>
          <h2 style={estilos.pregunta} dangerouslySetInnerHTML={{ __html: preguntas[indiceActual].question }}></h2>
          {[
            ...preguntas[indiceActual].incorrect_answers,
            preguntas[indiceActual].correct_answer,
          ].map((respuesta, index) => (
            <button 
              key={index} 
              style={estilos.boton}
              onClick={() => responder(respuesta)}
              dangerouslySetInnerHTML={{ __html: respuesta }}
            ></button>
          ))}
        </div>
      ) : (
        <p>Cargando preguntas...</p>
      )}
    </div>
  );

}

export default Preguntas;
