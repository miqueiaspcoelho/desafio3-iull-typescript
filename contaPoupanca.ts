import { Conta } from "./contaAbstrata";
import { Debito, Credito } from "./operacoesTipos";
//Conta Poupança
export class ContaPoupanca extends Conta {
    array_credito: Credito[];
    array_debito: Debito[];
    constructor(
        numero: string,
        donoDaConta: string,
        array_credito: Credito[],
        array_debito: Debito[]
    ){
        super(numero,donoDaConta);
        this.array_credito = array_credito;
        this.array_debito = array_debito;

    }

    depositar(valor: number): void {
        let data = new Date();
        const credito = new Credito(valor,data);
        this.array_credito.push(credito);
    }

    sacar(valor: number){
        let data = new Date();
        const debito = new Debito(valor,data);
        this.array_debito.push(debito);
    }

    calcularSaldo(): number{
        var somaCreditos = 0;
        var somaDebitos = 0;
        for(let i=0; i<this.array_credito.length; i++){
            somaCreditos+=this.array_credito[i]["valor"];
        }

        for (let i=0; i< this.array_debito.length; i++){
            somaDebitos+=this.array_debito[i]["valor"];
        }
        let saldoFinal = somaCreditos - somaDebitos;
        return saldoFinal;
    }

    get valoresDeposito(){
        return this.array_credito;
    }

    get valoresSaque(){
        return this.array_debito;
    }    
}