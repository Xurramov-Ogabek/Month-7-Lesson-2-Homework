import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class YearRangePipe implements PipeTransform {
  transform(value: any) {
    const year = parseInt(value, 10);
    if (isNaN(year) || year < 1900 || year > 2025) {
      throw new BadRequestException('Year must be between 1900 and 2025');
    }
    return year;
  }
}