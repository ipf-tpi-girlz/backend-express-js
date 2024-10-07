import { Router } from "express";
import {
  updateUser,
  getUsers,
  getUserProfilePicture,
} from "../controllers/auth.controller.js";
import { validarJWT } from "../middlewares/jwt.validation.js";
import { upload } from "../middlewares/img.middleware.js";

export const authRouter = Router();

// Obtener datos del usuario autenticado
authRouter.get("/", validarJWT, getUsers);

// Actualizar perfil (incluye la imagen de perfil)
authRouter.post("/update", upload, updateUser);

// Ruta para obtener la imagen de perfil
authRouter.get("/profile/picture", getUserProfilePicture);
