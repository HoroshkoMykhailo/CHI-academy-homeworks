import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DemoProtectedRouteModule } from './demo-protected-route/demo-protected-route.module';
import { dbconfig } from './db.config';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...dbconfig,
    type: 'postgres',
}),
    AuthModule,
    UsersModule,
    DemoProtectedRouteModule
  ]
})
export class AppModule { }
