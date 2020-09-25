import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemoryCard, MemoryCardSchema } from './schemas/memoryCard.schema';
import { MemoryCardController } from './memory-card.controller';
import { MemoryCardService } from './memory-card.service';
import { CreateService } from './usecases/create/create.service';
import { CreateUseCase } from './usecases/create/create.usecase';
import { FindAllService } from './usecases/find-all/find-all.service';
import { FindAllUseCase } from './usecases/find-all/find-all.usecase';
import { DeleteService } from './usecases/delete/delete.service';
import { DeleteUseCase } from './usecases/delete/delete.usecase';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { FindByIdUseCase } from './usecases/find-by-id/find-by-id.usecase';
import { MemoryCardMongoRepository } from './repository/implementations/memory-card-mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: MemoryCard.name, schema: MemoryCardSchema}
    ])
  ],
  providers: [
    MemoryCardService,
    FindByIdService,
    FindByIdUseCase,
    CreateService,
    CreateUseCase,
    FindAllService,
    FindAllUseCase,
    DeleteService,
    DeleteUseCase,
    { provide: 'IMemoryCardRepository', useClass: MemoryCardMongoRepository },
  ],
  exports: [MemoryCardService],
  controllers: [MemoryCardController]
})
export class MemoryCardModule {}
