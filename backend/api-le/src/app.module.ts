import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComentarioModule } from './modules/comentario/comentario.module';
import { PostagemModule } from './modules/postagem/postagem.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { MemoryCardModule } from './modules/memory-card/memory-card.module';
import { TipoPerfilModule } from './modules/tipo-perfil/tipo-perfil.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { PermissaoModule } from './modules/permissao/permissao.module';
import { SignificadoModule } from './modules/significado/significado.module';
import { FraseModule } from './modules/frase/frase.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://LearningEnglishApiDBUser:l34rn1ng3ngl1sh@learningenglishapi.7mzw1.mongodb.net/LearningEnglishApiDB?retryWrites=true&w=majority',
    ),
    ComentarioModule,
    PostagemModule,
    UsuarioModule,
    MemoryCardModule,
    TipoPerfilModule,
    UserModule,
    PermissaoModule,
    SignificadoModule,
    FraseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
