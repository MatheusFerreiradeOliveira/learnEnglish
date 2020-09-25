import { Inject, Injectable } from '@nestjs/common';
import { IPostagemRepository } from '../../repository/i-postagem.repository';
import { Postagem } from '../../schemas/postagem.schema';
@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('IComentarioRepository')
    private iComentarioRepository: IPostagemRepository,
  ) {}
  async execute(id: string, dto: Postagem): Promise<Postagem> {
    return await this.iComentarioRepository.update(id, dto);
  }
}
