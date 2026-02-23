import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";
import { pool } from "./db.js";
import type { Photocard } from "./types.js";
import type { RowDataPacket } from "mysql2";

const app = express();
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get("/", (_req: Request, res: Response) => {
  res.type("html").send(`
    <h1>Bienvenido/a a la K-Pop Photocard API</h1>
    <p>Esta API gestiona photocards de K-Pop: grupo, miembro, álbum, precio, fecha, estado y rareza.</p>
  `);
});

/**
 * GET /api/datos
 * Devuelve los registros de la tabla photocards en JSON
 * Regla: nada de any -> tipamos la respuesta con Photocard[]
 */
app.get("/api/datos", async (_req: Request, res: Response) => {
  // Tipamos el resultado del query:
  // rows será (RowDataPacket[] & Photocard[]) => NO any
  const [rows] = await pool.query<(RowDataPacket[] & Photocard[])>(
    "SELECT id, member_name, group_name, album_name, price, release_date, is_active FROM photocards ORDER BY id ASC"
  );

  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});