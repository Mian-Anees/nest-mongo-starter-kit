import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersRepositoryService } from 'src/repositories/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../users/entities/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/utils/config/roles.guard';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: userSchema }])],
  controllers: [AuthController],
  providers: [AuthService, UsersRepositoryService, {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },]
})
export class AuthModule { }
