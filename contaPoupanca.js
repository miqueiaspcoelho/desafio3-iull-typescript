"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
var contaAbstrata_1 = require("./contaAbstrata");
var operacoesTipos_1 = require("./operacoesTipos");
//Conta Poupança
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numero, donoDaConta, array_credito, array_debito) {
        var _this = _super.call(this, numero, donoDaConta) || this;
        _this.array_credito = array_credito;
        _this.array_debito = array_debito;
        return _this;
    }
    ContaPoupanca.prototype.depositar = function (valor) {
        var data = new Date();
        var credito = new operacoesTipos_1.Credito(valor, data);
        this.array_credito.push(credito);
    };
    ContaPoupanca.prototype.sacar = function (valor) {
        var data = new Date();
        var debito = new operacoesTipos_1.Debito(valor, data);
        this.array_debito.push(debito);
    };
    ContaPoupanca.prototype.calcularSaldo = function () {
        var somaCreditos = 0;
        var somaDebitos = 0;
        for (var i = 0; i < this.array_credito.length; i++) {
            somaCreditos += this.array_credito[i]["valor"];
        }
        for (var i = 0; i < this.array_debito.length; i++) {
            somaDebitos += this.array_debito[i]["valor"];
        }
        var saldoFinal = somaCreditos - somaDebitos;
        return saldoFinal;
    };
    Object.defineProperty(ContaPoupanca.prototype, "valoresDeposito", {
        get: function () {
            return this.array_credito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaPoupanca.prototype, "valoresSaque", {
        get: function () {
            return this.array_debito;
        },
        enumerable: false,
        configurable: true
    });
    return ContaPoupanca;
}(contaAbstrata_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
