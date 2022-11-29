"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
class ProductosController {
    productos(req, res) {
        express_1.default.static(path_1.default.join(__dirname, '../../../../dist/'));
    }
}
const productosController = new ProductosController();
exports.default = productosController;
