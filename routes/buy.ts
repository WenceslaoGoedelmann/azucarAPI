import { Router } from "express";
import { check } from "express-validator";

import { recolectarErrores } from "../middlewares/recolectarErrores";
import validarJWT from "../middlewares/validarJWT";
import { isVerified } from "../middlewares/validarVerificado";
import { createBuy } from "../controllers/buy";

const router = Router();



router.post(
  "/",
  [
    validarJWT,
    isVerified,
    recolectarErrores,
  ],
  createBuy
);

export default router;