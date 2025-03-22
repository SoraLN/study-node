class Pessoa {
    constructor(pnome, pidade, pcor, paltura, pualidade, pdefeito, pstatus, pestafa){
        this.nome = pnome
        this.idade = pidade
        this.cor = pcor
        this.altura = paltura
        this.qualidade = pualidade
        this.defeito = pdefeito
        this.estafa = 0

        if(pstatus == 1){
            this.status = "Acordado"
        }else{
            this.status = "Dormindo"
        }
    }
    
    acordar(){
        this.status == 1
    }

    setnome(Novonome){
        this.nome = Novonome
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Altura: ${this.altura}`)
        console.log(`Qualidade: ${this.qualidade}`)
        console.log(`Defeito: ${this.defeito}`)
        console.log(`Status: ${this.status}`)
        console.log(`Estafa: ${this.estafa}`)
        console.log("-------------------------------")
    }
}

class Computador {
    constructor(cpu, gpu, ram, storage, motherboard, psu, caseType) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.storage = storage;
        this.motherboard = motherboard;
        this.psu = psu;
        this.caseType = caseType;
    }

    info() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`GPU: ${this.gpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`Storage: ${this.storage}`);
        console.log(`Motherboard: ${this.motherboard}`);
        console.log(`PSU: ${this.psu}`);
        console.log(`Case Type: ${this.caseType}`);
        console.log("-------------------------------");
    }
}

let pc1 = new Computador("Intel i9", "NVIDIA RTX 3080", "32GB", "1TB SSD", "ASUS ROG", "750W", "Mid Tower");
pc1.info();


let p1 = new Pessoa("Breno", 19, "Branco", 1.81, "Ser Legal", "Ser Chato", 1)
let p2 = new Pessoa("Heloisa", 18, "Branco", 1.65, "Ser Amorosa", "Ser Tenebrosa", 1)
let p3 = new Pessoa("Mark", 19, "Pardo", 1.64, "Ser Inteligente", "Ser Burro", 1)
let p4 = new Pessoa("Yuki", 19, "Amarelo", 1.68, "Ser Interessante", "Ser Desinteressante", 2)
p1.info()