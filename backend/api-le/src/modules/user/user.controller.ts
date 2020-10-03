import { Body, Controller, Inject, Post, Req, Res } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { CreateService } from './usecases/create/create.service';
import { Request, Response } from 'express';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private createService: CreateService) {}

  @Post()
  async create(@Req() req: Request, @Res() res: Response) {
    return this.createService.handle(req.body, res);
  }
}
