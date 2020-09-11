import { Injectable } from '@nestjs/common';
import { Postagem } from './postagem.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

@Injectable()
export class PostagemService {
    
    constructor(@InjectModel(Postagem.name) private postagemModel:Model<Postagem>) {}
    
    create(dto: Postagem) {
        const newComent = new this.postagemModel(dto);
        return newComent.save();
    }

    getAll() {
        return this.postagemModel.find()
    }

    getById(id: string) {
        return this.postagemModel.findById(id)
    }

    delete(dto: Postagem) {
        return this.postagemModel.deleteOne(dto)
    }
}   
