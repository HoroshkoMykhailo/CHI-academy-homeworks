import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'username', description: 'Username' })
  username: string;

  @ApiProperty({ example: 'password', description: 'User password' })
  password: string;
}