import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { Injectable, Logger } from '@nestjs/common';
import { UsersRepositoryService } from 'src/repositories/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    private readonly userRepositoryService: UsersRepositoryService) {
  }
  create(createUserDto: CreateUserDto) {
    try {
      return this.userRepositoryService.createUser(createUserDto);
    } catch (error) {
      Logger.error(error.message)
      throw error
    }
  }

  async findAll() {
    try {
      await this.redis.set('key', 'Redis data!');
      const redisData = await this.redis.get("key");
      return redisData;
      // return this.userRepositoryService.findAllUsers();
    } catch (error) {
      Logger.error(error.message)
      throw error
    }

  }

  findOne(id: number) {
    return;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
