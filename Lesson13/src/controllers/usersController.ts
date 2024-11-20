import { Request, Response } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../services/userService';

export const getUsersHandler = async (req: Request, res: Response): Promise<void> => {
    const users = await getUsers();
    res.json(users);
};

export const createUserHandler = async (req: Request, res: Response): Promise<void> => {
    const { user, email } = req.body;

    if (!user || !email) {
        res.status(400).json({ error: 'User and email are required' });
        return;
    }

    const newUser = await createUser({ user, email });

    if (!newUser) {
        res.status(400).json({ error: 'User with this email already exists' });
        return;
    }

    res.status(201).json(newUser);
};

export const updateUserHandler = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { user, email } = req.body;

    const updatedUser = await updateUser(Number(id), { user, email });

    if (!updatedUser) {
        res.status(404).json({ error: 'User not found' });
        return;
    }

    res.json(updatedUser);
};

export const deleteUserHandler = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const isDeleted = await deleteUser(Number(id));

    if (!isDeleted) {
        res.status(404).json({ error: 'User not found' });
        return;
    }

    res.status(204).send();
};