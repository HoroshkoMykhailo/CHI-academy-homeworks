import { Request, Response } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../services/userService';

export const getUsersHandler = (req: Request, res: Response): void => {
    const users = getUsers();
    res.json(users);
};

export const createUserHandler = (req: Request, res: Response): void => {
    const { user, email } = req.body;

    if (!user || !email) {
        res.status(400).json({ error: 'User and email are required' });
        return;
    }

    const newUser = createUser({ user, email });

    if (!newUser) {
        res.status(400).json({ error: 'User with this email already exists' });
        return;
    }

    res.status(201).json(newUser);
};

export const updateUserHandler = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { user, email } = req.body;

    const updatedUser = updateUser(Number(id), { user, email });

    if (!updatedUser) {
        res.status(404).json({ error: 'User not found' });
        return;
    }

    res.json(updatedUser);
};

export const deleteUserHandler = (req: Request, res: Response): void => {
    const { id } = req.params;

    const isDeleted = deleteUser(Number(id));

    if (!isDeleted) {
        res.status(404).json({ error: 'User not found' });
        return;
    }

    res.status(204).send();
};