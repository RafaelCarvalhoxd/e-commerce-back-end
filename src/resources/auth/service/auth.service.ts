import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUsecase } from 'src/resources/auth/usecase/auth.usecase';
import { BcryptCompareContract } from 'src/resources/shared/bcrypt/contract/bcrypt-compare.contract';
import { JwtSignContract } from 'src/resources/shared/jwt/contract/jwt-sign.contract';
import { FindUserUseCase } from 'src/resources/user/usecase/find-user.usecase';

@Injectable()
export class AuthService implements AuthUsecase {
  constructor(
    private readonly findUserUsecase: FindUserUseCase,
    private readonly bcrypt: BcryptCompareContract,
    private readonly jwt: JwtSignContract,
  ) {}

  async execute(input: {
    email: string;
    password: string;
  }): Promise<{ token: string }> {
    const user = await this.findUserUsecase.findUser({ email: input.email });
    const isValid = await this.bcrypt.compare({
      hashedText: user.password,
      plainText: input.password,
    });
    if (!isValid) throw new UnauthorizedException('Invalid password');
    const token = await this.jwt.sign({
      id: user.id,
      email: user.email,
      role: user.roles.map((role) => role.id),
    });
    return { token };
  }
}
