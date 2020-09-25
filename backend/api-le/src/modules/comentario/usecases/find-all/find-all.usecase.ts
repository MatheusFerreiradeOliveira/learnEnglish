import { Inject, Injectable } from '@nestjs/common';
import { IComentarioRepository } from '../../repository/i-comentario.repository';
import { Comentario } from '../../schemas/comentario.schema';
@Injectable()
export class FindAllUseCase {
  constructor(
    @Inject('IComentarioRepository')
    private iComentarioRepository: IComentarioRepository,
  ) {}
  async execute(): Promise<Comentario> {
    return await this.iComentarioRepository.getAll();
  }
}
