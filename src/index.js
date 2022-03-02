import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Componente(props){
  return (
    <div>
      <h1>{props.titulo}</h1>
      <div>{props.contenido}</div>
    </div>
  )
}

ReactDOM.render(
    <Componente titulo="Hola" contenido="Que tal?"/>,
  document.getElementById('root')
);