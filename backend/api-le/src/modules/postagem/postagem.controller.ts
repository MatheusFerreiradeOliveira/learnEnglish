import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { throws } from 'assert';
import { Postagem } from './postagem.schema';
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
}
