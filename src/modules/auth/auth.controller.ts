import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/utils/config/auth.guard';
import { Roles } from 'src/utils/config/roles.decorator';
import { RolesGuard } from 'src/utils/config/roles.guard';
import { ResponseCode, ResponseMessage, Role } from 'src/utils/enums/enum';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginAuthDto, SignupAuthDto, UpdateAuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Post('signup')
  async signup(@Body() createAuthDto: CreateUserDto) {
    try {
      await this.authService.signup(createAuthDto);
      return {
        status: ResponseCode.CREATED_SUCCESSFULLY,
        message: ResponseMessage.CREATED_SUCCESSFULLY
      }
    } catch (error) {
      throw new HttpException(error.message, ResponseCode.BAD_REQUEST)
    }
  }


  @Get('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    try {
      const result = await this.authService.login(loginAuthDto);
      return {
        message: ResponseMessage.SUCCESS,
        data: { token: result },
        status: ResponseCode.SUCCESS
      }
    } catch (error) {
      throw new HttpException(error.message, ResponseCode.BAD_REQUEST)
    }
  }

  @UseGuards(AuthGuard)
  @Roles(Role.GENERAL_MANAGER)
  @Delete('logout/:id')
  remove(@Param('id') id: string) {
    return this.authService.logout(id);
  }
}
