import { Router } from "express";
const router = Router();

import {
  createNewPerfume,
  renderPerfumeForm,
  renderPerfumes,
  deletePerfume,
  renderEditForm,
  updatePerfume,
  renderPerfume,
} from "../controllers/perfumes.controller.js";

import { isAuthenticated, isAdmin } from "../helpers/auth.js";
import { upload } from "../helpers/multer.js";

//? Crear nuev perfume
router.get("/perfumes/add", isAuthenticated, isAdmin, renderPerfumeForm);
router.post(
  "/perfumes/add",
  isAdmin,
  isAuthenticated,
  upload,
  createNewPerfume
);

//? obtener todos los perfumes
router.get("/perfumes", renderPerfumes);

//?Apartado de un perfume
router.get("/perfumes/:id", renderPerfume);

//?Editar perfume
router.get("/perfumes/edit/:id", isAdmin, isAuthenticated, renderEditForm);
router.put("/perfumes/edit/:id", isAdmin, isAuthenticated, updatePerfume);

//?eliminar perfume
router.delete(
  "/perfumes/delete/:id/:name",
  isAdmin,
  isAuthenticated,
  deletePerfume
);

export default router;
