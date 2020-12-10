import { Injectable } from '@nestjs/common';
import { CreateStatutPropositionDto } from './dto/create-statut-proposition.dto';
import { UpdateStatutPropositionDto } from './dto/update-statut-proposition.dto';

@Injectable()
export class StatutPropositionService {
  create(createStatutPropositionDto: CreateStatutPropositionDto) {
    return 'This action adds a new statutProposition';
  }

  findAll() {
    return `This action returns all statutProposition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statutProposition`;
  }

  update(id: number, updateStatutPropositionDto: UpdateStatutPropositionDto) {
    return `This action updates a #${id} statutProposition`;
  }

  remove(id: number) {
    return `This action removes a #${id} statutProposition`;
  }
}
