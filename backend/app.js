import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cadastroRoutes from "./src/routes/cadastroRoutes.js";

dotenv.config();

const api = express();
api.use(cors());
api.use(express.json());

api.use("/cadastro", cadastroRoutes);

api.listen(5010, () => console.log("API subiu com sucesso!"));
