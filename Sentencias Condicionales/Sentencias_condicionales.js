let numUno = Number(prompt('Ingrese un numero '));
let numDos = Number(prompt('Ingrese otro numero '));

let operacion = Number(prompt('Digite un numero, 1 para sumar; 2, para restar; 3, para multiplicar; 4, para dividir'));
let resultado = 0;

switch (operacion) {
    case 1:
        resultado = Number(numUno + numDos);
        document.write(`${numUno} + ${numDos} = ${resultado}`);
        break;
    case 2:
        resultado = Number(numUno - numDos);        
        document.write(`${numUno} - ${numDos} = ${resultado}`);
        break;
    case 3:
        resultado = Number(numUno * numDos);
        document.write(`${numUno} * ${numDos} = ${resultado}`);
        break;
    case 4:
        resultado = Number(numUno / numDos);
        document.write(`${numUno} / ${numDos} = ${resultado}`);
        break;
    default:
        document.write('Ninguna opción escogida');
        break;
}

const cuerpo = document.getElementById('cuerpo');
const espacio = document.createElement('br');
cuerpo.appendChild(espacio);

document.write('Programa terminado');
