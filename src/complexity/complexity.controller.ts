import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ComplexityService } from './complexity.service';
import { CreateComplexityDto } from './dto/create-complexity.dto';
import { UpdateComplexityDto } from './dto/update-complexity.dto';

@Controller('complexity')
export class ComplexityController {
  constructor(private readonly complexityService: ComplexityService) {}

  @Post()
  create(@Body() createComplexityDto: CreateComplexityDto) {
    return this.complexityService.create(createComplexityDto);
  }

  @Get()
  findAll() {
    return this.complexityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complexityService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateComplexityDto: UpdateComplexityDto) {
    return this.complexityService.update(+id, updateComplexityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complexityService.remove(+id);
  }
}
