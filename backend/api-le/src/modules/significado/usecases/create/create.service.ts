import { Injectable } from '@nestjs/common';
import { CreateUseCase } from './create.usecase';
import { Request, Response } from 'express';
import { Meaning } from '../../schemas/meaning.schema';

@Injectable()
export class CreateService {
  constructor(private createUseCase: CreateUseCase) {}
  async handle(dto: Meaning, req: Request, res: Response): Promise<Response> {
    const data = await this.createUseCase.execute(dto);
    return res.status(200).json({ data: data });
  }
}
