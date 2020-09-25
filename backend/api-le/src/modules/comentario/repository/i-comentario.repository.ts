import { Comentario } from '../schemas/comentario.schema';

export interface IComentarioRepository {
  create(dto: Comentario);
  getAll();
  getById(id: string);
  update(id: string, dto: Comentario);
  delete(id: string);
}
