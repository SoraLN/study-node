class LoL {
    constructor(champ, maestria, classe, origem, feedado, farm, kill, morte){
        this.champ = champ
        this.maestria = maestria
        this.classe = classe
        this.origem = origem
        this.feedado = feedado
        this.farm = farm
        this.kill = kill
        this.morte = morte
    }

}

let Katarina = new LoL("Katarina", 549.2, "assassino", "Noxus")
let Fizz = new LoL("Fizz", 1.923 , "assassino", "Bandopolis")
let Irelia = new LoL("Irelia", 1.002, "lutador", "Demacian")
let Teemo = new LoL("Teemo", 42.50, "tank", "Bandopolis")
let Diana = new LoL("Diana", 842.22, "lutador", "Shurima")

console.log(Fizz, Irelia, Diana)