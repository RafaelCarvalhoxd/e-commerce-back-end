import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ToArrayNumberPipe implements PipeTransform {
  transform(value?: string) {
    return value?.split(',').map((v) => parseInt(v.trim()));
  }
  //
}
