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
exports.Cliente = void 0;
var pessoaAbstrata_1 = require("./pessoaAbstrata");
//Cliente
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(cpf, nome, telefone, vip, array_enderecos) {
        var _this = _super.call(this, cpf, nome, telefone) || this;
        _this.vip = vip;
        _this.array_enderecos = array_enderecos;
        return _this;
    }
    Cliente.prototype.autenticar = function () {
        return true;
    };
    Cliente.prototype.inserirEndereco = function (endereco) {
        this.array_enderecos.push(endereco);
    };
    Object.defineProperty(Cliente.prototype, "imprimirEnderecos", {
        get: function () {
            return this.array_enderecos;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}(pessoaAbstrata_1.Pessoa));
exports.Cliente = Cliente;
