const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];

Array.prototype.meuFilter = function (fn) {
  const novoArray = [];
  for (let index = 0; index < this.length; index++) {
    //Dentro da funcao faz a verificacao dos valor item a item
    if (fn(this[index], index, this)) {
      novoArray.push(this[index]);
    }
  }

  return novoArray;
};

const qtdeMaiorQueZero = (item) => item.qtde > 0;
const itensValido = carrinho.meuFilter(qtdeMaiorQueZero);
console.log(itensValido);

const getNome = (item) => item.nome;

const nomeItensValido = carrinho.meuFilter(qtdeMaiorQueZero).map(getNome);
console.log(nomeItensValido);

const qtdeMuitoGrande = (item) => item.qtde > 1000;
const nomeItensMuitoGrandeValido = carrinho
  .meuFilter(qtdeMuitoGrande)
  .map(getNome);
console.log(nomeItensMuitoGrandeValido);
