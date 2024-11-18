import { User } from '../types/User';
import { readUsersFromFile, writeUsersToFile } from '../utils/fileHandler';

export const getUsers = (): User[] => {
    return readUsersFromFile();
};

export const createUser = (userData: { user: string; email: string }): User | null => {
    const users = readUsersFromFile();

    if (users.some((user) => user.email === userData.email)) {
        return null;
    }

    const newUser: User = { id: Date.now(), ...userData };
    users.push(newUser);
    writeUsersToFile(users);

    return newUser;
};

export const updateUser = (id: number, userData: { user?: string; email?: string }): User | null => {
    const users = readUsersFromFile();
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return null;
    }

    if (userData.user) users[userIndex].user = userData.user;
    if (userData.email) users[userIndex].email = userData.email;

    writeUsersToFile(users);

    return users[userIndex];
};

export const deleteUser = (id: number): boolean => {
    const users = readUsersFromFile();
    const updatedUsers = users.filter((user) => user.id !== id);

    if (users.length === updatedUsers.length) {
        return false;
    }

    writeUsersToFile(updatedUsers);

    return true;
};