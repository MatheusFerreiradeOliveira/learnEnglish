import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { throws } from 'assert';
import { Postagem } from './schemas/postagem.schema';
import { PostagemService } from './postagem.service';

@Controller('postagems')
export class PostagemController {
    
    constructor(private postagemService: PostagemService){};

    @Post()
    create(@Body() dto: Postagem){
        return this.postagemService.create(dto);
    }

    @Get()
    getAll() {
        return this.postagemService.getAll();
    }

    @Get(":id")
    getById(@Param("id") id: string) {
        return this.postagemService.getById(id);
    }

    @Put(":id")
    update(@Param("id") id:string, @Body() dto: Postagem) {
        return this.postagemService.update(id, dto);
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.postagemService.delete(id)
    }
}
