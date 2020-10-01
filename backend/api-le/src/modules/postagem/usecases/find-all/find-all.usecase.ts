import { Inject, Injectable } from '@nestjs/common';
import { IPostagemRepository } from '../../repository/i-postagem.repository';
import { Postagem } from '../../schemas/postagem.schema';
@Injectable()
export class FindAllUseCase {
  constructor(
    @Inject('IPostagemRepository')
    private iPostagemRepository: IPostagemRepository,
  ) {}
  async execute(): Promise<Postagem> {
    return await this.iPostagemRepository.getAll();
  }
}
