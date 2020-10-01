import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissaoController } from './permissao.controller';
import { PermissaoService } from './permissao.service';
import { PermissaoMongoRepository } from './repository/implementations/permissao-mongo.repository';
import { Permissao, PermissaoSchema } from './schemas/permissao.schema';
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

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Permissao.name, schema: PermissaoSchema },
    ]),
  ],
  providers: [
    PermissaoService,
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
    { provide: 'IPermissaoRepository', useClass: PermissaoMongoRepository },
    ],
    exports: [PermissaoService],
    controllers: [PermissaoController],
})
export class PermissaoModule {}