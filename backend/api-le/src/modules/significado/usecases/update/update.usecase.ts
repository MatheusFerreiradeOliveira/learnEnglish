import { Inject, Injectable } from '@nestjs/common';
import { ISignificadoRepository } from '../../repository/i-significado.repository';
import { Significado } from '../../schemas/significado.schema';
@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('ISignificadoRepository')
    private iSignificadoRepository: ISignificadoRepository,
  ) {}
  async execute(id: string, dto: Significado): Promise<Significado> {
    return await this.iSignificadoRepository.update(id, dto);
  }
}
