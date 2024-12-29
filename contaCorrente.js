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
exports.ContaCorrente = void 0;
var contaAbstrata_1 = require("./contaAbstrata");
var operacoesTipos_1 = require("./operacoesTipos");
//Conta Corrente
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, donoDaConta, limite, array_credito, array_debito) {
        var _this = _super.call(this, numero, donoDaConta) || this;
        _this.limite = limite;
        _this.limite = limite;
        _this.array_credito = array_credito;
        _this.array_debito = array_debito;
        return _this;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        var data = new Date();
        var credito = new operacoesTipos_1.Credito(valor, data);
        this.array_credito.push(credito);
    };
    ContaCorrente.prototype.sacar = function (valor) {
        var data = new Date();
        var debito = new operacoesTipos_1.Debito(valor, data);
        this.array_debito.push(debito);
    };
    ContaCorrente.prototype.calcularSaldo = function () {
        var somaCreditos = 0;
        var somaDebitos = 0;
        for (var i = 0; i < this.array_credito.length; i++) {
            somaCreditos += this.array_credito[i]["valor"];
        }
        for (var i = 0; i < this.array_debito.length; i++) {
            somaDebitos += this.array_debito[i]["valor"];
        }
        var saldoFinal = somaCreditos - somaDebitos + this.limite;
        return saldoFinal;
    };
    ContaCorrente.prototype.transferir = function (contaDestino, valor) {
        if (this.calcularSaldo() - valor >= -this.limite) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            console.log('Sucesso');
        }
        else {
            console.log('Saldo insuficiente');
        }
    };
    Object.defineProperty(ContaCorrente.prototype, "valoresDeposito", {
        get: function () {
            return this.array_credito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaCorrente.prototype, "valoresSaque", {
        get: function () {
            return this.array_debito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaCorrente.prototype, "limiteConta", {
        set: function (valorLimite) {
            this.limite = valorLimite;
        },
        enumerable: false,
        configurable: true
    });
    return ContaCorrente;
}(contaAbstrata_1.Conta));
exports.ContaCorrente = ContaCorrente;
