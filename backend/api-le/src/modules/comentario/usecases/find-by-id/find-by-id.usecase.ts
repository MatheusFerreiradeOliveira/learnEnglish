import { Inject, Injectable } from '@nestjs/common';
import { IComentarioRepository } from '../../repository/i-comentario.repository';
import { Comentario } from '../../schemas/comentario.schema';
@Injectable()
export class FindByIdUseCase {
  constructor(
    @Inject('IComentarioRepository')
    private iComentarioRepository: IComentarioRepository,
  ) {}
  async execute(id: string): Promise<Comentario> {
    return await this.iComentarioRepository.getById(id);
  }
}
