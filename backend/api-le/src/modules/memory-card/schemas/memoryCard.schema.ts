import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Phrase } from 'src/modules/frase/schemas/phrase.schema';
import { Meaning } from 'src/modules/significado/schemas/meaning.schema';

@Schema({ collection: 'memoryCard' })
export class MemoryCard extends Document {
  @Prop()
  word: string;
  @Prop()
  meanings: [{
    type: mongoose.Schema.Types.ObjectId;
    ref: Meaning
  }];
  @Prop()
  phrases: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: Phrase;
    },
  ];
}

export const MemoryCardSchema = SchemaFactory.createForClass(MemoryCard);
