import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Postagem, PostagemSchema } from './schemas/postagem.schema';
import { PostagemController } from './postagem.controller';
import { PostagemService } from './postagem.service';
import { CreateService } from './usecases/create/create.service';
import { CreateUseCase } from './usecases/create/create.usecase';
import { DeleteService } from './usecases/delete/delete.service';
import { DeleteUseCase } from './usecases/delete/delete.usecase';
import { FindAllService } from './usecases/find-all/find-all.service';
import { FindAllUseCase } from './usecases/find-all/find-all.usecase';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { FindByIdUseCase } from './usecases/find-by-id/find-by-id.usecase';
import { UpdateService } from './usecases/update/update.service';
import { UpdateUseCase } from './usecases/update/update.usecase';
import { PostagemMongoRepository } from './repository/implementatios/postagem-mongo.repository';


@Module({
  imports: [MongooseModule.forFeature([{name: Postagem.name, schema: PostagemSchema}])],
  providers: [
    PostagemService,
    CreateService,
    CreateUseCase,
    DeleteService,
    DeleteUseCase,
    FindAllService,
    FindAllUseCase,
    FindByIdService,
    FindByIdUseCase,
    UpdateService,
    UpdateUseCase,
    { provide: 'IPostagemRepository', useClass: PostagemMongoRepository },
  ],
  exports: [PostagemService],
  controllers: [PostagemController]
})
export class PostagemModule {}
