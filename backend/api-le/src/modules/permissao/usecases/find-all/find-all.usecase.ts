import { Inject, Injectable } from '@nestjs/common';
import { IPermissaoRepository } from '../../repository/i-permissao.repository';
import { Permissao } from '../../schemas/permissao.schema';

@Injectable()
export class FindAllUseCase {
  constructor(
    @Inject('IPermissaoRepository')
    private iPermissaoRepository: IPermissaoRepository
  ) {}
  async execute(): Promise<Permissao> {
    return await this.iPermissaoRepository.getAll();
  }
}
