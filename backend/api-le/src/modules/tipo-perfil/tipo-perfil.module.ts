import { Module } from '@nestjs/common';
import { TipoPerfilService } from './tipo-perfil.service';
import { TipoPerfilController } from './tipo-perfil.controller';

@Module({
  providers: [TipoPerfilService],
  controllers: [TipoPerfilController]
})
export class TipoPerfilModule {}
