//Pessoa
export abstract class Pessoa {
    constructor(
        private cpf: string,
        private nome: string,
        private telefone: string,
    ){}
    get retornaCPF(){
        return this.cpf;
    }
}
