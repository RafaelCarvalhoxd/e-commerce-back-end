import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { BcryptCompareContract } from 'src/resources/shared/bcrypt/contract/bcrypt-compare.contract';

@Injectable()
export class BcryptCompareAdapter implements BcryptCompareContract {
  async compare(input: {
    plainText: string;
    hashedText: string;
  }): Promise<boolean> {
    return bcrypt.compare(input.plainText, input.hashedText);
  }
}
