import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { JwtVerifyContract } from 'src/resources/jwt/contract/jwt.verify.contract';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtVerifyContract,
    private readonly configService: ConfigService,
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
