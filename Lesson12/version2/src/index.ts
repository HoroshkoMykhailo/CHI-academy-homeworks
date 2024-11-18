import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { MainController } from './controllers/mainController';
import { UserController } from './controllers/usersController';

const port = 3000;

const app = createExpressServer({
    controllers: [MainController, UserController], 
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});