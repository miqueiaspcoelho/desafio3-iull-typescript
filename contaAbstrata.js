"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
//CLASSES ABSTRATAS
//Conta
var Conta = /** @class */ (function () {
    function Conta(numero, donoDaConta) {
        this.numero = numero;
        this.donoDaConta = donoDaConta;
    }
    Object.defineProperty(Conta.prototype, "numeroConta", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.adicionarDono = function (cpfDono) {
        this.donoDaConta = cpfDono;
    };
    return Conta;
}());
exports.Conta = Conta;
