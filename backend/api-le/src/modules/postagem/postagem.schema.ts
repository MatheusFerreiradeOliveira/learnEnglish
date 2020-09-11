import mongoose, { Document } from 'mongoose'
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Usuario } from '../usuario/usuario.schema';
import { Comentario } from '../comentario/comentario.schema';

@Schema({collection: 'comentario'})
export class Postagem extends Document {
    
    @Prop()
    descricao: string
    @Prop()
    titulo: string
    @Prop()
    responsavel: {
        type: mongoose.Schema.Types.ObjectId
        ref: Usuario
    }
    @Prop()
    comentarios: [{
        type: mongoose.Schema.Types.ObjectId
        ref: Comentario
    }]
} 

export const PostagemSchema = SchemaFactory.createForClass(Postagem)