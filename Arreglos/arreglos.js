let array = [];

for (let i = 1; i <= 5; i++){
    array[i] = Number(prompt('Dame un valor'));
    if (i === 5) {
        document.write(array[i]);
    } else {
        document.write(array[i] + ', ');
    }
};

const cuerpo = document.getElementById('cuerpo');
const espacio = document.createElement('br');
cuerpo.appendChild(espacio);
document.write('Programa terminado');
