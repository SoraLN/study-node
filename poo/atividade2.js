class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    dizerIdade(){
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos`)
    }
}

const pessoa = new Pessoa("Breno", 29)

pessoa.dizerIdade()