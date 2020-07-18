/**Promise aceita como parametro apenas um valor no parametro ou objeto ou array */

let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(['Ana', 'Rafael', 'Bia', 'Thay', 'Guilherme']);
});

console.log(typeof p);
console.log(p);

p.then(function (valor) {
  console.log(valor);
});

/**Pode se usar then varias vezes para transformar os valores */
p.then((valor) => valor[0])
  .then((nome) => nome[0])
  .then((letra) => letra.toLowerCase())
  .then((letraMinuscula) => console.log(letraMinuscula));

const primeiroNome = (lista) => lista[0];
const primeiraLetra = (nome) => nome[0];
const letraMinuscula = (letra) => letra.toLowerCase();

p = new Promise(function (resolve) {
  resolve(['Ana', 'Rafael', 'Bia', 'Thay', 'Guilherme']);
})
  .then(primeiroNome)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then((letraMinuscula) => console.log(letraMinuscula));
