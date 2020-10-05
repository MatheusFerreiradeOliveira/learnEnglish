import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/core/auth/service/jwt.guard';
import { CreateTypeProfileDto } from './dto/create-type-profile.dto';
import { CreateTypeProfileService } from './usecases/create/create-type-profile.service';
import { FindAllTypeProfileService } from './usecases/find-all/find-all-type-profile.service';

@Controller('typeprofiles')
export class TypeProfileController {
  constructor(
    private createTypeProfileService: CreateTypeProfileService,
    private findAllTypeProfileService: FindAllTypeProfileService,
  ) {}
  @Post()
  async create(@Body() dto: CreateTypeProfileDto, @Res() res: Response) {
    return this.createTypeProfileService.handle(dto, res);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
    @Res() res: Response,
  ) {
    return this.findAllTypeProfileService.handle(page, limit, res);
  }
}
