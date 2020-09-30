import { Inject, Injectable } from '@nestjs/common';
import { ISignificadoRepository } from '../../repository/i-significado.repository';
import { Significado } from '../../schemas/significado.schema';
@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('ISignificadoRepository')
    private iSignificadoRepository: ISignificadoRepository,
  ) {}
  async execute(dto: Significado): Promise<Significado> {
    return await this.iSignificadoRepository.create(dto);
  }
}
