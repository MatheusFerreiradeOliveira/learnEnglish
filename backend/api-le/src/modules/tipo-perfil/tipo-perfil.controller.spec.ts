import { Test, TestingModule } from '@nestjs/testing';
import { TipoPerfilController } from './tipo-perfil.controller';

describe('TipoPerfilController', () => {
  let controller: TipoPerfilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoPerfilController],
    }).compile();

    controller = module.get<TipoPerfilController>(TipoPerfilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
