import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Permissao } from "../../schemas/permissao.schema";
import { IPermissaoRepository } from "../i-permissao.repository";

export class PermissaoMongoRepository implements IPermissaoRepository {
    
    constructor(
        @InjectModel(Permissao.name)
        private permissaoModel: Model<Permissao>,
    ) {}
    
    create(dto: Permissao): Promise<Permissao> {
        const newPermission = new this.permissaoModel(dto);
        return newPermission.save();
    }

    getAll(): Promise<Permissao[]> {
        return this.permissaoModel.find().exec()
    }

    getById(id: string): Promise<Permissao> {
        return this.permissaoModel.findById(id).exec()
    }

    update(id: string, dto: Permissao): Promise<Permissao> {
        return this.permissaoModel.update(
            {_id: id},
            {
                descricao: dto.descricao,
                tipoPerfil: dto.tipoPerfil
            }
        ).exec();
    }

    delete(id: string): Promise<void> {
        this.permissaoModel.deleteOne(
            {_id: id},
        ).exec()
        return;
    }
}