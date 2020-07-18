const fs = require('fs');
const path = require('path');

//pegar o diretorio atual __dirname
const caminho = path.join(__dirname, '06-arquivo.txt');

//quando nao usar um paramentro vc pode usar o underline
function exibirConteudo(err, conteudo) {
  console.log(conteudo);
}

console.log('Inicio Asyncrono...');
fs.readFile(caminho, { encoding: 'utf-8' }, exibirConteudo);

fs.readFile(caminho, { encoding: 'utf-8' }, (_, conteudo) =>
  console.log(conteudo)
);
console.log('Fim Asyncrono...');

console.log('Inicio Syncrono...');
const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
console.log(conteudo);
console.log('Fim Syncrono...');
