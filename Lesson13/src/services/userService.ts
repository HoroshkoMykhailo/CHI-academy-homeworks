
import { User } from "../model/User";
import AppDataSource from "../ormconfig";
export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  getUsers = async (): Promise<User[]> => {
    return await this.userRepository.find();
  };

  createUser = async (userData: {
    user: string;
    email: string;
  }): Promise<User | null> => {
    const existingUser = await this.userRepository.findOneBy({
      email: userData.email,
    });
    if (existingUser) {
      return null;
    }

    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  };

  updateUser = async (
    id: number,
    userData: { user?: string; email?: string }
  ): Promise<User | null> => {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      return null;
    }

    if (userData.user) user.user = userData.user;
    if (userData.email) user.email = userData.email;

    return await this.userRepository.save(user);
  };

  deleteUser = async (id: number): Promise<boolean> => {
    const deleteResult = await this.userRepository.delete(id);
    return deleteResult.affected !== 0;
  };
}