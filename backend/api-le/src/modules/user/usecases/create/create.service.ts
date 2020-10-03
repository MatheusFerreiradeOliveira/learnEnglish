import { Injectable } from '@nestjs/common';
import { CreateUseCase } from './create.usecase';
import { Request, Response } from 'express';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { User } from '../../schemas/user.schema';

@Injectable()
export class CreateService {
  constructor(private createUseCase: CreateUseCase) {}
  async handle(dto: User, res: Response): Promise<Response> {
    // try {
    const data = await this.createUseCase.execute(dto);
    console.log('aqui');
    return res.status(201).json({ data: data });
    // } catch (error) {
    //   return res.status(400).json({
    //     message: error.message || 'Unexpected error.',
    //   });
    // }
  }
}
