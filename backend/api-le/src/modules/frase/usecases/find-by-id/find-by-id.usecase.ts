import { Inject, Injectable } from '@nestjs/common';
import { IFraseRepository } from '../../repository/i-frase.repository';
import { Frase } from '../../schemas/frase.schema';
@Injectable()
export class FindByIdUseCase {
  constructor(
    @Inject('IFraseRepository')
    private iFraseRepository: IFraseRepository,
  ) {}
  async execute(id: string): Promise<Frase> {
    return await this.iFraseRepository.getById(id);
  }
}
