//Deixa todo mundo no mesmo nivel

const letrasAninhadas = [
  ['O', ['l'], 'a'],
  [' '],
  ['M', ['u', 'n'], 'd', 'o'],
  ['!', '!', '!'],
];

const letras = letrasAninhadas.flat(Infinity);

console.log(letras);
// const resultado = letras
//   .map((l) => l.toLocaleUpperCase())
//   .reduce((a, b) => a + b);

// console.log(resultado);

console.log(letrasAninhadas.flat());

console.log(letrasAninhadas.flat().flat());

console.log(letrasAninhadas.flat(Infinity));
