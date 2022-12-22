import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/modules/auth/auth.service';
import { decodeToken, verifyToken } from '../jwt/token';

@Injectable()
export class AuthGuard {
    async canActivate(
        context: ExecutionContext,
    ) {
        const request = context.switchToHttp().getRequest();
        request
        return verifyToken(request.headers.authorization)
    }

}