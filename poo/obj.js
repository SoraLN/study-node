class Funcionario {

  #salario
  
  constructor(nome,idade,cargo,salario){
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.#salario = salario;
  }

  get salario() {
    return this.#salario
  }

  set salario(salario) {
    this.#salario = salario
  }

  exibirdados(){
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.cargo} da empresa ChocoMarck, e sendo ${this.cargo} eu recebo ${this.salario}`
  }

  aumentarSalario(){
    const aumento = this.salario * 0.20

    this.salario += aumento
  }
}

class Gerente extends Funcionario {
  constructor(nome,idade,cargo,salario,departamento){
    super(nome,idade,cargo,salario)
    this.departamento = departamento;
  }

  exibirdados(){
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.cargo} do departamento ${this.departamento} da empresa ChocoMarck, e sendo ${this.cargo} eu recebo ${this.salario}`
  }
}

const Jairo = new Funcionario("Jairo", 18, "Repositor", 1300)
const Felipe = new Funcionario("Felipe", 19, "Recepcionista", 1700)
const Breno = new Gerente("Breno", 19, "Cientista De Dados", 5800, "Programação")

Jairo.aumentarSalario()

console.log(Jairo.exibirdados())
console.log(Felipe.exibirdados())
console.log(Breno.exibirdados())