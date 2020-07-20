//lodash para realizar ordenacao

const path = require('path');
const fn = require('./funcoes');
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
  '!',
];
const caminho = path.join(__dirname, 'legendas');
const _ = require('lodash');
const { toArray, map } = require('rxjs/operators');

fn.lerDiretorio(caminho)
  .pipe(
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivo(),
    fn.separarTextoPor('\n'),
    fn.removerSeVazio(),
    fn.removerSeApenasNumero(),
    fn.removerSimbolos(simbolos),
    fn.separarTextoPor(' '),
    fn.removerSeVazio(),
    fn.removerSeApenasNumero(),
    toArray(), //Transformando as linhas em array
    fn.agruparElementos(),
    map((array) => _.sortBy(array, (el) => -el.qtde))
  )
  .subscribe(console.log);
