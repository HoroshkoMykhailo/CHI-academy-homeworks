import { Module } from '@nestjs/common';
import { ExhibitsService } from './exhibits.service';
import { ExhibitsController } from './exhibits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exhibit } from './exhibit.entity';
import { User } from '../users/user.entity';
import { Comment } from '../comments/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exhibit, User, Comment])],
  controllers: [ExhibitsController],
  exports: [ExhibitsService],
  providers: [ExhibitsService]
})
export class ExhibitsModule {}
