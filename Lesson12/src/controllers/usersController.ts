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