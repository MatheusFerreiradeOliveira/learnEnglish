import { Inject, Injectable } from '@nestjs/common';
import { IComentarioRepository } from '../../repository/i-comentario.repository';
import { Comentario } from '../../schemas/comentario.schema';
@Injectable()
export class DeleteUseCase {
  constructor(
    @Inject('IComentarioRepository')
    private iComentarioRepository: IComentarioRepository,
  ) {}
  async execute(id: string): Promise<Comentario> {
    return await this.iComentarioRepository.delete(id);
  }
}
