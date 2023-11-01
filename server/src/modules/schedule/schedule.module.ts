import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { ScheduleProvider } from './entities/schedule.provider';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, ...ScheduleProvider],
})
export class ScheduleModule {}
