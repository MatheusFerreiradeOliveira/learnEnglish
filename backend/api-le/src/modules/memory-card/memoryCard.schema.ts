import mongoose, { Document } from 'mongoose'
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Usuario } from '../usuario/usuario.schema';
import { Postagem } from '../postagem/postagem.schema';

@Schema({collection: 'memoryCard'})
export class MemoryCard extends Document {
    @Prop()
    descricao: string
    @Prop()
    responsavel: {
        type: mongoose.Schema.Types.ObjectId
        ref: Usuario
    }
    @Prop()
    postagem: {
        type: mongoose.Schema.Types.ObjectId
        ref: Postagem
    }
} 

export const MemoryCardSchema = SchemaFactory.createForClass(MemoryCard)