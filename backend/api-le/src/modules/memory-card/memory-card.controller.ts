import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { throws } from 'assert';
import { MemoryCard } from './memoryCard.schema';
import { MemoryCardService } from './memory-card.service';

@Controller('memoryCards')
export class MemoryCardController {
  constructor(private memoryCardService: MemoryCardService) {}

  @Post()
  create(@Body() dto: MemoryCard) {
    return this.memoryCardService.create(dto);
  }

  @Get()
  getAll() {
    return this.memoryCardService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.memoryCardService.getById(id);
  }
}
