import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { throws } from 'assert';
import { Comentario } from './schemas/comentario.schema';
import { ComentarioService } from './comentario.service';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { Request, Response } from 'express';

@Controller('comentarios')
export class ComentarioController {
  constructor(
    private comentarioService: ComentarioService,
    private findByIdService: FindByIdService,
  ) {}

  @Post()
  create(@Body() dto: Comentario) {
    return this.comentarioService.create(dto);
  }

  @Get()
  getAll() {
    return this.comentarioService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    return this.findByIdService.handle(id, req, res);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Comentario) {
    return this.comentarioService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.comentarioService.delete(id);
  }
}
