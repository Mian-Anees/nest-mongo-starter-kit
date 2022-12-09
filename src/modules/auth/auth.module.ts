import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersRepositoryService } from 'src/repositories/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../users/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: userSchema }])],
  controllers: [AuthController],
  providers: [AuthService, UsersRepositoryService]
})
export class AuthModule { }
