import { Injectable } from '@nestjs/common';
import { CreateUseCase } from './create.usecase';
import { Request, Response } from 'express';
import { User } from '../../schemas/user.schema';

@Injectable()
export class CreateService {
  constructor(private createUseCase: CreateUseCase) {}
  async handle(dto: User, req: Request, res: Response): Promise<Response> {
    const data = await this.createUseCase.execute(dto);
    return res.status(200).json({ data: data });
  }
}
