import { Inject, Injectable } from '@nestjs/common';
import { IPostagemRepository } from '../../repository/i-postagem.repository';
import { Postagem } from '../../schemas/postagem.schema';
@Injectable()
export class DeleteUseCase {
  constructor(
    @Inject('IPostagemRepository')
    private iPostagemRepository: IPostagemRepository,
  ) {}
  async execute(id: string): Promise<Postagem> {
    return await this.iPostagemRepository.delete(id);
  }
}
