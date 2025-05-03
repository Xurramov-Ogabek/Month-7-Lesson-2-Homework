import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  create(dto: CreateBookDto): Book {
    const newBook: Book = {
      id: this.idCounter++,
      ...dto,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    const book = this.books.find((b) => b.id === id);
    if (!book) throw new NotFoundException(`Book with id ${id} not found`);
    return book;
  }

  update(id: number, dto: UpdateBookDto): Book {
    const book = this.findOne(id);
    Object.assign(book, dto);
    return book;
  }

  remove(id: number): void {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) throw new NotFoundException(`Book with id ${id} not found`);
    this.books.splice(index, 1);
  }
}