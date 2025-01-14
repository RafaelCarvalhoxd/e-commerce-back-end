import { Module, Provider } from '@nestjs/common';
import { BcryptCompareAdapter } from 'src/resources/bcrypt/adapter/bcrypt-compare.adapter';
import { BcryptHashAdapter } from 'src/resources/bcrypt/adapter/bcrypt-hash.adapter';
import { BcryptCompareContract } from 'src/resources/bcrypt/contract/bcrypt-compare.contract';
import { BcryptHashContract } from 'src/resources/bcrypt/contract/bcrypt.hash.contract';

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
