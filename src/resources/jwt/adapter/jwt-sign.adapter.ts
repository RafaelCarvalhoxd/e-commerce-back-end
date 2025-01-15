import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtSignContract } from 'src/resources/jwt/contract/jwt-sign.contract';

@Injectable()
export class JwtSignAdapter implements JwtSignContract {
  constructor(private readonly jwtService: JwtService) {}

  async sign(payload: object): Promise<{ token: string }> {
    const token = this.jwtService.sign(payload);
    return { token };
  }
}