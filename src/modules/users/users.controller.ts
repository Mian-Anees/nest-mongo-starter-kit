import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseCode, ResponseMessage } from 'src/utils/enums/enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.usersService.create(createUserDto)
      return {
        status: ResponseCode.CREATED_SUCCESSFULLY,
        message: ResponseMessage.CREATED_SUCCESSFULLY
      }
    } catch (error) {
      return {
        status: ResponseCode.BAD_REQUEST,
        message: ResponseMessage.BAD_REQUEST
      }
    }
  }


  @Get()
  async findAll() {
    try {

      const result = await this.usersService.findAll()

      if (!result.length) {
        return {
          status: ResponseCode.CONTENT_NOT_FOUND,
          message: ResponseMessage.CONTENT_NOT_FOUND
        }
      }

      return {
        status: ResponseCode.SUCCESS,
        data: result,
        message: ResponseMessage.SUCCESS
      }

    } catch (error) {
      return {
        status: ResponseCode.BAD_REQUEST,
        message: ResponseMessage.BAD_REQUEST
      }
    }
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
