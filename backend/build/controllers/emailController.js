"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class EmailController {
    constructor() {
        this.Email = (formulario) => __awaiter(this, void 0, void 0, function* () {
            var transport = nodemailer_1.default.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                    user: "haizaratech@gmail.com",
                    pass: "felipe123."
                }
            });
            const mailOptions = {
                from: `”${formulario.nombre} ” <${formulario.email}>`,
                to: "info@rivera-designs.com",
                subject: formulario.asunto,
                html: `
        <strong>Nombre:</strong> ${formulario.nombre} <br/>
        <strong>Apellido:</strong> ${formulario.apellido} <br/>
        <strong>Telefono:</strong> ${formulario.telefono} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Mensaje:</strong> ${formulario.message}
        `
            };
            yield transport.sendMail(mailOptions, function (err, info) {
                if (err)
                    console.log(err);
                else
                    console.log(formulario.nombre);
                console.log(info);
            });
        });
    }
}
const emailController = new EmailController();
exports.default = emailController;
