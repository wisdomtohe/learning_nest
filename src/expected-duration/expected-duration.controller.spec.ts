import { Test, TestingModule } from '@nestjs/testing';
import { ExpectedDurationController } from './expected-duration.controller';
import { ExpectedDurationService } from './expected-duration.service';

describe('ExpectedDurationController', () => {
  let controller: ExpectedDurationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpectedDurationController],
      providers: [ExpectedDurationService],
    }).compile();

    controller = module.get<ExpectedDurationController>(ExpectedDurationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
