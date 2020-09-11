import mongoose from 'mongoose'
import {MongooseModule, Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({collection: 'usuario'})
export class Usuario extends Document {
    @Prop()
    descricao: string
    @Prop()
    responsavel: {
        type: mongoose.Schema.Types.ObjectId
        ref: Usuario
    }
} 

export const UsuarioSchema = SchemaFactory.createForClass(Usuario)