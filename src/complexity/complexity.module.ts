import { Module } from '@nestjs/common';
import { ComplexityService } from './complexity.service';
import { ComplexityController } from './complexity.controller';

@Module({
  controllers: [ComplexityController],
  providers: [ComplexityService]
})
export class ComplexityModule {}
