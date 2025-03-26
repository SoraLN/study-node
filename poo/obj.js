class Pessoa {
    constructor(pnome, pidade, pcor, paltura, pualidade, pdefeito, pstatus, pestafa){
        this.nome = pnome
        this.idade = pidade
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("-------------------------------")
    }
}

let total = []

function addPerson(){
    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value

    const pessoa = new Pessoa(nome, idade)

    const p_nome = document.getElementById("p_nome")
    const p_idade = document.getElementById("p_idade")

    p_nome.innerHTML = nome
    p_idade.innerHTML = idade

    pessoa.info()

    total.push(pessoa)

    nome.value = ""
    idade.value = ""
}

const botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    addPerson()
    console.log(total)


    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value

    nome.value = ""
    idade.value = ""
})