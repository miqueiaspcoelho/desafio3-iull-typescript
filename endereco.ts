//CLASSES CONCRETAS
//Endereço
export class Endereco {
    private _cep: string;
    private _logradouro: string;
    private _numero: number;
    private _complemento: string;
    private _cidade: string;
    private _UF: string;
    constructor(
        cep: string, 
        logradouro: string,
        numero: number,
        complemento: string,
        cidade: string,
        uf: string,
        ) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._UF = uf;
    }

    public get cep(): string {
        return this._cep;
    }
    public set cep(value: string) {
        this._cep = value;
    }

    public get logradouro(): string {
        return this._logradouro;
    }
    public set logradouro(value: string) {
        this._logradouro = value;
    }
}