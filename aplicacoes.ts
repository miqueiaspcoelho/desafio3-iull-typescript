import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";
import { Cargo } from "./cargo";
import { Funcionario } from "./funcionario";
import { Endereco } from "./endereco";
import {Cliente} from "./cliente";


function aplicacao1(): void {
    //Crie dois funcionários do banco, um gerente e um atendente
    const cargo1 = new Cargo('atendente');
    const funcionario_atendente = new Funcionario('1','Abdoral','321323',2500,[cargo1]);

    const cargo2 = new Cargo('gerente');
    const funcionario_gerente = new Funcionario('2','Bebeto','5555',5000,[cargo2]);

    console.log(funcionario_atendente,funcionario_gerente);
}


//Endereços serão usados em mais de uma função
const endereco1 = new Endereco('35','rua 7',5,'quadra 8','Pastos Bons','MA');
const endereco2 = new Endereco('53','rua 14',6,'quadra 9','Raposa','MA');
const endereco3 = new Endereco('83','rua 21',7,'quadra 10','São Luís','MA');

function aplicacao2(): void {
    //Crie um cliente e adicione 3 endereços a ele
    
    const cliente1 = new Cliente('12','Joana','123456',false,[endereco1,endereco2,endereco3]);
    console.log(cliente1.imprimirEnderecos);
}

function aplicacao3(): void {
    //Crie um cliente que possuam uma conta Corrente
    const cliente2 = new Cliente('93','Jessica','31',true,[endereco1]);
    const contaCorrenteCliente2 = new ContaCorrente('157',cliente2.retornaCPF,200,[],[]);
    console.log('Antes dos depósitos');
    console.log(contaCorrenteCliente2.calcularSaldo());
    contaCorrenteCliente2.depositar(100);
    contaCorrenteCliente2.depositar(100);
    contaCorrenteCliente2.depositar(100);
    console.log('Depois dos depósitos');
    console.log(contaCorrenteCliente2.calcularSaldo());
    console.log('Saque de R$ 50');
    contaCorrenteCliente2.sacar(50);
    console.log('Após sacar = ',contaCorrenteCliente2.calcularSaldo());
}



function aplicacao4(): void {
    //Aplicação 4
//Crie um cliente que possua uma ContaCorrente

    const cliente3 = new Cliente('11','Hadassa','71',true,[endereco2]);
    const contaCorrenteCliente3 = new ContaCorrente('157',cliente3.retornaCPF,200,[],[]);
    //Efetue um depósito de 1000 nessa ContaCorrente
    contaCorrenteCliente3.depositar(1000);

    //Crie um cliente que possua uma ContaPoupanca
    const cliente4 = new Cliente('55','Gabriel','33',false,[endereco3]);
    const contaPoupancaCliente4 = new ContaPoupanca('157',cliente4.retornaCPF,[],[]);
    //Efetue um depósito de 1000 reais nesta ContaPoupanca
    contaPoupancaCliente4.depositar(1000);

    console.log('Antes da transferência de R$ 500');
    console.log(`
    Saldo da conta do cliente de cpf ${cliente3.retornaCPF} = ${contaCorrenteCliente3.calcularSaldo()}
    Saldo da conta do cliente de cpf ${cliente4.retornaCPF} = ${contaPoupancaCliente4.calcularSaldo()}
    `);

    //Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
    contaCorrenteCliente3.transferir(contaPoupancaCliente4,500);

    //Exiba o saldo das duas contas
    console.log('Depois da transferência de R$ 500');
    console.log(`
    Saldo da conta do cliente de cpf ${cliente3.retornaCPF} = ${contaCorrenteCliente3.calcularSaldo()}
    Saldo da conta do cliente de cpf ${cliente4.retornaCPF} = ${contaPoupancaCliente4.calcularSaldo()}
    `);

}

function aplicacao5(): void {
    //Aplicação 5
    //Crie um cliente que possua uma ContaCorrente
    const cliente5 = new Cliente('154','Genoveva','258147',true,[endereco3,endereco2]);
    const contaCorrenteCliente5 = new ContaCorrente('3571',cliente5.retornaCPF,0,[],[]);

    //Efetue um depósito de 300 nessa ContaCorrente
    contaCorrenteCliente5.depositar(300);

    //Defina o valor do limite da ContaCorrete para 100 reais
    contaCorrenteCliente5.limiteConta = 100;

    //Crie um cliente que possua uma ContaCorrente
    const cliente6 = new Cliente('258','Dhullay','456',false,[endereco1]);
    const contaCorrenteCliente6 = new ContaCorrente('350',cliente6.retornaCPF,0,[],[]);

    //Efetue um depósito de 100 reais nesta ContaCorrente
    contaCorrenteCliente6.depositar(100);

    //Tente efetuar uma transferência de 1000 reais da primeira ContaCorrente para a
    //segunda ContaCorrente
    contaCorrenteCliente5.transferir(contaCorrenteCliente6,1000);


}

console.log('Aplicação 1');
aplicacao1();
console.log('----------------');

console.log('Aplicação 2');
aplicacao2();
console.log('----------------');

console.log('Aplicação 3');
aplicacao3();
console.log('----------------');

console.log('Aplicação 4');
aplicacao4();
console.log('----------------');

console.log('Aplicação 5');
aplicacao5();