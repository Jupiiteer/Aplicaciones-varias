let filas = Number(prompt('Cuantas filas quieres? '));
let columnas = Number(prompt('Cuantas columnas quieres? '));

let salto = document.createElement('br');

for (let i = 1; i <= (filas + columnas); i++){
    document.write(' [ ' + i + ' ] ');
    if ((i % 2) == 0) {
        document.body.appendChild(document.createElement('hr'));
    }
}

document.write('-- Programa terminado --');


