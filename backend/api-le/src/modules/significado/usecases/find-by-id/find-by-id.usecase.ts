import { Inject, Injectable } from '@nestjs/common';
import { ISignificadoRepository } from '../../repository/i-significado.repository';
import { Significado } from '../../schemas/significado.schema';
@Injectable()
export class FindByIdUseCase {
  constructor(
    @Inject('ISignificadoRepository')
    private iSignificadoRepository: ISignificadoRepository,
  ) {}
  async execute(id: string): Promise<Significado> {
    return await this.iSignificadoRepository.getById(id);
  }
}
