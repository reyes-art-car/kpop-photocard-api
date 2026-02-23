"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("dotenv/config");
var app = (0, express_1.default)();
// 1) Puerto por variable de entorno o 3000 por defecto
var PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
// (Opcional) middleware para JSON por si luego haces API
app.use(express_1.default.json());
// 2) Ruta GET / que devuelve HTML con la temática
app.get("/", function (_req, res) {
    var html = "\n    <!doctype html>\n    <html lang=\"es\">\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <title>K-Pop Photocard API</title>\n      </head>\n      <body>\n        <h1>Bienvenido/a a la K-Pop Photocard API </h1>\n        <p>\n          Esta API est\u00E1 pensada para gestionar photocards de K-Pop:\n          miembros, grupos, \u00E1lbumes, precios, fechas de lanzamiento y estado (activa/inactiva).\n        </p>\n        <p>\n          Pr\u00F3ximamente podr\u00E1s consultar, a\u00F1adir, editar y eliminar photocards desde endpoints.\n        </p>\n      </body>\n    </html>\n  ".trim();
    res.status(200).type("html").send(html);
});
// 3) Arrancar el servidor
app.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT));
});
