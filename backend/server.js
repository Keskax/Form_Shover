// server.js
import { app } from "../backend/app";

const app = require("../backend/app");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
