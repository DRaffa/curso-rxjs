const path = require('path');
const fn = require('./000-funcoes');

const caminho = path.join(__dirname, 'legendas');

const arquivos = fn.lerDiretorio(caminho);
console.log(arquivos);
