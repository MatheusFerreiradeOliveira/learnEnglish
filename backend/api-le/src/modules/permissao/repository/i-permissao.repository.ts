import { Permissao } from "../schemas/permissao.schema";

export interface IPermissaoRepository {
    create(dto: Permissao)
    getAll()
    getById(id: string)
    update(id: string, dto: Permissao)
    delete(id: string)
}