import express from "express";
import { getAuthor } from "./controllers/mainController";
import usersRoutes from "./routes/userRoutes";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', getAuthor);
app.use('/users', usersRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});