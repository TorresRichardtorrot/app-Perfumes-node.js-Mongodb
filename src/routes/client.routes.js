import { Router } from "express";
const router = Router();

import { renderClient } from "../controllers/client.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

router.get("/client", isAuthenticated, renderClient);

export default router;
