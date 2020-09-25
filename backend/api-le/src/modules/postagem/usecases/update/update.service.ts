import { Injectable } from '@nestjs/common';
import { UpdateUseCase } from './update.usecase';
import { Request, Response } from 'express';
import { Postagem } from '../../schemas/postagem.schema';

@Injectable()
export class UpdateService {
  constructor(private createUseCase: UpdateUseCase) {}
  async handle(id: string, dto: Postagem, req: Request, res: Response): Promise<Response> {
    const data = await this.createUseCase.execute(id, dto);
    return res.status(200).json({ data: data });
  }
}
