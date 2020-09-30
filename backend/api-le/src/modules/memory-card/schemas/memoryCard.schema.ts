import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Usuario } from '../../usuario/usuario.schema';
import { Postagem } from '../../postagem/schemas/postagem.schema';
import { Frase } from 'src/modules/frase/schemas/frase.schema';

@Schema({ collection: 'memoryCard' })
export class MemoryCard extends Document {
  @Prop()
  palavra: string;
  @Prop()
  significado: string[];
  @Prop()
  frases: [{
    type: mongoose.Schema.Types.ObjectId;
    ref: Frase
  }]
}

export const MemoryCardSchema = SchemaFactory.createForClass(MemoryCard);
