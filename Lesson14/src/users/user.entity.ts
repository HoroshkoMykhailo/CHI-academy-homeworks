import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Entity()
export class User {
  @Expose()
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Unique user Id' })
  id: number;

  @Expose()
  @Column({ unique: true })
  @ApiProperty({ example: 'username', description: 'Unique username' })
  username: string;

  @Column()
  @ApiProperty({ example: 'hashedPassword', description: 'Hashed password' })
  password: string;

  @Column({ default: false })
  isAdmin: boolean;
}