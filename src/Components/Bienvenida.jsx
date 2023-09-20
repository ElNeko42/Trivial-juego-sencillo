import React, { useState } from 'react';
import logo from '../logo.png'
import '../App.css'; 


function Bienvenida({ onStart }) {
  const estilos = {
    contenedor: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#74cbe7', // Sky blue como fondo
      color: '#d9480c', // Syracuse Red Orange para el texto
    },
    select: {
      margin: '10px',
      padding: '10px',
      fontSize: '1em',
      borderColor: '#d9480c', // Syracuse Red Orange para el borde
      borderRadius: '5px',
      outline: 'none',
      transition: 'border-color 0.3s, box-shadow 0.3s', // Efecto de transición
      appearance: 'none',
      textAlign: 'center',
    },
    boton: {
      padding: '10px 20px',
      fontSize: '1em',
      backgroundColor: '#dc5917', // Flame para el fondo
      border: 'none',
      borderRadius: '5px',
      color: '#eed1b0', // Light orange para el texto
      cursor: 'pointer',
      transition: 'background-color 0.3s', // Efecto de transición
    },
    
  };
  const [categoria, setCategoria] = useState('');
  const [dificultad, setDificultad] = useState('');

  const iniciarTrivia = () => {
    onStart(categoria, dificultad);
  };

  return (
    <div>
      <img src={logo} className='logo' alt="Logo"></img>
      <div style={estilos.contenedor}>

        <label>

          Categoría:
          <select onChange={(e) => setCategoria(e.target.value)} style={estilos.select}>
            <option value="">Cualquiera</option>
            {/* Aquí puedes añadir más categorías según la API */}
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="31"> Japanese Anime & Manga</option>
            <option value="32">Cartoon & Animations</option>
            <option value="29">Comics</option>
            <option value="13">Musicals & Theatres</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="17">"Science & Nature</option>

          </select>
        </label>
        <label>
          Dificultad:
          <select onChange={(e) => setDificultad(e.target.value)} style={estilos.select}>
            <option value="">Cualquiera</option>
            <option value="easy">Fácil</option>
            <option value="medium">Medio</option>
            <option value="hard">Difícil</option>
          </select>
        </label>
        <button onClick={iniciarTrivia} style={estilos.boton} >Iniciar</button>
      </div>
    </div>
  );
}

export default Bienvenida;
