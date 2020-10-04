import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateService } from './usecases/create/create.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../../core/auth/service/jwt.guard';

@Controller('users')
export class UserController {
  constructor(private createService: CreateService) {}

  @Post()
  async create(@Req() req: Request, @Res() res: Response) {
    return this.createService.handle(req.body, res);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    return res.status(200).send({ data: [] });
  }
}
