import { Injectable } from '@nestjs/common';
import { Comentario } from './comentario.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

@Injectable()
export class ComentarioService {
    
    constructor(@InjectModel(Comentario.name) private comentarioModel:Model<Comentario>) {}
    
    create(dto: Comentario) {
        const newComent = new this.comentarioModel(dto);
        return newComent.save();
    }

    getAll() {
        return this.comentarioModel.find()
    }

    getById(id: string) {
        return this.comentarioModel.findById(id)
    }

    delete(dto: Comentario) {
        return this.comentarioModel.deleteOne(dto)
    }
}   
