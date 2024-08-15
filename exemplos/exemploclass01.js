class Pessoa {
      constructor (nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
      }
}

const user = new Pessoa("Ana", 70, 1.62);
const user2 = new Pessoa("Isabella", 69, 1.6);

console.log (user);
console.log (user2)