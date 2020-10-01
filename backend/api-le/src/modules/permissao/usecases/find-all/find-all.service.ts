import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { FindAllUseCase } from './find-all.usecase';

@Injectable()
export class FindAllService {
  constructor(private findAllUseCase: FindAllUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const data = await this.findAllUseCase.execute();
    return res.status(200).json({ data: data });
  }
}
