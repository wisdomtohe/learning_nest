import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ExpectedDurationService } from './expected-duration.service';
import { CreateExpectedDurationDto } from './dto/create-expected-duration.dto';
import { UpdateExpectedDurationDto } from './dto/update-expected-duration.dto';

@Controller('expected-duration')
export class ExpectedDurationController {
  constructor(private readonly expectedDurationService: ExpectedDurationService) {}

  @Post()
  create(@Body() createExpectedDurationDto: CreateExpectedDurationDto) {
    return this.expectedDurationService.create(createExpectedDurationDto);
  }

  @Get()
  findAll() {
    return this.expectedDurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expectedDurationService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExpectedDurationDto: UpdateExpectedDurationDto) {
    return this.expectedDurationService.update(+id, updateExpectedDurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expectedDurationService.remove(+id);
  }
}
