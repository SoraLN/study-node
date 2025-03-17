const eu = {
    nome: "Breno",
    idade: 19,
    musica: ["rap", "lofi", "kamaitachi"],
    altura: 1.81
}

class pessoa {
    constructor (nome, sobrenome,idade,musica,altura){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.musica = musica;
        this.altura = altura;
    }

    getfullName(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

const NovaPessoa1 = new pessoa("Heloisa","Anjos", 18, "emo", 1.60)

NovaPessoa1.getfullName()