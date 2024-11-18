import { Request, Response } from 'express';
import { readUsersFromFile } from '../utils/fileHandler';

export const getUsers = (req: Request, res: Response): void => {
    const users = readUsersFromFile();
    res.json(users);
};