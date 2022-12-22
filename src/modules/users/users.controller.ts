import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseCode, ResponseMessage, Role } from 'src/utils/enums/enum';
import { AuthGuard } from 'src/utils/config/auth.guard';
import { Roles } from 'src/utils/config/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(AuthGuard)
  @Roles(Role.MASTER_ADMIN)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.usersService.create(createUserDto)
      return {
        status: ResponseCode.CREATED_SUCCESSFULLY,
        message: ResponseMessage.CREATED_SUCCESSFULLY
      }
    } catch (error) {
      throw new HttpException(error.message, ResponseCode.BAD_REQUEST)
    }
  }

  @UseGuards(AuthGuard)
  @Roles(Role.MASTER_ADMIN)
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
      throw new HttpException(error.message, ResponseCode.BAD_REQUEST)
    }
  }

  @UseGuards(AuthGuard)
  @Roles(Role.MASTER_ADMIN, Role.GENERAL_MANAGER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Roles(Role.COURIER_CLERK, Role.GENERAL_MANAGER)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
