import express from "express";
import apiRoutes from "./routes/api.js";
import docsRoutes from "./routes/api-docs.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

app.use("/api", apiRoutes);
app.use(docsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
