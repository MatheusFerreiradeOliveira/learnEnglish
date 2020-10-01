import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MemoryCard } from 'src/modules/memory-card/schemas/memoryCard.schema';

@Schema({ collection: 'significado' })
export class Significado extends Document {
  @Prop()
  significado: string;
  @Prop()
  postagem: {
    type: mongoose.Schema.Types.ObjectId;
    ref: MemoryCard;
  };
}

export const SignificadoSchema = SchemaFactory.createForClass(Significado);
