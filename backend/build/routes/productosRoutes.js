"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = __importDefault(require("../controllers/productosController"));
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/productos', productosController_1.default.productos);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
