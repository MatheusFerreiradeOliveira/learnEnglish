import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comentario } from '../../schemas/comentario.schema';
import { IComentarioRepository } from '../i-comentario.repository';

export class ComentarioMongoRepository implements IComentarioRepository {
  constructor(
    @InjectModel(Comentario.name)
    private comentarioModel: Model<Comentario>,
  ) {}

  create(dto: Comentario) {
    const newComent = new this.comentarioModel(dto);
    return newComent.save();
  }

  getAll() {
    return this.comentarioModel.find();
  }

  getById(id: string) {
    return this.comentarioModel.findById(id);
  }

  update(id: string, dto: Comentario) {
    return this.comentarioModel.updateOne(
      { _id: id },
      {
        descricao: dto.descricao,
        likes: dto.likes,
      },
    );
  }

  delete(id: string) {
    return this.comentarioModel.deleteOne({ _id: id });
  }
}
