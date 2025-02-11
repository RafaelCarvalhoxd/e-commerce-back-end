import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { JwtVerifyContract } from 'src/resources/shared/jwt/contract/jwt.verify.contract';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtVerifyContract,
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokemFromHeader(request);
    if (!token) throw new UnauthorizedException('Token not found');
    try {
      const payload = await this.jwt.verify(
        token,
        this.configService.get('jwt.secret'),
      );
      request['user'] = payload;
      if (!payload) throw new UnauthorizedException('Invalid token');

      const userRoles: number[] = payload['role'] || [];
      if (userRoles.includes(1)) {
        return true;
      }

      const requiredRoles = this.reflector.get<number[]>(
        'roles',
        context.getHandler(),
      );
      if (requiredRoles) {
        const hasPermission = requiredRoles.some((role) =>
          userRoles.includes(role),
        );
        if (!hasPermission)
          throw new UnauthorizedException('Unauthorized: Insufficient role');
      }
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token', error.message);
    }
  }

  private extractTokemFromHeader(request: Request): string {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
