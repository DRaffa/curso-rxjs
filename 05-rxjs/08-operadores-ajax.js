// concat all
const { interval } = require('rxjs');
const { ajax } = require('rxjs/ajax');
const { map, concatAll } = require('rxjs/operators');
const { XMLHttpRequest } = require('xmlhttprequest');

// interval(1000)
//   .pipe(
//     map((_) => [1, 2, 3]),
//     concatAll() // Transforma o array em itens unitarios
//   )
//   .subscribe(console.log);

// Realizando uma Requisicap

// Instalado npm i xmlhttprequest para realizar chamadas

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: 'https://api.github.com/users/cod3rcursos/repos',
})
  .pipe(
    map((resp) => JSON.parse(resp.xhr.responseText)),
    concatAll(),
    map((repositorio) => repositorio.full_name)
  )
  .subscribe(console.log);
