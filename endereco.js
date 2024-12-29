"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
//CLASSES CONCRETAS
//Endereço
var Endereco = /** @class */ (function () {
    function Endereco(cep, logradouro, numero, complemento, cidade, uf) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._UF = uf;
    }
    Object.defineProperty(Endereco.prototype, "cep", {
        get: function () {
            return this._cep;
        },
        set: function (value) {
            this._cep = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "logradouro", {
        get: function () {
            return this._logradouro;
        },
        set: function (value) {
            this._logradouro = value;
        },
        enumerable: false,
        configurable: true
    });
    return Endereco;
}());
exports.Endereco = Endereco;
