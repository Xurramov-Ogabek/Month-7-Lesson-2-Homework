import { Controller, Get, Post, Param, Body, Put, Delete, ParseIntPipe, UsePipes } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { YearRangePipe } from './pipes/year-range.pipe';
import { BooleanTransformPipe } from './pipes/boolean-transform.pipe';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(
    @Body('year', YearRangePipe) year: number,
    @Body('isPublished', BooleanTransformPipe) isPublished: boolean,
    @Body() body: CreateBookDto,
  ) {
    return this.booksService.create({ ...body, year, isPublished });
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('year', YearRangePipe) year: number,
    @Body('isPublished', BooleanTransformPipe) isPublished: boolean,
    @Body() dto: UpdateBookDto,
  ) {
    return this.booksService.update(id, { ...dto, year, isPublished });
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.remove(id);
  }
}