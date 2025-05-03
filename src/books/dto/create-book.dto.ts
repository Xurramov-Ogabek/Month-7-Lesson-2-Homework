import { IsString, MinLength, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  year: number;

  @IsOptional()
  isPublished?: boolean;
}