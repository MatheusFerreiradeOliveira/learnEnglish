import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comentario } from '../../comentario/schemas/comentario.schema';
import { User } from 'src/modules/user/schemas/user.schema';

@Schema({ collection: 'comentario' })
export class Postagem extends Document {
  @Prop()
  descricao: string;
  @Prop()
  titulo: string;
  @Prop()
  responsavel: {
    type: mongoose.Schema.Types.ObjectId;
    ref: User;
  };
  @Prop()
  comentarios: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: Comentario;
    },
  ];
}

export const PostagemSchema = SchemaFactory.createForClass(Postagem);
