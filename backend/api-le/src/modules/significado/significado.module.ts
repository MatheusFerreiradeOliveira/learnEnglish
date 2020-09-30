import { Module } from '@nestjs/common';
import { SignificadoService } from './significado.service';
import { SignificadoController } from './significado.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Significado, SignificadoSchema } from './schemas/significado.schema';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { FindByIdUseCase } from './usecases/find-by-id/find-by-id.usecase';
import { CreateService } from './usecases/create/create.service';
import { CreateUseCase } from './usecases/create/create.usecase';
import { UpdateUseCase } from './usecases/update/update.usecase';
import { UpdateService } from './usecases/update/update.service';
import { FindAllService } from './usecases/find-all/find-all.service';
import { FindAllUseCase } from './usecases/find-all/find-all.usecase';
import { DeleteService } from './usecases/delete/delete.service';
import { DeleteUseCase } from './usecases/delete/delete.usecase';
import { SignificadoMongoRepository } from './repository/implementations/significado-mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Significado.name, schema: SignificadoSchema },
    ]),
  ],
  providers: [
    SignificadoService,
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
    { provide: 'ISignificadoRepository', useClass: SignificadoMongoRepository },
  ],
  exports: [SignificadoService],
  controllers: [SignificadoController]
})
export class SignificadoModule {}