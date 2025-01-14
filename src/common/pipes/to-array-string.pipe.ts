import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ToArrayStringPipe implements PipeTransform {
  transform(value?: string) {
    return value?.split(',').map((v) => v.trim());
  }
  //
}
