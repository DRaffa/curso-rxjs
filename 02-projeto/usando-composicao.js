const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, 'legendas');

const simbolos = [
  '.',
  '?',
  '-',
  ',',
  '"',
  '♪',
  '_',
  '<i>',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')',
];

const palavrasMaisUsadas = fn.composicao(
  fn.lerDiretorio,
  fn.elementosTerminadosCom('.srt'),
  fn.lerArquivos,
  fn.mesclarConteudos,
  fn.separarTextoPor('\n'),
  fn.removerSeVazio,
  fn.removerSeIncluir('-->'),
  fn.removerSeApenasNumero,
  fn.removerSimbolos(simbolos),
  fn.mesclarConteudos,
  fn.separarTextoPor(' '),
  fn.removerSeVazio,
  fn.removerSeApenasNumero,
  fn.agruparElementos,
  fn.ordernarPorAtributoNumerico('qtde', 'desc'),
  console.log
);

palavrasMaisUsadas(caminho).then(console.log);
