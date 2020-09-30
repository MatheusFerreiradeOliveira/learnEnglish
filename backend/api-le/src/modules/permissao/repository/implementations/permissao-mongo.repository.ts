import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Permissao } from "../../schemas/permissao.schema";
import { IPermissaoRepository } from "../i-permissao.repository";

export class PermissaoMongoRepository implements IPermissaoRepository {
    
    constructor(
        @InjectModel(Permissao.name)
        private permissaoModel: Model<Permissao>,
    ) {}
    
    create(dto: Permissao) {
        const newPermission = new this.permissaoModel(dto);
        return newPermission.save();
    }

    getAll() {
        return this.permissaoModel.find()
    }

    getById(id: string) {
        return this.permissaoModel.findById(id)
    }

    update(id: string, dto: Permissao) {
        return this.permissaoModel.update(
            {_id: id},
            {
                descricao: dto.descricao,
                tipoPerfil: dto.tipoPerfil
            }
        );
    }

    delete(id: string) {
        return this.permissaoModel.deleteOne(
            {_id: id},
        )
    }
}