import { Test, TestingModule } from '@nestjs/testing';
import { MemoryCardController } from './memory-card.controller';

describe('MemoryCardController', () => {
  let controller: MemoryCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemoryCardController],
    }).compile();

    controller = module.get<MemoryCardController>(MemoryCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
