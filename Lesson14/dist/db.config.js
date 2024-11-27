"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconfig = void 0;
const user_entity_1 = require("./users/user.entity");
const dotenv = require("dotenv");
dotenv.config();
exports.dbconfig = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? "5432", 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.DB_SYNCHRONIZE === "true",
    entities: [user_entity_1.User],
};
//# sourceMappingURL=db.config.js.map