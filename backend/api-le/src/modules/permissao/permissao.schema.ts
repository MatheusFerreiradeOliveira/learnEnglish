import mongoose from 'mongoose';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'permissao' })
export class Permissao extends Document {
  @Prop()
  permissao: string;
}

export const PermissaoSchema = SchemaFactory.createForClass(Permissao);
