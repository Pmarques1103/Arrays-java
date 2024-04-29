const notas = [10,6,/,5.5,10];
// código omitido
// código omitido

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

//console.log(media); ou

console.log(media.toFixed(2));
