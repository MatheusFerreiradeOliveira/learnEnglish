import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { Permissao } from '../../schemas/permissao.schema';
import { CreateUseCase } from './create.usecase';

@Injectable()
export class CreateService {
  constructor(private createUseCase: CreateUseCase) {}
  async handle(dto: Permissao, req: Request, res: Response): Promise<Response> {
    const data = await this.createUseCase.execute(dto);
    return res.status(200).json({ data: data });
  }
}
