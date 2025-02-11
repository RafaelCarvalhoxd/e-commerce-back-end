import { Module, Provider } from '@nestjs/common';
import { BcryptCompareAdapter } from 'src/resources/shared/bcrypt/adapter/bcrypt-compare.adapter';
import { BcryptHashAdapter } from 'src/resources/shared/bcrypt/adapter/bcrypt-hash.adapter';
import { BcryptCompareContract } from 'src/resources/shared/bcrypt/contract/bcrypt-compare.contract';
import { BcryptHashContract } from 'src/resources/shared/bcrypt/contract/bcrypt.hash.contract';

const resources: Provider[] = [
  {
    provide: BcryptCompareContract,
    useClass: BcryptCompareAdapter,
  },
  {
    provide: BcryptHashContract,
    useClass: BcryptHashAdapter,
  },
];

@Module({
  providers: [...resources],
  exports: [...resources],
})
export class BcryptModule {}
