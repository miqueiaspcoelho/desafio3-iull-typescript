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
exports.Funcionario = void 0;
var pessoaAbstrata_1 = require("./pessoaAbstrata");
//Funcionário
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(cpf, nome, telefone, salario, cargo) {
        var _this = _super.call(this, cpf, nome, telefone) || this;
        _this.salario = salario;
        _this.cargo = cargo;
        return _this;
    }
    Funcionario.prototype.autenticar = function () {
        return true;
    };
    Object.defineProperty(Funcionario.prototype, "cargoFuncionario", {
        set: function (nomeCargo) {
            this.cargo.push(nomeCargo);
        },
        enumerable: false,
        configurable: true
    });
    return Funcionario;
}(pessoaAbstrata_1.Pessoa));
exports.Funcionario = Funcionario;
