class Pessoa {
    constructor (nome, idade, altura){
      this.nome = nome;
      this.idade = idade;
      this.altura = altura;
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura!`)
    }
}


const user = new Pessoa("Ana", 70, 1.62);
const user2 = new Pessoa("Isabella", 69, 1.6);

console.log (user.seApresentar());
console.log (user2.seApresentar())
