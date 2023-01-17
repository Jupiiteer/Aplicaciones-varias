let registros = Number(prompt(' Cuantos registros va a ingresar? '));

let nombres = []; //´Arreglo de tipo string
let calificaciones = []; // Arreglo de tipo number float

// function for, pide nombre y calificación del alumno para recopilar y verifica si cumple para beca
for (let i = 1; i <= registros; i++){
    nombres[i] = prompt('Nombre del alumno #' + i);
    do {
        calificaciones[i] = Number(prompt('Calificacion del alumno #' + i));
    }while(calificaciones[i] > 10)

    if (calificaciones[i] >= 8) {
        document.write(i + '. ' + nombres[i] + ' Calificación: ' + calificaciones[i] + ', CON DERECHO A BECA');
        document.body.appendChild(document.createElement('br'));
    } else {
        document.write(i + '. ' + nombres[i] + ' Calificación: ' + calificaciones[i] + ', Sin DERECHO A BECA');
        document.body.appendChild(document.createElement('br'));
    }
}


