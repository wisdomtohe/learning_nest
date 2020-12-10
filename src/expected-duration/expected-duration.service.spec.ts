import { Test, TestingModule } from '@nestjs/testing';
import { ExpectedDurationService } from './expected-duration.service';

describe('ExpectedDurationService', () => {
  let service: ExpectedDurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpectedDurationService],
    }).compile();

    service = module.get<ExpectedDurationService>(ExpectedDurationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
