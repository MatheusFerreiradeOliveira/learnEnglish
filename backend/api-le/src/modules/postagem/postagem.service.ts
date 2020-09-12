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

    update(id: string, dto: Postagem) {
        return this.postagemModel.updateOne(
            { _id: id }, //Isso aqui é o filtro, o primeiro q der match com esses parametros que é mudado
            {
                $set: {descricao: dto.descricao, titulo: dto.titulo} // aqui a gente escolhe os campos para mudar 
                //ex: aqui to mudando a descricao e o titulo
            }
        )
    }

    delete(id: string) {
        return this.postagemModel.deleteOne(
            {_id: id} //deleta a primeira ocorrencia que tiver esse id
        )
    }
}   
