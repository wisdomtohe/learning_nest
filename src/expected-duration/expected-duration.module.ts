import { Module } from '@nestjs/common';
import { ExpectedDurationService } from './expected-duration.service';
import { ExpectedDurationController } from './expected-duration.controller';

@Module({
  controllers: [ExpectedDurationController],
  providers: [ExpectedDurationService]
})
export class ExpectedDurationModule {}
