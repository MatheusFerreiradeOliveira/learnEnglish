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
  UseGuards,
} from '@nestjs/common';
import { throws } from 'assert';
import { Comentario } from './schemas/comentario.schema';
import { ComentarioService } from './comentario.service';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { Request, Response } from 'express';
import { UpdateService } from './usecases/update/update.service';
import { DeleteService } from './usecases/delete/delete.service';
import { FindAllService } from './usecases/find-all/find-all.service';
import { CreateService } from './usecases/create/create.service';
import { JwtAuthGuard } from 'src/core/auth/service/jwt.guard';

@Controller('comentarios')
export class ComentarioController {
  constructor(
    private comentarioService: ComentarioService,
    private createService: CreateService,
    private findAllService: FindAllService,
    private findByIdService: FindByIdService,
    private updateService: UpdateService,
    private deleteService: DeleteService,
  ) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: Comentario, @Req() req: Request, @Res() res: Response) {
    return this.createService.handle(dto, req, res);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    return this.findAllService.handle(req, res);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    return this.findByIdService.handle(id, req, res);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: Comentario,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.updateService.handle(id, dto, req, res);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    return this.deleteService.handle(id, req, res);
  }
}
