//Classe Crédito
class Credito{
    valor: number;
    data: Date;

    constructor(valor: number, data: Date){
        this.valor = valor;
        this.data = data;
    }
}

//Classe Débito
class Debito{
    valor: number;
    data: Date;

    constructor(valor: number, data: Date){
        this.valor = valor;
        this.data = data;
    }
}

export {Credito , Debito};