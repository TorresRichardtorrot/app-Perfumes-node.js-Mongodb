import { Router } from "express";
import {
  renderIndex,
  renderCatalog,
  renderAdmin,
} from "../controllers/index.controller.js";

import { isAuthenticated, isAdmin } from "../helpers/auth.js";

const router = Router();

router.get("/", renderIndex);

router.get("/catalogo", renderCatalog);

router.get("/admin", isAdmin, isAuthenticated, renderAdmin);

export default router;
