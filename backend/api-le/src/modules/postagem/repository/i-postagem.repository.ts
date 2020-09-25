import { Postagem } from '../schemas/postagem.schema';

export interface IPostagemRepository {
  create(dto: Postagem);
  getAll();
  getById(id: string);
  update(id: string, dto: Postagem);
  delete(id: string);
}
