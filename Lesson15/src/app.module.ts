import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { dbconfig } from './db.config';
import { ExhibitsModule } from './exhibits/exhibits.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    ...dbconfig,
    type: 'postgres',
}),
    AuthModule,
    UsersModule,
    ExhibitsModule,
    CommentsModule
  ]
})
export class AppModule { }
