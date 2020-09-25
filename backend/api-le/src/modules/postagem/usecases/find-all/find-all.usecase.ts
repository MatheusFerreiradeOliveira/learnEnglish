import { Inject, Injectable } from '@nestjs/common';
import { IPostagemRepository } from '../../repository/i-postagem.repository';
import { Postagem } from '../../schemas/postagem.schema';
@Injectable()
export class FindAllUseCase {
  constructor(
    @Inject('IComentarioRepository')
    private iComentarioRepository: IPostagemRepository,
  ) {}
  async execute(): Promise<Postagem> {
    return await this.iComentarioRepository.getAll();
  }
}
