class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    atacar() {

        let tipo = this.tipo.toLowerCase();
        let atack;

        if (tipo === 'mago') {
            atack = "magia"
        } else if (tipo === "guerreiro") {
            atack = "espada"
        } else if (tipo === "monge") {
            atack = "artes marciais"
        } else if (tipo === "ninja") {
            atack = "shuriken"
        }

        console.log(`O ${tipo} atacou usando ${atack}`)
        
    }
}


let heroi = new Heroi('Senhor Destino', 54, 'mago');
let guerreiro = new Heroi('Arthur', 33, 'guerreiro')

heroi.atacar();
guerreiro.atacar();