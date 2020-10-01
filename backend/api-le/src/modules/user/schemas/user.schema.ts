import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'user' })
export class User extends Document {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  typeUser: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
