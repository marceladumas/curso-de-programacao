//classe

class Cachorro {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    late (){
        console.log ("au au ");
    }
    andar (passos){
        console.log(`o cachorro anda ${passos} passos por dia`);
    }
}
const meuCachorro = new Cachorro ("marcela", 21);
meuCachorro.late();
meuCachorro.andar(100)

console.log(meuCachorro);

class Calculadora {
    constructor(init){
        this.valorinicial = init;
    }
    soma (valor){
        this.valorinicial += valor;
        return this.valorinicial;
    }
    subtrai (valor){
        this.valorinicial -= valor;
        return this.valorinicial;
    }
}

const calculadora = new Calculadora (10);
let valorAtual = 0;
valorAtual = calculadora.soma(5);
console.log(valorAtual);
valorAtual = calculadora.subtrai(8);
console.log(valorAtual);

calculadora.valorinicial = 200;
valorAtual = calculadora.soma (1);
console.log (valorAtual);
