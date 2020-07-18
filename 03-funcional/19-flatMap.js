//Deixa todo mundo no mesmo nivel

const letrasAninhadas = [
  ['O', ['l'], 'a'],
  [' '],
  ['M', ['u', 'n'], 'd', 'o'],
  ['!', '!', '!'],
];

const letras = letrasAninhadas.flat(Infinity);

//const resultado = letras.map((l) => [l, ','])
//.reduce((a, b) => a + b);

const resultado = letras.flatMap((l) => [l, ',']).reduce((a, b) => a + b);

console.log(resultado);
