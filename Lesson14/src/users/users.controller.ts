import { BadRequestException, Body, Controller, Get, NotFoundException, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

const MinLoginLength = 4;
const MinPasswordLength = 4;

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: "Get all users or a specific user" })
  @ApiQuery({ name: "id", required: false, description: "User ID" })
  @ApiQuery({ name: "username", required: false, description: "Username" })
  @ApiResponse({ status: 200, description: "Successful response" })
  @ApiResponse({ status: 404, description: "User not found" })
  @ApiResponse({ status: 404, description: "There are no users" })
  async getUsers(
    @Query("id") id?: number,
    @Query("username") username?: string
  ) {
    if (id || username) {
      const user = id
        ? await this.usersService.findById(id)
        : await this.usersService.findByUsername(username);

      if (!user) {
        throw new NotFoundException("User not found");
      }

      return plainToInstance(User, user, { excludeExtraneousValues: true });
    }

    const users = await this.usersService.findAll();
    if (!users || users.length === 0) {
      throw new NotFoundException("There are no users");
    }

    return plainToInstance(User, users, { excludeExtraneousValues: true });
  }

  @ApiOperation({ summary: "Регистрация нового пользователя" })
  @ApiResponse({
    status: 201,
    description: "Пользователь успешно зарегистрирован",
  })
  @ApiResponse({ status: 400, description: "Некорректные данные" })
  @Post("register")
  async register(@Body() createUserDto: CreateUserDto) {
    if (
      !createUserDto.username ||
      !createUserDto.password ||
      createUserDto.username.length < MinLoginLength ||
      createUserDto.password.length < MinPasswordLength
    ) {
      throw new BadRequestException(
        `Длинна пароля и логина должна быть не меньше ${MinLoginLength} символов`
      );
    }

    const user = this.usersService.create(
      createUserDto.username,
      createUserDto.password
    );

    return plainToInstance(User, user, { excludeExtraneousValues: true });
  }
}
