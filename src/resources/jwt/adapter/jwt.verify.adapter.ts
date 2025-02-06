import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtVerifyContract } from 'src/resources/jwt/contract/jwt.verify.contract';

@Injectable()
export class JwtVerifyAdapter implements JwtVerifyContract {
  constructor(private readonly jwtService: JwtService) {}

  async verify(token: string, secret: string): Promise<unknown> {
    const payload = this.jwtService.verify(token, { secret });
    return payload;
  }
}
