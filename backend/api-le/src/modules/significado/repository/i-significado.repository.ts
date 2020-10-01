import { Significado } from '../schemas/significado.schema';

export interface ISignificadoRepository {
  create(dto: Significado);
  getAll();
  getById(id: string);
  update(id: string, dto: Significado);
  delete(id: string);
}
