import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { throws } from 'assert';
import { Comentario } from './comentario.schema';
import { ComentarioService } from './comentario.service';

@Controller('comentarios')
export class ComentarioController {
    
    constructor(private comentarioService: ComentarioService){};

    @Post()
    create(@Body() dto: Comentario){
        return this.comentarioService.create(dto);
    }

    @Get()
    getAll() {
        return this.comentarioService.getAll();
    }

    @Get(":id")
    getById(@Param("id") id: string) {
        return this.comentarioService.getById(id);
    }
}
