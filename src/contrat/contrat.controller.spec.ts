import { Test, TestingModule } from '@nestjs/testing';
import { ContratController } from './contrat.controller';
import { ContratService } from './contrat.service';

describe('ContratController', () => {
  let controller: ContratController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContratController],
      providers: [ContratService],
    }).compile();

    controller = module.get<ContratController>(ContratController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
