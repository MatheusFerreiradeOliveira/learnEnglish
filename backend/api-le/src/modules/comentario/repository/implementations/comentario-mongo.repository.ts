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
      { _id: id }, //Isso aqui é o filtro, o primeiro q der match com esses parametros que é mudado
      {
        $set: { descricao: dto.descricao }, // aqui a gente escolhe os campos para mudar
        //ex: aqui to mudando a descricao
      },
    );
  }

  delete(id: string) {
    return this.comentarioModel.deleteOne(
      { _id: id }, //deleta a primeira ocorrencia que tiver esse id
    );
  }
}
