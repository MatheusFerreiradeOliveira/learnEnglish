import mongoose from 'mongoose';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TipoPerfil } from '../tipo-perfil/tipoPerfil.schema';

@Schema({ collection: 'usuario' })
export class Usuario extends Document {
  @Prop()
  descricao: string;
  @Prop()
  nome: string;
  @Prop()
  email: string;
  @Prop()
  senha: string;
  @Prop()
  postagem: {
    type: mongoose.Schema.Types.ObjectId;
    ref: TipoPerfil;
  };
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
