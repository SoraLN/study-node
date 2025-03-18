class livro{
    constructor(titulo, autor, anoPublicado){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
    }
}

const novoLivro = new livro("Homem De Giz", "Jeffrei Dahmer", 2005)

console.log(novoLivro)