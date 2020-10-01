import { Injectable } from '@nestjs/common';
import { UpdateUseCase } from './update.usecase';
import { Request, Response } from 'express';
import { Frase } from '../../schemas/frase.schema';
@Injectable()
export class UpdateService {
  constructor(private updateUseCase: UpdateUseCase) {}
  async handle(id: string, dto: Frase, req: Request, res: Response): Promise<Response> {
    const data = await this.updateUseCase.execute(id, dto);
    return res.status(200).json({ data: data });
  }
}
