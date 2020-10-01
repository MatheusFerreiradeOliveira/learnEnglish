import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MemoryCard } from 'src/modules/memory-card/schemas/memoryCard.schema';

@Schema({ collection: 'frase' })
export class Frase extends Document {
  @Prop()
  descricao: string;
  @Prop()
  memoryCard: {
    type: mongoose.Schema.Types.ObjectId;
    ref: MemoryCard;
  };
}

export const FraseSchema = SchemaFactory.createForClass(Frase);
