import { Test, TestingModule } from '@nestjs/testing';
import { ComplexityService } from './complexity.service';

describe('ComplexityService', () => {
  let service: ComplexityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplexityService],
    }).compile();

    service = module.get<ComplexityService>(ComplexityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
