import fs from 'fs';
import path from 'path';
import { User } from '../types/User';

const filePath = path.resolve(__dirname, '../../data/users.json');

export const readUsersFromFile = (): User[] => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data) as User[];
};

export const writeUsersToFile = (users: User[]): void => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
};