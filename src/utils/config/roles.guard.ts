import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { decodeToken, verifyToken } from '../jwt/token';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const req = context.switchToHttp().getRequest();

        if (req.user) {
            // const user = decodeToken(req.headers.authorization)
            return roles.some((role) => req.user["roles"]?.includes(role));
        }
    }

}