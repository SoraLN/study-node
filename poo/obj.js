class Pessoa {
    constructor(nome, notaProva1, notaProva2) {
      this.nome = nome;
      this.notaProva1 = notaProva1;
      this.notaProva2 = notaProva2;
    }
  }
  
  class Escola {
    constructor(nome) {
      this.nome = nome;
    }
  
    verificarAprovacao(pessoa) {
      if (pessoa.notaProva1 > 30 && pessoa.notaProva2 > 40) {
        console.log(`${pessoa.nome} foi aprovado(a) na escola ${this.nome}.`);
      } else {
        console.log(`${pessoa.nome} não foi aprovado(a) na escola ${this.nome}.`);
      }
    }
  }
  
  const aluno1 = new Pessoa("João", 35, 45);
  const aluno2 = new Pessoa("Maria", 28, 50);
  const escola = new Escola("Escola Exemplo");
  
  escola.verificarAprovacao(aluno1); 
  escola.verificarAprovacao(aluno2);
  