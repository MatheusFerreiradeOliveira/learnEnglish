import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Usuario } from '../../usuario/usuario.schema';
import { Postagem } from '../../postagem/schemas/postagem.schema';

@Schema({ collection: 'comentario' })
export class Comentario extends Document {
  @Prop()
  descricao: string;
  @Prop()
  likes: number;
  @Prop()
  responsavel: {
    type: mongoose.Schema.Types.ObjectId;
    ref: Usuario;
  };
  @Prop()
  postagem: {
    type: mongoose.Schema.Types.ObjectId;
    ref: Postagem;
  };
}

export const ComentarioSchema = SchemaFactory.createForClass(Comentario);
