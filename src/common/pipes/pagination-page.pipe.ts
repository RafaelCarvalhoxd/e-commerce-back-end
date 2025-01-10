import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PaginationPagePipe implements PipeTransform {
  transform(value?: string) {
    return value ? parseInt(value) : 1;
  }
}
