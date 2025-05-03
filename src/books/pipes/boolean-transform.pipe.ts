import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class BooleanTransformPipe implements PipeTransform {
  transform(value: any) {
    if (value === undefined || value === null) return false;
    if (typeof value === 'boolean') return value;
    if (value === 'true') return true;
    if (value === 'false') return false;
    throw new BadRequestException('isPublished must be a boolean');
  }
}