import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComentarioModule } from './modules/comentario/comentario.module';
import { PostagemModule } from './modules/postagem/postagem.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { MemoryCardController } from './modules/memory-card/memory-card.controller';
import { MemoryCardService } from './modules/memory-card/memory-card.service';
import { MemoryCardModule } from './modules/memory-card/memory-card.module';
import { TipoPerfilModule } from './modules/tipo-perfil/tipo-perfil.module';

@Module({
  imports: [ComentarioModule, PostagemModule, UsuarioModule, MemoryCardModule, TipoPerfilModule],
  controllers: [AppController, MemoryCardController],
  providers: [AppService, MemoryCardService],
})
export class AppModule {}
