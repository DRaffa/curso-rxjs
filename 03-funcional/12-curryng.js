function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        // Lazy Evalutation
        const tamanho = (texto || '').trim().length;

        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

function aplicarValidacao(fn, valor) {
  return function (valor) {
    try {
      return fn(valor);
    } catch (error) {
      return { error };
    }
  };
}

//Salva versoes parciais dos metodos

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido');
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);
const p1 = { nome: 'A', preco: 14.99, desc: 0.25 };

console.log(validarNomeProduto(p1.nome));
