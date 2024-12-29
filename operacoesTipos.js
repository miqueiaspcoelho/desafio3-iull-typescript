"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debito = exports.Credito = void 0;
//Classe Crédito
var Credito = /** @class */ (function () {
    function Credito(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    return Credito;
}());
exports.Credito = Credito;
//Classe Débito
var Debito = /** @class */ (function () {
    function Debito(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    return Debito;
}());
exports.Debito = Debito;
