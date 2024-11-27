import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { dbconfig } from './db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    ...dbconfig,
    type: 'postgres',
}),
    AuthModule,
    UsersModule
  ]
})
export class AppModule { }
