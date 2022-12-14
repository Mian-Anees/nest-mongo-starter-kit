import { HttpException, Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersRepositoryService } from 'src/repositories/user.repository';
import { generateToken } from 'src/utils/jwt/token';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginAuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { ErrorMessage, ResponseCode, ResponseMessage } from 'src/utils/enums/enum';

@Injectable()
export class AuthService {

  constructor(
    private readonly userRepo: UsersRepositoryService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepo.findByEmail(email)
    if (!user) return null;
    const passwordValid = password === user.password;
    if (!user) {
      throw new NotAcceptableException(ErrorMessage.USER_NOT_FOUND);
    }
    if (user && passwordValid) {
      return true;
    }
    return null;
  }


  async signup(signupAuthDto: CreateUserDto) {
    try {
      const user = await this.userRepo.findByEmail(signupAuthDto.email)
      if (user) {
        throw new HttpException(ErrorMessage.USER_EXISTS, ResponseCode.BAD_REQUEST)
      }
      return await this.userRepo.createUser(signupAuthDto)
    } catch (error) {
      throw new HttpException(error.message, ResponseCode.BAD_REQUEST)
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    try {
      const user = await this.userRepo.findByEmail(loginAuthDto.email)
      let token = '';
      if (user) {
        const isSame = await bcrypt.compare(loginAuthDto.password, user.password);
        if (isSame) {
          token = generateToken(user)
          return token
        }
        else {
          throw new HttpException(ErrorMessage.INVALID_CREDIENTIALS, ResponseCode.BAD_REQUEST)
        }
      }
      else {
        throw new HttpException(ErrorMessage.EMAIL_NOT_FOUND, ResponseCode.BAD_REQUEST)
      }
    } catch (error) {
      throw new HttpException(error.message, ResponseCode.BAD_REQUEST)
    }

  }

  logout(id: string) {
    return `This action removes a #${id} auth`;
  }
}
