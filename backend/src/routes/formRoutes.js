import { Router } from "express";
import { submitForm } from "../controllers/formController";

const formRoutes = Router();

formRoutes.post("/submit", submitForm);

export { formRoutes };
