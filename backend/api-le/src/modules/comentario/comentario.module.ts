import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comentario, ComentarioSchema } from './schemas/comentario.schema';
import { ComentarioController } from './comentario.controller';
import { ComentarioMongoRepository } from './repository/implementations/comentario-mongo.repository';
import { ComentarioService } from './comentario.service';

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

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comentario.name, schema: ComentarioSchema },
    ]),
  ],
  providers: [
    ComentarioService,
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
    { provide: 'IComentarioRepository', useClass: ComentarioMongoRepository },
  ],
  controllers: [ComentarioController],
  exports: [ComentarioService],
})
export class ComentarioModule {}
