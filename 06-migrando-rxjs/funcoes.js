const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

function lerDiretorio(caminho) {
  return new Observable((subscriber) => {
    try {
      fs.readdirSync(caminho).forEach((arquivo) =>
        subscriber.next(path.join(caminho, arquivo))
      );

      // Usa se complete pq nao muda mais os arquivos relacionado aos dados
      subscriber.complete();
    } catch (error) {
      subscriber.error(error);
    }
  });
}

function elementosTerminadosCom(padraoTextual) {
  return createPeipeableOperator((subscriber) => ({
    next(texto) {
      if (texto.endsWith(padraoTextual)) {
        subscriber.next(texto);
      }
    },
  }));
}

function lerArquivo() {
  return createPeipeableOperator((subscriber) => ({
    next(caminho) {
      try {
        const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
        subscriber.next(conteudo.toString());
      } catch (error) {
        subscriber.error(error);
      }
    },
  }));
}

function removerSeVazio() {
  return createPeipeableOperator((subscriber) => ({
    next(texto) {
      if (texto.trim()) {
        subscriber.next(texto);
      }
    },
  }));
}

function removerSeApenasNumero() {
  return createPeipeableOperator((subscriber) => ({
    next(texto) {
      const num = parseInt(texto.trim());
      if (num !== num) {
        subscriber.next(texto);
      }
    },
  }));
}

function removerSimbolos(simbolos) {
  return createPeipeableOperator((subscriber) => ({
    next(texto) {
      const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join('');
      }, texto);

      subscriber.next(textoSemSimbolos);
    },
  }));
}

function separarTextoPor(simbolo) {
  return createPeipeableOperator((subscriber) => ({
    next(texto) {
      texto.split(simbolo).forEach((parte) => {
        subscriber.next(parte);
      });
    },
  }));
}

function agruparElementos() {
  return createPeipeableOperator((subscriber) => ({
    next(palavras) {
      const agrupado = Object.values(
        palavras.reduce((agrupamento, palavra) => {
          const elemento = palavra.toLowerCase();
          const qtde = agrupamento[elemento]
            ? (agrupamento[elemento].qtde += 1)
            : 1;
          agrupamento[elemento] = { elemento: elemento, qtde };
          return agrupamento;
        }, {})
      );
      subscriber.next(agrupado);
    },
  }));
}

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

function createPeipeableOperator(operatorFn) {
  return function (source) {
    return Observable.create((subscriber) => {
      const sub = operatorFn(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.errror || ((e) => subscriber.error(e)),
        complete: sub.complete || ((e) => subscriber.complete()),
      });
    });
  };
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  removerSeVazio,
  removerSeApenasNumero,
  removerSimbolos,
  separarTextoPor,
  agruparElementos,
  ordernarPorAtributoNumerico,
};
