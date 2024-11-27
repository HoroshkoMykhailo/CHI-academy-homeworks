import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'username', description: 'username for registration' })
  @MinLength(4, { message: 'Username has to be longer than 4 characters' })
  username: string;


  @ApiProperty({ example: 'password123', description: 'User password' })
  @MinLength(4, { message: 'Password has to be longer than 4 characters' })
  password: string;
}