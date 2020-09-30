import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { Permissao } from '../../schemas/permissao.schema';
import { UpdateUseCase } from './update.usecase';

@Injectable()
export class UpdateService {
  constructor(private updateUseCase: UpdateUseCase) {}
  async handle(id: string, dto: Permissao, req: Request, res: Response): Promise<Response> {
    const data = await this.updateUseCase.execute(id, dto);
    return res.status(200).json({ data: data });
  }
}
