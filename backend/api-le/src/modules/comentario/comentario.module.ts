import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comentario, ComentarioSchema } from './schemas/comentario.schema';
import { ComentarioController } from './comentario.controller';
import { ComentarioService } from './comentario.service';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { FindByIdUseCase } from './usecases/find-by-id/find-by-id.usecase';
import { ComentarioMongoRepository } from './repository/implementations/comentario-mongo.repository';

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
    { provide: 'IComentarioRepository', useClass: ComentarioMongoRepository },
  ],
  exports: [ComentarioService],
  controllers: [ComentarioController],
})
export class ComentarioModule {}
