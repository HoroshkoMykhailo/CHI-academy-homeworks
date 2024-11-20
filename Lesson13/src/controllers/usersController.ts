import { JsonController, Get, Post, Patch, Delete, Param, Body, HttpCode, NotFoundError, HttpError, OnUndefined } from 'routing-controllers';
import { User } from '../model/User';
import { validateUser } from '../helpers/validateUser';
import { ValidateArgs } from '../decorators/validateArgs';
import { UserService } from '../services/userService';

@JsonController("/users")
export class UserController {
  private userService = new UserService();

  @Get("/")
  async getAll(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Post("/")
  @HttpCode(201)
  @ValidateArgs(validateUser)
  async create(@Body() userData: User): Promise<User | { error: string; }> {
    const newUser = await this.userService.createUser(userData);
    if (!newUser) {
      throw new HttpError(400, "User with this email already exists");
    }

    return newUser;
  }

  @Patch("/:id")
  @ValidateArgs(validateUser)
  async update(
    @Body() userData: User,
    @Param("id") id: number
  ): Promise<User | { error: string; }> {
    const updatedUser = await this.userService.updateUser(id, userData);
    if (!updatedUser) {
        throw new NotFoundError("User not found");
    }
    return updatedUser;
  }

  @Delete("/:id")
  @OnUndefined(204)
  async remove(@Param("id") id: number) {
    const isDeleted = await this.userService.deleteUser(id);
    if (!isDeleted) {
      throw new NotFoundError("User not found");
    }
  }
}