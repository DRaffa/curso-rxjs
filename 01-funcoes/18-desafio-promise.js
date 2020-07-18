const fs = require('fs');
const path = require('path');

//pegar o diretorio atual __dirname
const caminho = path.join(__dirname, '06-arquivo.txt');

function lerArquivo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, function (_, conteudo) {
      resolve(conteudo.toString());
    });

    console.log('Depois de ler');
  });
}

lerArquivo(caminho)
  .then((conteudo) => conteudo.split('\n'))
  .then((linhas) => linhas.join(';'))
  .then((conteudo) => console.log(`O valor final é: ${conteudo}`));
