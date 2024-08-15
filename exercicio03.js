class Pizza {
    constructor (base, molho, cobertura, queijo){
        this.base = base;
        this.molho = molho; 
        this.cobertura = cobertura;
        this.queijo = queijo;
    }
    pedido (){
        console.log (`Olá, eu quero uma pizza com massa ${this.base}, com molho de ${this.molho}, ${this.cobertura} e queijo ${this.queijo}!`)
    }
}

const sabor = new Pizza ("Integral", "Tomate", "Pepperoni", "Mussarela")

sabor.pedido();