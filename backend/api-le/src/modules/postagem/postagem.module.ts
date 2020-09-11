import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Postagem, PostagemSchema } from './postagem.schema';
import { PostagemController } from './postagem.controller';
import { PostagemService } from './postagem.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Postagem.name, schema: PostagemSchema}])],
  providers: [PostagemService],
  exports: [PostagemService],
  controllers: [PostagemController]
})
export class PostagemModule {}
