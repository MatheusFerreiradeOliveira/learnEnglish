import { Inject, Injectable } from '@nestjs/common';
import { IFraseRepository } from '../../repository/i-frase.repository';
import { Frase } from '../../schemas/frase.schema';
@Injectable()
export class UpdateUseCase {
  constructor(
    @Inject('IFraseRepository')
    private iFraseRepository: IFraseRepository,
  ) {}
  async execute(id: string, dto: Frase): Promise<Frase> {
    return await this.iFraseRepository.update(id, dto);
  }
}
