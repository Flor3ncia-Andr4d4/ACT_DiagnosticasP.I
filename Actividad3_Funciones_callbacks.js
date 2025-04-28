/* 
Objetivo: Comprobar el uso de funciones como parámetros (callbacks).
Instrucciones:
1. Escribir una función que reciba un array y una función callback. La función
debe aplicar el callback a cada elemento del array y retornar el nuevo array.
Ejemplo de uso:
procesar([1, 2, 3], x => x * 2); // [2, 4, 6]
*/
function procesar(array, callback) {
    const resultado = array.map(callback); 
    return resultado;
}
console.log(procesar([1, 2, 3], x => x * 2)); 

