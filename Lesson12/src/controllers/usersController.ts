import { Request, Response } from 'express';
import { readUsersFromFile, writeUsersToFile } from '../utils/fileHandler';
import { User } from '../types/User';

export const getUsers = (req: Request, res: Response): void => {
    const users = readUsersFromFile();
    res.json(users);
};

export const createUser = (req: Request, res: Response): void => {
    const { user, email } = req.body;

    if (!user || !email) {
        res.status(400).json({ error: 'User and email are required' });
        return;
    }

    const users = readUsersFromFile();
    const newUser: User = { id: Date.now(), user, email };

    if(users.some(user => user.email === email)) {
        res.status(400).json({ error: 'User with this email already exists' });
        return;
    }

    users.push(newUser);
    writeUsersToFile(users);

    res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { user, email } = req.body;

    const users = readUsersFromFile();
    const userIndex = users.findIndex((u) => u.id === Number(id));

    if (userIndex === -1) {
        res.status(404).json({ error: 'User not found' });
        return;
    }

    if (user) users[userIndex].user = user;
    if (email) users[userIndex].email = email;

    writeUsersToFile(users);

    res.json(users[userIndex]);
};

export const deleteUser = (req: Request, res: Response): void => {
    const { id } = req.params;

    const users = readUsersFromFile();
    const updatedUsers = users.filter((u) => u.id !== Number(id));

    if (users.length === updatedUsers.length) {
        res.status(404).json({ error: 'User not found' });
        return;
    }

    writeUsersToFile(updatedUsers);

    res.status(204).send();
};