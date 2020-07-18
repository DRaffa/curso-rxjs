// Diz que uma linguagem de programacao possui
// funcoes de primeira classe quando funcoes nessa
// Linguagem sao tratados como qualquer outra variavel

const x = 3;
const y = function (txt) {
  return `Esse e o texto ${txt}`;
};

const z = () => console.log('Zzzz');

console.log(x);
console.log(y('Ola'));
z();
