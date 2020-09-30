import { Injectable } from '@nestjs/common';
import { CreateUseCase } from './create.usecase';
import { Request, Response } from 'express';
import { Frase } from '../../schemas/frase.schema';

@Injectable()
export class CreateService {
  constructor(private createUseCase: CreateUseCase) {}
  async handle(dto: Frase, req: Request, res: Response): Promise<Response> {
    const data = await this.createUseCase.execute(dto);
    return res.status(200).json({ data: data });
  }
}
