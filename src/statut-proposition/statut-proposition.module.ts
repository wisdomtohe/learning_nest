import { Module } from '@nestjs/common';
import { StatutPropositionService } from './statut-proposition.service';
import { StatutPropositionController } from './statut-proposition.controller';

@Module({
  controllers: [StatutPropositionController],
  providers: [StatutPropositionService]
})
export class StatutPropositionModule {}
