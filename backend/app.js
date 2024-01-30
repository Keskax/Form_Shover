import express from "express";
import cors from "cors";

import { formRoutes } from "./src/routes/formRoutes";
import { sequelize } from "../backend/src/db";

const app = express();

app.use(cors()); // Esta línea debe funcionar correctamente

app.use(express.json());
app.use("/form", formRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

export { app };
