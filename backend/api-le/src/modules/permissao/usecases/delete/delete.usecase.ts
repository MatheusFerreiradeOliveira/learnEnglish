import { Inject, Injectable } from '@nestjs/common';
import { IPermissaoRepository } from '../../repository/i-permissao.repository';
import { Permissao } from '../../schemas/permissao.schema';

@Injectable()
export class DeleteUseCase {
  constructor(
    @Inject('IPermissaoRepository')
    private iPermissaoRepository: IPermissaoRepository
  ) {}
  async execute(id: string): Promise<Permissao> {
    return await this.iPermissaoRepository.delete(id);
  }
}
