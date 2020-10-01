import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Frase, FraseSchema } from './schemas/frase.schema';
import { FraseController } from './frase.controller';
import { FraseMongoRepository } from './repository/implementations/frase-mongo.repository';

import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { FindByIdUseCase } from './usecases/find-by-id/find-by-id.usecase';
import { CreateUseCase } from './usecases/create/create.usecase';
import { CreateService } from './usecases/create/create.service';
import { UpdateUseCase } from './usecases/update/update.usecase';
import { UpdateService } from './usecases/update/update.service';
import { FindAllService } from './usecases/find-all/find-all.service';
import { FindAllUseCase } from './usecases/find-all/find-all.usecase';
import { DeleteService } from './usecases/delete/delete.service';
import { DeleteUseCase } from './usecases/delete/delete.usecase';
import { FraseService } from './frase.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Frase.name, schema: FraseSchema },
    ]),
  ],
  providers: [
    FraseService,
    FindByIdService,
    FindByIdUseCase,
    CreateService,
    CreateUseCase,
    UpdateUseCase,
    UpdateService,
    FindAllService,
    FindAllUseCase,
    DeleteService,
    DeleteUseCase,
    { provide: 'IFraseRepository', useClass: FraseMongoRepository },
    FraseService,
  ],
  exports: [FraseService],
  controllers: [FraseController],
})
export class FraseModule {}
