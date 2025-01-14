import { Injectable } from '@nestjs/common';
import { BcryptHashContract } from 'src/resources/bcrypt/contract/bcrypt.hash.contract';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptHashAdapter implements BcryptHashContract {
  async hash(input: { plainText: string; salt: number }): Promise<string> {
    return bcrypt.hash(input.plainText, input.salt);
  }
}
