import express from "express";
import { createUser, getUsers, updateUser } from "../controllers/usersController";

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.patch('/:id', updateUser);

export default router;