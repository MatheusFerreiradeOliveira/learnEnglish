import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComentarioModule } from './modules/comentario/comentario.module';
import { PostagemModule } from './modules/postagem/postagem.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { MemoryCardModule } from './modules/memory-card/memory-card.module';
import { TipoPerfilModule } from './modules/tipo-perfil/tipo-perfil.module';

//Cria o link do BD e bota dentro dos imports, ex: 
//imports: [MongooseModule.forRoot('mongodb+srv://rn_admin:45Y5HJzGLTBGtKB@cluster0.jefip.mongodb.net/dbrn?retryWrites=true&w=majority'), EstagioModule, ProcessoModule],
@Module({

  imports: [ComentarioModule, PostagemModule, UsuarioModule, MemoryCardModule, TipoPerfilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
