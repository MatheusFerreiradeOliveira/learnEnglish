import { Inject, Injectable } from '@nestjs/common';
import { IPostagemRepository } from '../../repository/i-postagem.repository';
import { Postagem } from '../../schemas/postagem.schema';
@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('IPostagemRepository')
    private iPostagemRepository: IPostagemRepository,
  ) {}
  async execute(id: string, dto: Postagem): Promise<Postagem> {
    return await this.iPostagemRepository.update(id, dto);
  }
}
