import React, { useState } from 'react';

function Bienvenida({ onStart }) {
  const [categoria, setCategoria] = useState('');
  const [dificultad, setDificultad] = useState('');

  const iniciarTrivia = () => {
    onStart(categoria, dificultad);
  };

  return (
    <div>
      <h1>Bienvenido a la Trivia</h1>
      <label>
        Categoría:
        <select onChange={(e) => setCategoria(e.target.value)}>
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
        <select onChange={(e) => setDificultad(e.target.value)}>
          <option value="">Cualquiera</option>
          <option value="easy">Fácil</option>
          <option value="medium">Medio</option>
          <option value="hard">Difícil</option>
        </select>
      </label>
      <button onClick={iniciarTrivia}>Iniciar</button>
    </div>
  );
}

export default Bienvenida;
