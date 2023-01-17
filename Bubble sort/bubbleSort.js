let posiciones = Number(prompt('Cuantos numeros ordenaras? '));

var burbuja = [];
let auxiliar = 0;
let vueltas = 0;

for(let i = 1; i <= posiciones; i++){
  burbuja[i] = Number(prompt('Dame el valor #' + i));
  document.write(' [ ' + burbuja[i] + ' ] ');
}

while(posiciones !== vueltas){
  for(let i = 2; i <= posiciones; i++){
    if(burbuja[i - 1] > burbuja[i]){
      auxiliar = burbuja[i - 1];
      burbuja[i - 1] = burbuja[i];
      burbuja[i] = auxiliar;
    }
  }
  vueltas++;
}

const espacio = document.createElement('br');
document.body.appendChild(espacio);

for (let i = 1; i <= posiciones; i++){
  document.write(' [ ' + burbuja[i] + ' ] ');
}
