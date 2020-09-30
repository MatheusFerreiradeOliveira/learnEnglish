import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TipoPerfil } from 'src/modules/tipo-perfil/tipoPerfil.schema';

@Schema({ collection: 'permissao' })
export class Permissao extends Document {
  @Prop()
  descricao: string;
  @Prop()
  tipoPerfil: {
    type: mongoose.Schema.Types.ObjectId;
    ref: TipoPerfil;
  } 
}

export const PermissaoSchema = SchemaFactory.createForClass(Permissao);
