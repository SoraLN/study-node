function novoUsuario(nome, idade, email){

  const id = {
    nome: nome,
    idade: idade,
    email: email
  }

  if(typeof nome === "string" && typeof idade === "number"){

    return id

  }else{ 

    return `O usuario ${nome} esta com alguma informação incorreta, digite o nome ou idade corretamente`

  }

}

const total = [novoUsuario("Breno", 19, "teste.teste.com"), novoUsuario("Heloisa", 18, "helo@teste.com")]

const total2 = [...total, novoUsuario("Davi", 20, "sla#gmail.com")]


console.log(total2)


// VC VAI CRIAR UMA FUNCAO QUE RECEBA UM Object, ok
// JOGUE ELE PARA UM Array, ok
// TRASFORME ELE EM STRING ok
// GARANTA QUE O NOME É UMA STRING E IDADE UM NUMBER ok
// ULTILIZE SPREAD PARA ADD NOVOS USUARIOS