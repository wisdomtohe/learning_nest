import { Test, TestingModule } from '@nestjs/testing';
import { ComplexityController } from './complexity.controller';
import { ComplexityService } from './complexity.service';

describe('ComplexityController', () => {
  let controller: ComplexityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplexityController],
      providers: [ComplexityService],
    }).compile();

    controller = module.get<ComplexityController>(ComplexityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
