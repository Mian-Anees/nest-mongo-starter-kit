import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/modules/auth/auth.service';
import { decodeToken, verifyToken } from '../jwt/token';

@Injectable()
export class AuthGuard {
    constructor(
        private readonly authService: AuthService
    ) { }
    async canActivate(
        context: ExecutionContext,
    ) {
        const request = context.switchToHttp().getRequest();
        const isValidToken = verifyToken(request.headers.authorization)
        if (isValidToken) {
            const user = decodeToken(request.headers.authorization);
            const result = await this.authService.validateUser(user["email"], user["password"]);
            return result;
        }
        else {
            return false
        }
    }

}