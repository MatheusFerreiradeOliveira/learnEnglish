import { Inject, Injectable } from '@nestjs/common';
import { ISignificadoRepository } from '../../repository/i-significado.repository';
import { Significado } from '../../schemas/significado.schema';
@Injectable()
export class FindAllUseCase {
  constructor(
    @Inject('ISignificadoRepository')
    private iSignificadoRepository: ISignificadoRepository,
  ) {}
  async execute(): Promise<Significado> {
    return await this.iSignificadoRepository.getAll();
  }
}
