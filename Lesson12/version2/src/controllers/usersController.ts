import { JsonController, Get, Post, Patch, Delete, Param, Body, HttpCode, NotFoundError, HttpError, OnUndefined } from 'routing-controllers';
import { User } from '../types/User';
import { validateUser } from '../helpers/validateUser';
import { ValidateArgs } from '../decorators/validateArgs';
import { UserService } from '../services/userService';

@JsonController("/users")
export class UserController {
  private userService = new UserService();

  @Get("/")
  getAll(): User[] {
    return this.userService.getAllUsers();
  }

  @Post("/")
  @HttpCode(201)
  @ValidateArgs(validateUser)
  create(@Body() userData: User): User | { error: string } {
    const newUser = this.userService.createUser(userData);
    if (!newUser) {
      throw new HttpError(400, "User with this email already exists");
    }

    return newUser;
  }

  @Patch("/:id")
  @ValidateArgs(validateUser)
  update(
    @Body() userData: User,
    @Param("id") id: number
  ): User | { error: string } {
    const updatedUser = this.userService.updateUser(id, userData);
    if (!updatedUser) {
        throw new NotFoundError("User not found");
    }
    return updatedUser;
  }

  @Delete("/:id")
  @OnUndefined(204)
  remove(@Param("id") id: number) {
    const isDeleted = this.userService.deleteUser(id);
    if (!isDeleted) {
      throw new NotFoundError("User not found");
    }
  }
}