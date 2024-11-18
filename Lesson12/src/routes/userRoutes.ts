import express from "express";
import {
  createUserHandler,
  deleteUserHandler,
  getUsersHandler,
  updateUserHandler,
} from "../controllers/usersController";

const router = express.Router();

router.get("/", getUsersHandler);

router.post("/", createUserHandler);

router.patch("/:id", updateUserHandler);

router.delete("/:id", deleteUserHandler);

export default router;
