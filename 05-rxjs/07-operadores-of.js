// os dois tipos...
// 1. Operadores de criacao
const { of } = require('rxjs');
// 2. Operadores encadeaveis (Pipeable op.)
const { last, first, map } = require('rxjs/operators');

// Cria um observable
const obs = of(1, 2, 'Rafael', false, 'ultimo');

// obs.pipe(first()).subscribe(function (valor) {
//   console.log(`O valor gerado foi: ${valor}`);
// });

// obs.pipe(last()).subscribe(function (valor) {
//   console.log(`O valor gerado foi: ${valor}`);
// });

obs
  .pipe(
    last(), // Pega o ultimo item do array
    map((v) => v[0]), // Pega a primeira letra
    map((v) => `A letra encontrada foi: ${v}`) // Cria um novo valor
  )
  .subscribe(function (valor) {
    console.log(valor);
  });
