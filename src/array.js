/* 
Dado el siguiente array:
const numeros = [3, 7, 12, 5, 2];
Usar map para generar un nuevo array con los números al cuadrado.
Usar filter para obtener los números mayores a 5.
1. Escribir una función flecha que reciba un número y devuelva si es par o
impar.
*/

const numeros = [3, 7, 12, 5, 2]
const cuadrados = numeros.map(function(num) {
    return num * num;
});

const mayores = numeros.filter(function(num){
    return num > 5
})

const parOImpar = (num) => {
    if (num % 2 === 0) {
        return "Es par";
    } else {
        return "Es impar";
    }  
}


