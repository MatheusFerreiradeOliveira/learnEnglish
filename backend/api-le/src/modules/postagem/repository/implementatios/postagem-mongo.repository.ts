import { Postagem } from "../../schemas/postagem.schema";
import { Model,  } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'; 
import { IPostagemRepository } from '../i-postagem.repository';

export class PostagemMongoRepository implements IPostagemRepository{
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
            { _id: id }, 
            {
                $set: {descricao: dto.descricao, titulo: dto.titulo}
            }
        )
    }

    delete(id: string) {
        return this.postagemModel.deleteOne(
            {_id: id},
        )
    }
}