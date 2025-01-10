import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PaginationLimitPipe implements PipeTransform {
  transform(value?: string) {
    return value ? parseInt(value) : 10;
  }
}
