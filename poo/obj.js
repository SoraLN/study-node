const botao = document.getElementById("botao")

botao.addEventListener("click", ()=>{

  async function infoPais (){

    const country = document.getElementById("nome").value
    const name = document.getElementById("name")
    const capital = document.getElementById("capital")
    const populacao = document.getElementById("populacao")
    const bandeira = document.getElementById("bandeira")

      try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)

        const dados = await res.json()

        name.innerHTML = dados[0].name.common
        capital.innerHTML = dados[0].capital 
        populacao.innerHTML = dados[0].population
        bandeira.src = dados[0].flags.png

        console.log(dados)

      } catch (erro){
          console.log("Erro encontrado", erro)
      }
  }

  infoPais()
})