//CLASSES ABSTRATAS
//Conta
export abstract class Conta{
    constructor(private numero: string, private donoDaConta: string){}

    abstract depositar(valor: number):void;
    abstract sacar(valor: number):void;

    get numeroConta():string{
        return this.numero;
    }

    adicionarDono(cpfDono: string){
        this.donoDaConta = cpfDono;
    }
}
