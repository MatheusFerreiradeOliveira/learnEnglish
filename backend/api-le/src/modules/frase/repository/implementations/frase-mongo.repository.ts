import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Frase } from '../../schemas/frase.schema';
import { IFraseRepository } from '../i-frase.repository';

export class FraseMongoRepository implements IFraseRepository {
  constructor(
    @InjectModel(Frase.name)
    private fraseModel: Model<Frase>,
  ) {}

  create(dto: Frase) {
    const newPhrase = new this.fraseModel(dto);
    return newPhrase.save();
  }

  getAll() {
    return this.fraseModel.find();
  }

  getById(id: string) {
    return this.fraseModel.findById(id);
  }

  update(id: string, dto: Frase) {
    return this.fraseModel.updateOne(
      { _id: id }, 
      {
        descricao: dto.descricao,
        memoryCard: dto.memoryCard
      },
    );
  }

  delete(id: string) {
    return this.fraseModel.deleteOne(
      { _id: id },
    );
  }
}
