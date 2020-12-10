import { Injectable } from '@nestjs/common';
import { CreateExpectedDurationDto } from './dto/create-expected-duration.dto';
import { UpdateExpectedDurationDto } from './dto/update-expected-duration.dto';

@Injectable()
export class ExpectedDurationService {
  create(createExpectedDurationDto: CreateExpectedDurationDto) {
    return 'This action adds a new expectedDuration';
  }

  findAll() {
    return `This action returns all expectedDuration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expectedDuration`;
  }

  update(id: number, updateExpectedDurationDto: UpdateExpectedDurationDto) {
    return `This action updates a #${id} expectedDuration`;
  }

  remove(id: number) {
    return `This action removes a #${id} expectedDuration`;
  }
}
