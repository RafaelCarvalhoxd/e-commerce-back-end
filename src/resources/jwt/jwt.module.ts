import { Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtSignAdapter } from 'src/resources/jwt/adapter/jwt-sign.adapter';
import { JwtSignContract } from 'src/resources/jwt/contract/jwt-sign.contract';

const resources: Provider[] = [
  {
    provide: JwtSignContract,
    useClass: JwtSignAdapter,
  },
];

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
