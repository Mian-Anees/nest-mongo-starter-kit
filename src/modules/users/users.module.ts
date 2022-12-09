import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepositoryService } from 'src/repositories/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: userSchema }])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepositoryService],
  exports: [UsersService, UsersRepositoryService]
})
export class UsersModule { }
