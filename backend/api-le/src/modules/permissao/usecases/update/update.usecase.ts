import { Inject, Injectable } from '@nestjs/common';
import { IPermissaoRepository } from '../../repository/i-permissao.repository';
import { Permissao } from '../../schemas/permissao.schema';

@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('IPermissaoRepository')
    private iPermissaoRepository: IPermissaoRepository
  ) {}
  async execute(id: string, dto: Permissao): Promise<Permissao> {
    return await this.iPermissaoRepository.update(id, dto);
  }
}
