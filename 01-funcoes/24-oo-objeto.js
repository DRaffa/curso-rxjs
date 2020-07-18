class Produto {
  constructor(nome, preco, desconto) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }

  get nome() {
    return `Produto: ${this._nome}`;
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase();
  }

  get preco() {
    return this.preco;
  }

  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this.preco = novoPreco;
    }
  }

  // Metodo
  precoFinal() {
    return this.preco * (1 - this.desconto);
  }

  // Metodo COMO Atributo
  get precoFinalNovo() {
    return this.preco * (1 - this.desconto);
  }
}

const p1 = new Produto('Caneta', 8.59, 0.2);
console.log(p1.nome);
const p2 = new Produto('Caneta', 100, 0.5);
console.log(p2.preco);
console.log(p2.precoFinal());
console.log(p2.precoFinalNovo);
