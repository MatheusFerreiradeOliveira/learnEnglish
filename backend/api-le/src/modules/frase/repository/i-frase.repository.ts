import { Frase } from '../schemas/frase.schema';

export interface IFraseRepository {
  create(dto: Frase);
  getAll();
  getById(id: string);
  update(id: string, dto: Frase);
  delete(id: string);
}
