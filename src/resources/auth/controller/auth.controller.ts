import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from 'src/resources/auth/dto/auth.dto';
import { AuthUsecase } from 'src/resources/auth/usecase/auth.usecase';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly usecase: AuthUsecase) {}

  @Post()
  async handle(@Body() dto: AuthDto): Promise<{ token: string }> {
    return this.usecase.execute(dto);
  }
}
