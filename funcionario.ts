import { Pessoa } from "./pessoaAbstrata";
import { IUsuario } from "./interfaceUsuario";
import { Cargo } from "./cargo";
//Funcionário
export class Funcionario extends Pessoa implements IUsuario {
    private salario: number;
    cargo: Cargo[];
    constructor(
        cpf: string,
        nome: string,
        telefone: string,
        salario: number,
        cargo: Cargo[],
        ){
        super(cpf,nome,telefone);
        this.salario= salario;
        this.cargo = cargo;
    }
    autenticar(): boolean {
        return true;
    }

    set cargoFuncionario(nomeCargo: Cargo){
        this.cargo.push(nomeCargo);
    }
}