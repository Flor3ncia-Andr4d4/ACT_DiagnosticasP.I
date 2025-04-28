/*  
Objetivo: Verificar la comprensión de objetos, acceso a propiedades y
desestructuración.
Instrucciones:
Dado el siguiente objeto:
const persona = {
 nombre: "Lucía",
 edad: 28,
 profesion: "Diseñadora",
};
1. Mostrar en consola un mensaje que diga: "Lucía tiene 28 años y trabaja
como Diseñadora." usando desestructuración.
2. Agregar una nueva propiedad al objeto llamada ciudad con el valor "Rosario" .
*/
const persona = {
    nombre: "Lucía",
    edad: 28,
    profesion: "Diseñadora",
};

const { nombre, edad, profesion } = persona;

console.log(nombre + " tiene " + edad + " años y trabaja como " + profesion + ".");
persona.ciudad = "Rosario";

console.log(persona);

