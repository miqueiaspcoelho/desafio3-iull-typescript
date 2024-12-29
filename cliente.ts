import { Pessoa } from "./pessoaAbstrata";
import { IUsuario } from "./interfaceUsuario";
import { Endereco } from "./endereco";
//Cliente
export class Cliente extends Pessoa implements IUsuario {
    vip: boolean;
    array_enderecos: Endereco[];
    constructor(cpf:string, nome: string, telefone: string, vip: boolean, array_enderecos: Endereco[]){
        super(cpf,nome,telefone);
        this.vip = vip;
        this.array_enderecos = array_enderecos;
    }
    autenticar(): boolean{
        return true;
    }

    inserirEndereco(endereco: Endereco){
        this.array_enderecos.push(endereco);
    }

    get imprimirEnderecos(){
        return this.array_enderecos;
    }
}