// This esta tornando as variaveis publica quando chamada a funcao produto
// Funcao construtora que gerar um objeto
function Produto(nome, preco, desconto = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this.desconto = desconto;

  this.precoFinal = () => {
    return this.preco * (1 - this.desconto);
  };
}

const p1 = new Produto('Caneta', 8.59);
console.log(p1.nome);
const p2 = new Produto('Caneta', 100);
console.log(p2.preco);
console.log(p2.precoFinal());
