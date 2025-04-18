/* 
Actividad 4: Primer componente en React
Objetivo: Verificar si los estudiantes pueden crear un componente básico y
usar props.
Instrucciones:
1. Crear un componente llamado Saludo que reciba una prop nombre y muestre
un saludo personalizado.
<Saludo nombre="Martín" />
Debe renderizar: "Hola Martín"
1. Crear otro componente llamado Presentacion que reciba nombre , edad y
profesion , y renderice un párrafo con la información.
*/

import React from 'react';


function Saludo(props) {
    return <h1>Hola {props.nombre}</h1>;
}


function Presentacion(props) {
    return (
        <p>
            Mi nombre es {props.nombre}, tengo {props.edad} años y soy {props.profesion}.
        </p>
    );
}


function App() {
  return (
    <div>
      <Saludo nombre="Martín" />
      <Presentacion nombre="Martín" edad={30} profesion="Desarrollador" />
    </div>
  );
}

export default App;

