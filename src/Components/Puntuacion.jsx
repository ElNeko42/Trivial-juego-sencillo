import React from 'react';

function Puntuacion({ puntuacion }) {
  return (
    <div>
      <h2>Tu puntuación es: {puntuacion}</h2>
      {/* Aquí puedes añadir un botón para reiniciar la trivia si lo deseas */}
    </div>
  );
}

export default Puntuacion;
