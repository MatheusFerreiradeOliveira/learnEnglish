import { Inject, Injectable } from '@nestjs/common';
import { IPostagemRepository } from '../../repository/i-postagem.repository';
import { Postagem } from '../../schemas/postagem.schema';
@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('IComentarioRepository')
    private iComentarioRepository: IPostagemRepository,
  ) {}
  async execute(dto: Postagem): Promise<Postagem> {
    return await this.iComentarioRepository.create(dto);
  }
}
