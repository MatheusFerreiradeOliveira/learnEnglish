import { Permissao } from "../schemas/permissao.schema";

export interface IPermissaoRepository {
    create(dto: Permissao): Promise<Permissao>;
    getAll(): Promise<Permissao[]>
    getById(id: string): Promise<Permissao>
    update(id: string, dto: Permissao): Promise<Permissao>
    delete(id: string): Promise<void>
}