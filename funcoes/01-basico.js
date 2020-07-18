let a = 4;
console.log(a);

// function Declaration
function bomDia() {
  console.log('Bom dia');
}

bomDia();

// function expression
//var let const

const boaTarde = function () {
  console.log('Boa tarde');
};

boaTarde();

let x = boaTarde(); // undefined pq a funcao nao retorna nada
console.log(x);

function somar(a, b) {
  return a + b;
}

let resultado = somar(3, 4);
console.log(resultado);

resultado = somar(3);
console.log(resultado);

resultado = somar();
console.log(resultado);
