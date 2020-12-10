import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StatutPropositionService } from './statut-proposition.service';
import { CreateStatutPropositionDto } from './dto/create-statut-proposition.dto';
import { UpdateStatutPropositionDto } from './dto/update-statut-proposition.dto';

@Controller('statut-proposition')
export class StatutPropositionController {
  constructor(private readonly statutPropositionService: StatutPropositionService) {}

  @Post()
  create(@Body() createStatutPropositionDto: CreateStatutPropositionDto) {
    return this.statutPropositionService.create(createStatutPropositionDto);
  }

  @Get()
  findAll() {
    return this.statutPropositionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statutPropositionService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStatutPropositionDto: UpdateStatutPropositionDto) {
    return this.statutPropositionService.update(+id, updateStatutPropositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statutPropositionService.remove(+id);
  }
}
