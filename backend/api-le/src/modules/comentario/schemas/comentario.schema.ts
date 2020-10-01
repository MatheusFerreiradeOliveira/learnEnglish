import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Postagem } from '../../postagem/schemas/postagem.schema';
import { User } from 'src/modules/user/schemas/user.schema';

@Schema({ collection: 'comentario' })
export class Comentario extends Document {
  @Prop()
  descricao: string;
  @Prop()
  likes: number;
  @Prop()
  responsavel: {
    type: mongoose.Schema.Types.ObjectId;
    ref: User;
  };
  @Prop()
  postagem: {
    type: mongoose.Schema.Types.ObjectId;
    ref: Postagem;
  };
}

export const ComentarioSchema = SchemaFactory.createForClass(Comentario);
