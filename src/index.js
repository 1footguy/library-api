import "dotenv/config"
import express from "express";
import livrosRouter from "./routes/livrosRoutes.js";
import auth from "./database/connection.js";
import checkAdmin from "./middleware/adminMiddleware.js";

const server = express();
const port = 3000;
server.use(express.json())
server.use(livrosRouter)

auth();

  server.get("/admin", checkAdmin, (req, res) => {
    res.json({ message: "Acesso admin"})
  });

  server.listen(port, () => {
    console.log("App listening to port 3000");
});


