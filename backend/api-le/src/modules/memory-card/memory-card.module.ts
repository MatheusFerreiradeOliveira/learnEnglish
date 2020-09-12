import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemoryCard, MemoryCardSchema } from './memoryCard.schema';
import { MemoryCardController } from './memory-card.controller';
import { MemoryCardService } from './memory-card.service';

@Module({
  imports: [MongooseModule.forFeature([{name: MemoryCard.name, schema: MemoryCardSchema}])],
  providers: [MemoryCardService],
  exports: [MemoryCardService],
  controllers: [MemoryCardController]
})
export class MemoryCardModule {}
