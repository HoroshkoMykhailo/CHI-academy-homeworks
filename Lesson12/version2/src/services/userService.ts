import { User } from '../types/User';
import { readUsersFromFile, writeUsersToFile } from '../utils/fileHandler';

export class UserService {
    getAllUsers(): User[] {
        return readUsersFromFile();
    }

    createUser(userData: { user: string; email: string }): User | null {
        const users = readUsersFromFile();

        if (users.some((user) => user.email === userData.email)) {
            return null;
        }

        const newUser: User = { id: Date.now(), ...userData };
        users.push(newUser);

        writeUsersToFile(users);

        return newUser;
    }

    updateUser(id: number, userData: { user?: string; email?: string }): User | null {
        const users = readUsersFromFile();
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return null;
        }

        if (userData.user) users[userIndex].user = userData.user;
        if (userData.email) users[userIndex].email = userData.email;

        writeUsersToFile(users);

        return users[userIndex];
    }

    deleteUser(id: number): boolean {
        const users = readUsersFromFile();
        const initialLength = users.length;

        const updatedUsers = users.filter((user) => user.id !== id);

        if (updatedUsers.length === initialLength) {
            return false;
        }

        writeUsersToFile(updatedUsers);

        return true;
    }
}