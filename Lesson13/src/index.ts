import express from "express";
import { getAuthor } from "./controllers/mainController";
import usersRoutes from "./routes/userRoutes";
import AppDataSource from "./ormconfig";


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', getAuthor);
app.use('/users', usersRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });