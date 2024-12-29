"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
//Pessoa
var Pessoa = /** @class */ (function () {
    function Pessoa(cpf, nome, telefone) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
    }
    Object.defineProperty(Pessoa.prototype, "retornaCPF", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
