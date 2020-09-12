import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Put(":id")
    update(@Param("id") id:string, @Body() dto: Comentario) {
        return this.comentarioService.update(id, dto);
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.comentarioService.delete(id)
    }

}
