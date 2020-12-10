import { Injectable } from '@nestjs/common';
import { CreateComplexityDto } from './dto/create-complexity.dto';
import { UpdateComplexityDto } from './dto/update-complexity.dto';

@Injectable()
export class ComplexityService {
  create(createComplexityDto: CreateComplexityDto) {
    return 'This action adds a new complexity';
  }

  findAll() {
    return `This action returns all complexity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} complexity`;
  }

  update(id: number, updateComplexityDto: UpdateComplexityDto) {
    return `This action updates a #${id} complexity`;
  }

  remove(id: number) {
    return `This action removes a #${id} complexity`;
  }
}
