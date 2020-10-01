import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'tipo-perfil' })
export class TipoPerfil extends Document {
  @Prop()
  descricao: string;
  @Prop()
  permissoes: string[];
}

export const TipoPerfilSchema = SchemaFactory.createForClass(TipoPerfil);
