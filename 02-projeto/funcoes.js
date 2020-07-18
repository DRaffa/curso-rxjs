const fs = require('fs');
const path = require('path');

// function lerDiretorio(caminho) {
//   let arquivos = fs.readdirSync(caminho);
//   return arquivos.map((arquivo) => path.join(caminho, arquivo));
// }

// Usando Promise
function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho);
      const arquivosCompletos = arquivos.map((arquivo) =>
        path.join(caminho, arquivo)
      );
      resolve(arquivosCompletos);
    } catch (error) {
      reject(error);
    }
  });
}

// function elementosTerminadosCom(array, padrao) {
//   // Terminado endWith
//   return array.filter((elemento) => elemento.endsWith(padrao));
// }

// Refatoracao
function elementosTerminadosCom(padrao) {
  // Terminado endWith
  return function (array) {
    return array.filter((elemento) => elemento.endsWith(padrao));
  };
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
      resolve(conteudo);
    } catch (error) {
      reject(error);
    }
  });
}

function lerArquivos(caminhos) {
  // Lendo os arquivos em pararelo
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function removerSeVazio(array) {
  // Usando trim para remover os espacos em branco
  return array.filter((elemento) => elemento.trim());
}

// function removerSeIncluir(array, padrao) {
//   // Usando trim para remover os espacos em branco
//   return array.filter((elemento) => !elemento.includes(padrao));
// }

// Refatoracao
function removerSeIncluir(padrao) {
  // Usando trim para remover os espacos em branco

  return function (array) {
    return array.filter((elemento) => !elemento.includes(padrao));
  };
}

function removerSeApenasNumero(array) {
  return array.filter((elemento) => {
    const num = parseInt(elemento.trim());

    return num !== num;
  });
}

// function removerSimbolos(simbolos) {
//   return function (array) {
//     return array.map((elemento) => {
//       let textoSemSimbolo = elemento;

//       simbolos.forEach((simbolo) => {
//         textoSemSimbolo = textoSemSimbolo.split(simbolo).join('');
//       });

//       return textoSemSimbolo;
//     });
//   };
// }

// Refatoracao
function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((elemento) => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join('');
      }, elemento);
    });
  };
}

function mesclarConteudos(conteudos) {
  return conteudos.join(' ');
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo);
  };
}

function agruparElementos(palavras) {
  return Object.values(
    palavras.reduce((agrupamento, palavra) => {
      const elemento = palavra.toLowerCase();
      const qtde = agrupamento[elemento]
        ? (agrupamento[elemento].qtde += 1)
        : 1;
      agrupamento[elemento] = { elemento: elemento, qtde };
      return agrupamento;
    }, {})
  );
}

/** Funcionamento de ordenacao
 *  [3,1,5]
 *  3 - 1 = 2 como deu positivo ele muda a posicao do elemento
 *  3 - 5 =-2 como deu negativo ele nao alterar a posicao
 */

function ordernarPorAtributoNumerico(attr, ordem = 'asc') {
  return function (array) {
    const asc = (a, b) => a[attr] - b[attr];
    const desc = (a, b) => b[attr] - a[attr];

    return array.sort(ordem === 'asc' ? asc : desc);
  };
}

function composicao(...fns) {
  return function (caminho) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, caminho);
  };
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  lerArquivos,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumero,
  removerSimbolos,
  mesclarConteudos,
  separarTextoPor,
  agruparElementos,
  ordernarPorAtributoNumerico,
  composicao,
};
