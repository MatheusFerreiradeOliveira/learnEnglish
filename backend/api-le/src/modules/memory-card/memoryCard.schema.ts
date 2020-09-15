import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Usuario } from '../usuario/usuario.schema';
import { Postagem } from '../postagem/postagem.schema';

@Schema({ collection: 'memoryCard' })
export class MemoryCard extends Document {
  @Prop()
  palavra: string;
  @Prop()
  significado: string[];
  @Prop()
  frases: string[];
}

export const MemoryCardSchema = SchemaFactory.createForClass(MemoryCard);
