import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ collection: 'users' })
export class User extends Document {
  @Prop()
  name: string;
  @Prop()
  avatar: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  type_profile: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
