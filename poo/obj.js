function Pessoa(nome,sobrenome,idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.amigos = [];

  this.nomecompleto = () => {
    return `${this.nome} ${this.sobrenome}`;
  };

  this.adicionaramigo = (amigo) => {
    this.amigos.push(amigo);
    amigo.amigos.push(this)
  };

  this.selecionarAmigos = () => {
    return this.amigos.map((amigo) => amigo.nomecompleto())
  };
}

const pessoa1 = new Pessoa("Breno", "Oliveira", 19);
const pessoa2 = new Pessoa("Heloisa", "Anjos", 18);
const pessoa3 = new Pessoa("Felipe", "Gonçalve", 18);

pessoa1.adicionaramigo(pessoa2)
pessoa1.adicionaramigo(pessoa3)
console.log(pessoa1.selecionarAmigos());
console.log(pessoa2.selecionarAmigos());