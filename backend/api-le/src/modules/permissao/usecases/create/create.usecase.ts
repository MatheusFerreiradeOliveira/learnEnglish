import { Inject, Injectable } from '@nestjs/common';
import { IPermissaoRepository } from '../../repository/i-permissao.repository';
import { Permissao } from '../../schemas/permissao.schema';

@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('IPermissaoRepository')
    private iPermissionRepository: IPermissaoRepository
  ) {}
  async execute(dto: Permissao): Promise<Permissao> {
    return await this.iPermissionRepository.create(dto);
  }
}
