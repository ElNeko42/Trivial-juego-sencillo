import React from 'react';

function Puntuacion({ puntuacion, reiniciarTrivia }) {
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
    tarjetaPuntuacion: {
      backgroundColor: '#eed1b0',
      padding: '20px',
      borderRadius: '15px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    botonRestart: {
      padding: '10px 20px',
      fontSize: '1em',
      backgroundColor: '#dc5917',
      border: 'none',
      borderRadius: '5px',
      color: '#eed1b0',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={estilos.contenedor}>
      <div style={estilos.tarjetaPuntuacion}>
        <h2>Tu puntuación es: {puntuacion}</h2>
      </div>
      <button style={estilos.botonRestart} onClick={reiniciarTrivia}>Volver a Jugar</button>
    </div>
  );
}

export default Puntuacion;
