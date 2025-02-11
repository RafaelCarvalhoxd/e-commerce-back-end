import { Global, Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtSignAdapter } from 'src/resources/shared/jwt/adapter/jwt-sign.adapter';
import { JwtVerifyAdapter } from 'src/resources/shared/jwt/adapter/jwt.verify.adapter';
import { JwtSignContract } from 'src/resources/shared/jwt/contract/jwt-sign.contract';
import { JwtVerifyContract } from 'src/resources/shared/jwt/contract/jwt.verify.contract';

const resources: Provider[] = [
  {
    provide: JwtSignContract,
    useClass: JwtSignAdapter,
  },
  {
    provide: JwtVerifyContract,
    useClass: JwtVerifyAdapter,
  },
];

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('jwt.secret'),
        signOptions: {
          expiresIn: configService.get('jwt.expiresIn'),
        },
      }),
      inject: [ConfigService],
      global: true,
    }),
  ],
  providers: [...resources],
  exports: [...resources],
})
export class JwtServiceModule {}
