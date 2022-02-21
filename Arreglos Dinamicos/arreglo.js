let nombres = [];
let edades = [];

for (let i = 1; i <= 5; i++){
    nombres[i] = prompt('Dame el nombre del usuario #' + i);
    edades[i] = Number(prompt('Dame la edad del usuario #' + i));
    if (i === 5) {
        let posicion = Number(prompt('Programa terminado que posición deseas consultar? '));
        let parrafo = document.createElement('p');
        parrafo.innerHTML = 'La posicion que elegiste ver es: ' + nombres[posicion] + ' la edad de esta persona es: ' + edades[posicion];
        cuerpo.appendChild(parrafo);
    }
}


