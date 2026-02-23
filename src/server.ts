import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";
const app = express();

// 1) Puerto por variable de entorno o 3000 por defecto
const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000;

// (Opcional) middleware para JSON por si luego haces API
app.use(express.json());

// 2) Ruta GET / que devuelve HTML con la temática
app.get("/", (_req: Request, res: Response) => {
  const html = `
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>K-Pop Photocard API</title>
      </head>
      <body>
        <h1>Bienvenido/a a la K-Pop Photocard API </h1>
        <p>
          Esta API está pensada para gestionar photocards de K-Pop:
          miembros, grupos, álbumes, precios, fechas de lanzamiento y estado (activa/inactiva).
        </p>
        <p>
          Próximamente podrás consultar, añadir, editar y eliminar photocards desde endpoints.
        </p>
      </body>
    </html>
  `.trim();

  res.status(200).type("html").send(html);
});

// 3) Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});