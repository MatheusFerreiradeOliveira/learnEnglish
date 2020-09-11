import { Test, TestingModule } from '@nestjs/testing';
import { MemoryCardService } from './memory-card.service';

describe('MemoryCardService', () => {
  let service: MemoryCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoryCardService],
    }).compile();

    service = module.get<MemoryCardService>(MemoryCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
