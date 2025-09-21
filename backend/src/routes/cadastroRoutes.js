import { Router } from "express";
import * as controller from "../controllers/cadastroController.js";

const router = Router();

router.post("/", controller.cadastrar);
router.get("/", controller.listar);
router.get("/:id", controller.consultar);


export default router;
