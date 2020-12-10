import { Test, TestingModule } from '@nestjs/testing';
import { StatutPropositionService } from './statut-proposition.service';

describe('StatutPropositionService', () => {
  let service: StatutPropositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatutPropositionService],
    }).compile();

    service = module.get<StatutPropositionService>(StatutPropositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
