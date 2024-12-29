import { Conta } from "./contaAbstrata";
import { Debito, Credito } from "./operacoesTipos";
//Conta Corrente
export class ContaCorrente extends Conta {
    array_credito: Credito[];
    array_debito: Debito[];
    constructor(
        numero: string,
        donoDaConta: string,
        private limite: number,
        array_credito: Credito[],
        array_debito: Debito[]
    ){
        super(numero,donoDaConta);
        this.limite = limite;
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
        let saldoFinal = somaCreditos - somaDebitos + this.limite;
        return saldoFinal;
    }

    transferir(contaDestino: Conta, valor: number){
        if(this.calcularSaldo() - valor >= - this.limite ){
            this.sacar(valor);
            contaDestino.depositar(valor);
            console.log('Sucesso');
        }else{
            console.log('Saldo insuficiente');
        }
    }

    get valoresDeposito(){
        return this.array_credito;
    }

    get valoresSaque(){
        return this.array_debito;
    }

    set limiteConta(valorLimite: number){
        this.limite = valorLimite;
    }
}