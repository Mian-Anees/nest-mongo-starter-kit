import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { Users } from "src/modules/users/entities/user.entity";

@Injectable()
export class UsersRepositoryService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<Users>
  ) { }

  async createUser(createUserDto: CreateUserDto) {
    try {
      return this.userModel.create(createUserDto);
    } catch (error) {
      Logger.error(error.message)
      throw error
    }
  }

  async findAllUsers() {
    try {
      return this.userModel.find();
    } catch (error) {
      throw new Error(error.message)
    }
  }
  async findByEmail(email: string) {
    try {
      return this.userModel.findOne({ email: email });
    } catch (error) {
      throw new Error(error.message)
    }
  }

}