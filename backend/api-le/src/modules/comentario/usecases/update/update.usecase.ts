import { Inject, Injectable } from '@nestjs/common';
import { IComentarioRepository } from '../../repository/i-comentario.repository';
import { Comentario } from '../../schemas/comentario.schema';
@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('IComentarioRepository')
    private iComentarioRepository: IComentarioRepository,
  ) {}
  async execute(id: string, dto: Comentario): Promise<Comentario> {
    return await this.iComentarioRepository.update(id, dto);
  }
}
