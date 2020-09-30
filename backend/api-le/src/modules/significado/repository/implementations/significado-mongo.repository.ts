import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Significado } from '../../schemas/significado.schema';
import { ISignificadoRepository } from '../i-significado.repository';

export class SignificadoMongoRepository implements ISignificadoRepository {
  constructor(
    @InjectModel(Significado.name)
    private significadoModel: Model<Significado>,
  ) {}

  create(dto: Significado) {
    const newComent = new this.significadoModel(dto);
    return newComent.save();
  }

  getAll() {
    return this.significadoModel.find();
  }

  getById(id: string) {
    return this.significadoModel.findById(id);
  }

  update(id: string, dto: Significado) {
    return this.significadoModel.updateOne(
      { _id: id },
      {
        significado: dto.significado,
        postagem: dto.postagem
      },
    );
  }

  delete(id: string) {
    return this.significadoModel.deleteOne(
      { _id: id },
    );
  }
}
