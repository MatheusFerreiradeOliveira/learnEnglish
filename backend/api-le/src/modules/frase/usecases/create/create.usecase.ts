import { Inject, Injectable } from '@nestjs/common';
import { IFraseRepository } from '../../repository/i-frase.repository';
import { Frase } from '../../schemas/frase.schema';
@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('IFraseRepository')
    private iFraseRepository: IFraseRepository,
  ) {}
  async execute(dto: Frase): Promise<Frase> {
    return await this.iFraseRepository.create(dto);
  }
}
