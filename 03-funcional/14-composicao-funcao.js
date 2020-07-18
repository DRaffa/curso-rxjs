// function composicao(fn1, fn2) {
//   return function (valor) {
//     return fn2(fn1(valor));
//   };
// }

function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!`;
}

function tornarLento(texto) {
  return texto.split('').join(' ');
}

const resultado = composicao(gritar, enfatizar, tornarLento)('PARA');
console.log(resultado);
