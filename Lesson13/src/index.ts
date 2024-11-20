import { MainController } from "./controllers/mainController";
import AppDataSource from "./ormconfig";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/usersController";



const port = 3000;

const app = createExpressServer({
    controllers: [MainController, UserController], 
});

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