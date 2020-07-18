const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, 'legendas');

// fn.lerDiretorio(caminho)
//   .then((arquivos) => fn.elementosTerminadosCom(arquivos, '.srt')) //retorna [] string
//   .then((arquivosStr) => fn.lerArquivos(arquivosStr)) //retorna [] string
//   .then((conteudos) => conteudos.join('')) //retorna [] string
//   .then((todoConteudo) => todoConteudo.split('\n')) //retorna string
//   .then((linhas) => fn.removerSeVazio(linhas))
//   .then((linhas) => fn.removerSeIncluir(linhas, '-->'))
//   .then((linhas) => fn.removerSeApenasNumero(linhas))
//   .then(console.log);

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

// Refatoracao
fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt')) //retorna [] string
  .then(fn.lerArquivos) //retorna [] string
  .then(fn.mesclarConteudos) //retorna string
  .then(fn.separarTextoPor('\n'))
  .then(fn.removerSeVazio)
  .then(fn.removerSeIncluir('-->'))
  .then(fn.removerSeApenasNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarConteudos)
  .then(fn.separarTextoPor(' '))
  .then(fn.removerSeVazio)
  .then(fn.removerSeApenasNumero)
  .then(fn.agruparElementos)
  .then(fn.ordernarPorAtributoNumerico('qtde', 'desc'))
  .then(console.log);
