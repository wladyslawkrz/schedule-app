import { Inject, Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @Inject('SCHEDULE_REPOSITORY')
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async create(scheduleData: CreateScheduleDto) {
    const newScheduleRecord = this.scheduleRepository.create(scheduleData);

    return await this.scheduleRepository.save(newScheduleRecord);
  }

  async findAll() {
    return await this.scheduleRepository.find();
  }

  async findOne(id: number) {
    return await this.scheduleRepository.findOne({ where: { id } });
  }

  async update(id: number, newScheduleData: UpdateScheduleDto) {
    await this.scheduleRepository.update(id, newScheduleData);

    return await this.scheduleRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.scheduleRepository.delete(id);
  }
}
