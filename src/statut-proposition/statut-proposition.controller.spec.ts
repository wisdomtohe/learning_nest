import { Test, TestingModule } from '@nestjs/testing';
import { StatutPropositionController } from './statut-proposition.controller';
import { StatutPropositionService } from './statut-proposition.service';

describe('StatutPropositionController', () => {
  let controller: StatutPropositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatutPropositionController],
      providers: [StatutPropositionService],
    }).compile();

    controller = module.get<StatutPropositionController>(StatutPropositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
