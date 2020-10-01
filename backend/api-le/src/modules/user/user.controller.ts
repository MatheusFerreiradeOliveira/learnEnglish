import { Body, Controller, Inject, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { CreateService } from './usecases/create/create.service';
import { Request, Response } from 'express';

@Controller('users')
export class UserController {
  constructor(
    @Inject()
    private createService: CreateService,
  ) {}

  @Post()
  async create(req: Request, res: Response) {
    return this.createService.handle(req.body, req, res);
  }
}
