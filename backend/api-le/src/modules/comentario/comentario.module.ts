import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comentario, ComentarioSchema } from './comentario.schema';
import { ComentarioController } from './comentario.controller';
import { ComentarioService } from './comentario.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Comentario.name, schema: ComentarioSchema}])],
  providers: [ComentarioService],
  exports: [ComentarioService],
  controllers: [ComentarioController]
})
export class ComentarioModule {}
