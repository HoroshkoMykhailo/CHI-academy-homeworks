
import { User } from '../model/User';
import AppDataSource from '../ormconfig';

const userRepository = AppDataSource.getRepository(User);

export const getUsers = async (): Promise<User[]> => {
    return await userRepository.find();
};

export const createUser = async (userData: { user: string; email: string }): Promise<User | null> => {
    const existingUser = await userRepository.findOneBy({ email: userData.email });
    if (existingUser) {
        return null;
    }

    const newUser = userRepository.create(userData);
    return await userRepository.save(newUser);
};

export const updateUser = async (
    id: number,
    userData: { user?: string; email?: string }
): Promise<User | null> => {
    const user = await userRepository.findOneBy({ id });
    if (!user) {
        return null;
    }

    if (userData.user) user.user = userData.user;
    if (userData.email) user.email = userData.email;

    return await userRepository.save(user);
};

export const deleteUser = async (id: number): Promise<boolean> => {
    const deleteResult = await userRepository.delete(id);
    return deleteResult.affected !== 0;
};