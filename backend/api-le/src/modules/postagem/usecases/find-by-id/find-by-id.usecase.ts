import { Inject, Injectable } from '@nestjs/common';
import { IPostagemRepository } from '../../repository/i-postagem.repository';
import { Postagem } from '../../schemas/postagem.schema';
@Injectable()
export class FindByIdUseCase {
  constructor(
    @Inject('IPostagemRepository')
    private iComentarioRepository: IPostagemRepository,
  ) {}
  async execute(id: string): Promise<Postagem> {
    return await this.iComentarioRepository.getById(id);
  }
}
