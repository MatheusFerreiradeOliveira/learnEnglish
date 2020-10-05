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
import { Significado } from './schemas/significado.schema';
import { SignificadoService } from './significado.service';
import { Request, Response } from 'express';
import { CreateService } from './usecases/create/create.service';
import { DeleteService } from './usecases/delete/delete.service';
import { FindAllService } from './usecases/find-all/find-all.service';
import { FindByIdService } from './usecases/find-by-id/find-by-id.service';
import { UpdateService } from './usecases/update/update.service';
import { JwtAuthGuard } from 'src/core/auth/service/jwt.guard';

@Controller('significados')
export class SignificadoController {
  constructor(
    private significadoService: SignificadoService,
    private createService: CreateService,
    private findAllService: FindAllService,
    private findByIdService: FindByIdService,
    private updateService: UpdateService,
    private deleteService: DeleteService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: Significado, @Req() req: Request, @Res() res: Response) {
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
    @Body() dto: Significado,
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
